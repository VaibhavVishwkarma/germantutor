import { Play, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToCourses = () => {
    const section = document.getElementById("courses");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-orange-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="bg-german-red text-white px-3 py-1 rounded-full text-sm font-medium">
                🇩🇪 German
              </span>
              <span className="bg-brand-orange text-white px-3 py-1 rounded-full text-sm font-medium">
                🇮🇳 Made for India
              </span>
            </div>
            
            <h1 className="font-poppins text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Want to Learn <span className="text-brand-orange">German Language</span>?
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Complete course from A1 to B1 levels. Expert tutoring. Start from ₹1,999. 
              Your future in Germany starts here!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToCourses}
                className="bg-brand-orange text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-600 transition-colors shadow-lg"
              >
                <Play className="mr-2 h-4 w-4" />
                View Courses
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-brand-blue text-brand-blue px-8 py-4 rounded-xl font-semibold hover:bg-brand-blue hover:text-white transition-colors"
              >
                <Phone className="mr-2 h-4 w-4" />
                Get Started Today
              </Button>
            </div>
            
            <div className="flex items-center mt-8 space-x-8">
              <div className="text-center">
                <div className="font-bold text-2xl text-brand-blue">500+</div>
                <div className="text-sm text-gray-600">Happy Students</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-2xl text-brand-blue">95%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-2xl text-brand-blue">4.8/5</div>
                <div className="text-sm text-gray-600">Rating</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Indian family learning together" 
              className="rounded-2xl shadow-2xl w-full" 
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="text-green-600 text-lg">🏆</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Expert Tutoring</div>
                  <div className="text-sm text-gray-600">Quality Education</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
