import { useState, useEffect } from "react";
import { GraduationCap, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`bg-white sticky top-0 z-50 transition-shadow ${isScrolled ? "shadow-md" : "shadow-sm"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-german-red to-brand-orange rounded-lg flex items-center justify-center">
              <GraduationCap className="text-white text-xl" />
            </div>
            <div>
              <h1 className="font-poppins font-bold text-xl text-brand-blue">German Tutor</h1>
              <p className="text-xs text-gray-600">Learn German Language</p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection("courses")}
              className="text-gray-700 hover:text-brand-orange transition-colors"
            >
              Courses
            </button>
            <button 
              onClick={() => scrollToSection("features")}
              className="text-gray-700 hover:text-brand-orange transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection("testimonials")}
              className="text-gray-700 hover:text-brand-orange transition-colors"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-brand-orange transition-colors"
            >
              Contact
            </button>
          </nav>
          
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="text-brand-blue text-xl" />
            ) : (
              <Menu className="text-brand-blue text-xl" />
            )}
          </Button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection("courses")}
                className="text-gray-700 hover:text-brand-orange transition-colors text-left"
              >
                Courses
              </button>
              <button 
                onClick={() => scrollToSection("features")}
                className="text-gray-700 hover:text-brand-orange transition-colors text-left"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection("testimonials")}
                className="text-gray-700 hover:text-brand-orange transition-colors text-left"
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-brand-orange transition-colors text-left"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
