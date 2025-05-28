import { Check, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface CourseLevelsProps {
  onLevelSelect: (level: string, price: string) => void;
}

export default function CourseLevels({ onLevelSelect }: CourseLevelsProps) {
  const levels = [
    {
      id: "A1",
      title: "Beginner Level",
      description: "Learn basic German - greetings, introductions, daily conversations",
      features: ["Basic Grammar", "Common Phrases", "Pronunciation"],
      price: "₹1,999",
      bgColor: "from-green-50 to-green-100",
      borderColor: "border-green-200",
      iconBg: "bg-green-500",
      checkColor: "text-green-500"
    },
    {
      id: "A2",
      title: "Elementary Level",
      description: "Practical German - shopping, travel, family discussions",
      features: ["Past & Future Tenses", "Daily Conversations", "Cultural Context"],
      price: "₹3,999",
      bgColor: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
      iconBg: "bg-blue-500",
      checkColor: "text-blue-500"
    },
    {
      id: "B1",
      title: "Intermediate Level",
      description: "Advanced German - professional communication, writing skills",
      features: ["Complex Grammar", "Professional German", "Writing Skills"],
      price: "₹4,999",
      bgColor: "from-purple-50 to-purple-100",
      borderColor: "border-purple-200",
      iconBg: "bg-purple-500",
      checkColor: "text-purple-500"
    }
  ];

  return (
    <section id="courses" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-poppins text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            German Language Levels
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Complete course from A1 to B1. Each level includes comprehensive syllabus and practical exercises
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {levels.map((level) => (
            <Card key={level.id} className={`bg-gradient-to-br ${level.bgColor} ${level.borderColor} hover:shadow-lg transition-shadow`}>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className={`w-16 h-16 ${level.iconBg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-white font-bold text-xl">{level.id}</span>
                  </div>
                  <h3 className="font-poppins font-bold text-xl text-gray-900 mb-2">{level.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{level.description}</p>
                  
                  <div className="space-y-2 text-sm text-gray-700 mb-6">
                    {level.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <Check className={`${level.checkColor} mr-2 h-4 w-4`} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center mb-4">
                    <span className="text-2xl font-bold text-brand-orange">{level.price}</span>
                    <div className="text-sm text-gray-600">Complete Course</div>
                  </div>
                  
                  <Button 
                    onClick={() => onLevelSelect(`${level.id} Level`, level.price)}
                    className="w-full bg-brand-orange text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors"
                  >
                    Choose {level.id}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
          

        </div>
      </div>
    </section>
  );
}
