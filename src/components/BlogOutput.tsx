import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Copy, Download } from "lucide-react";
import { showError, showSuccess } from "@/utils/toast";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface ParsedBlogData {
  title: string;
  metaDescription: string;
  keywords: string[];
  markdownContent: string; // The full raw markdown
  htmlContent: string; // This is actually the markdown content for the blog body
}

interface BlogOutputProps {
  blogData: ParsedBlogData;
}

const BlogOutput = ({ blogData }: BlogOutputProps) => {
  const [copying, setCopying] = useState(false);

  const copyToClipboard = async () => {
    setCopying(true);
    try {
      // Copy the full markdown content as requested by the user
      await navigator.clipboard.writeText(blogData.markdownContent);
      showSuccess("Blog content copied to clipboard!");
    } catch (error) {
      console.error("Failed to copy:", error);
      showError("Failed to copy content");
    } finally {
      setCopying(false);
    }
  };

  const exportAsMarkdown = () => {
    try {
      const blob = new Blob([blogData.markdownContent], { type: "text/markdown" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${blogData.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.md`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showSuccess("Blog exported as Markdown!");
    } catch (error) {
      console.error("Failed to export as Markdown:", error);
      showError("Failed to export as Markdown");
    }
  };

  return (
    <Card className="bg-gray-800 bg-opacity-80 text-white border-gray-700">
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <CardTitle className="text-white">Generated Blog</CardTitle>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={copyToClipboard}
              disabled={copying}
              className="bg-gray-700 text-gray-200 border-gray-600 hover:bg-gray-600"
            >
              <Copy className="mr-2 h-4 w-4" />
              {copying ? "Copying..." : "Copy"}
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={exportAsMarkdown}
              className="bg-gray-700 text-gray-200 border-gray-600 hover:bg-gray-600"
            >
              <Download className="mr-2 h-4 w-4" />
              Markdown
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-2 text-white">{blogData.title}</h2>
            <p className="text-gray-300 mb-4">
              {blogData.metaDescription}
            </p>
            <div className="flex flex-wrap gap-2">
              {blogData.keywords.map((keyword, index) => (
                <Badge key={index} variant="secondary" className="bg-gray-700 text-gray-200 border-gray-600">
                  {keyword.trim()}
                </Badge>
              ))}
            </div>
          </div>

          <div className="prose prose-invert max-w-none border-t pt-6 border-gray-700">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {blogData.htmlContent}
            </ReactMarkdown>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogOutput;