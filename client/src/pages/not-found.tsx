import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { useTheme } from "@/lib/theme-context";
import { Link } from "wouter";

export default function NotFound() {
  const { isRockMode } = useTheme();
  
  return (
    <div className="container mx-auto py-24 px-4 flex items-center justify-center">
      <Card className={`w-full max-w-md mx-4 ${isRockMode ? 'bg-[#1e1e1e] border-[#333]' : 'bg-white'} transition-colors duration-300`}>
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2 items-center">
            <AlertCircle className={`h-8 w-8 ${isRockMode ? 'text-[#ff5722]' : 'text-red-500'} transition-colors duration-300`} />
            <h1 className={`text-2xl font-bold font-serif ${isRockMode ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>
              404 Page Not Found
            </h1>
          </div>

          <p className={`mt-4 text-sm ${isRockMode ? 'text-[#aaaaaa]' : 'text-gray-600'} transition-colors duration-300`}>
            We can't find the page you're looking for.
          </p>
          
          <div className="mt-6 flex justify-center">
            <Link to="/">
              <button 
                className={`px-6 py-2 rounded-md font-medium ${
                  isRockMode 
                    ? 'bg-[#ff5722] hover:bg-[#ff4500]' 
                    : 'bg-[#1a7a3d] hover:bg-[#156e35]'
                } text-white transition-colors duration-300`}
              >
                Return to Home
              </button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
