import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Zap, Globe, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div 
      className="min-h-screen flex flex-col bg-cover bg-center relative"
      style={{ backgroundImage: "url('/pexels-photo-4067695.webp')" }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div> {/* Dark overlay */}
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16 relative z-10"> {/* Added relative z-10 */}
        {/* Hero Section */}
        <section className="text-center mb-20 py-12 rounded-xl shadow-lg animate-fade-in text-white">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Unleash Your Content with <span className="text-blue-300">BlogGenie AI</span>
          </h1>
          <p className="text-xl max-w-4xl mx-auto mb-10 animate-slide-up">
            Generate SEO-optimized, engaging blog posts in seconds. Just provide a topic and word count, and let our AI craft compelling content for your audience.
          </p>
          <Link to="/blog-generator">
            <Button size="lg" className="text-lg px-10 py-7 bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              <FileText className="mr-3 h-6 w-6" />
              Start Generating Blogs Now
            </Button>
          </Link>
        </section>

        {/* Features Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Why Choose BlogGenie AI?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl bg-gray-800 bg-opacity-80 text-white border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl font-semibold text-blue-400">
                  <Zap className="mr-3 h-7 w-7" />
                  Lightning Fast
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-200 text-lg">
                Generate complete blog posts in seconds, freeing up hours of your valuable time. Perfect for content creators and marketers on tight deadlines.
              </CardContent>
            </Card>

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl bg-gray-800 bg-opacity-80 text-white border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl font-semibold text-green-400">
                  <ShieldCheck className="mr-3 h-7 w-7" />
                  SEO Optimized
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-200 text-lg">
                Every blog includes a compelling title, concise meta description, and relevant keywords to boost your search engine rankings.
              </CardContent>
            </Card>

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl bg-gray-800 bg-opacity-80 text-white border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl font-semibold text-purple-400">
                  <Globe className="mr-3 h-7 w-7" />
                  Flexible Exports
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-200 text-lg">
                Export your generated blogs as Markdown or copy directly to your clipboard for seamless publishing to any platform.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="mt-20 text-center">
          <h2 className="text-4xl font-bold text-white mb-12">
            How BlogGenie AI Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-800 bg-opacity-80 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-white border-gray-700">
              <div className="text-5xl font-extrabold text-blue-400 mb-4">1</div>
              <h3 className="font-bold text-xl mb-2">Define Your Topic</h3>
              <p className="text-gray-200 text-base">
                Simply tell BlogGenie AI what you want to write about and your desired word count.
              </p>
            </div>
            <div className="bg-gray-800 bg-opacity-80 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-white border-gray-700">
              <div className="text-5xl font-extrabold text-green-400 mb-4">2</div>
              <h3 className="font-bold text-xl mb-2">AI Generates Content</h3>
              <p className="text-gray-200 text-base">
                Our advanced AI crafts a complete, SEO-optimized blog post tailored to your specifications.
              </p>
            </div>
            <div className="bg-gray-800 bg-opacity-80 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-white border-gray-700">
              <div className="text-5xl font-extrabold text-purple-400 mb-4">3</div>
              <h3 className="font-bold text-xl mb-2">Review & Refine</h3>
              <p className="text-gray-200 text-base">
                Easily review the generated content, make any necessary edits, and ensure it matches your brand voice.
              </p>
            </div>
            <div className="bg-gray-800 bg-opacity-80 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-white border-gray-700">
              <div className="text-5xl font-extrabold text-red-400 mb-4">4</div>
              <h3 className="font-bold text-xl mb-2">Publish with Ease</h3>
              <p className="text-gray-200 text-base">
                Export your blog as Markdown or copy it directly, ready for immediate publication to your platform.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;