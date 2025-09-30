import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const Header = () => {
  return (
    <header className="py-4 px-6 flex items-center justify-between bg-white dark:bg-gray-900 shadow-sm">
      <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-gray-900 dark:text-white">
        <Sparkles className="h-7 w-7 text-blue-600" />
        BlogGenie AI
      </Link>
      <nav>
        <Link to="/blog-generator">
          <Button variant="ghost" className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
            Generate Blog
          </Button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;