export interface BlogRequest {
  topic: string;
  wordCount: number;
  batchMode: boolean;
}

// The API will now return the raw markdown string
export type BlogResponse = string;

export const generateBlog = async (request: BlogRequest): Promise<BlogResponse> => {
  try {
    // Validate inputs
    if (!request.topic || request.wordCount < 100 || request.wordCount > 2000) {
      throw new Error("Invalid input. Please provide a topic and word count between 100-2000.");
    }

    const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;
    
    if (!apiKey) {
      throw new Error("OpenRouter API key not configured. Please set VITE_OPENROUTER_API_KEY in your environment variables.");
    }

    // Create prompt based on batch mode
    let prompt;
    if (request.batchMode) {
      // Batch mode is not supported for raw Markdown output in this version.
      // If batch mode is requested, the LLM would need to return an array of markdown strings,
      // which would complicate parsing. Sticking to single markdown output for now.
      throw new Error("Batch mode is not supported for raw Markdown output in this version.");
    } else {
      prompt = `You are a professional SEO blog writer.  

Write a full-length blog post in Markdown only (no HTML, no JSON).  

Output ONLY in this order:
1. Title: a catchy, relevant title
2. Meta Description: 1–2 sentences, max 160 characters
3. Keywords: 5–10 SEO keywords, comma-separated
4. Blog Content: minimum ${request.wordCount} words, with clear headings (#, ##, ###), bullet lists (-), examples, statistics, and actionable insights

Topic: ${request.topic}  
Target Word Count: ${request.wordCount}  

Do not stop early. Write in an engaging, human style.`;
    }

    // Call OpenRouter API
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": window.location.origin,
        "X-Title": "AI Blog Generator"
      },
      body: JSON.stringify({
        model: "openai/gpt-4o-mini",
        messages: [
          {
            role: "user",
            content: prompt
          }
        ],
        // Removed response_format: { type: "json_object" } as we want raw markdown
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`OpenRouter API error: ${errorText || response.statusText}`);
    }

    const data = await response.json();
    const content = data.choices[0]?.message?.content;
    
    if (!content) {
      throw new Error("No content received from OpenRouter API");
    }

    // Return the raw markdown content directly
    return content;
  } catch (error: any) {
    console.error("Blog generation error:", error);
    throw new Error(error.message || "An error occurred while generating the blog");
  }
};