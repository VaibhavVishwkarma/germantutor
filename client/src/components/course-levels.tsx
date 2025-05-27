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
      title: "शुरुआती स्तर",
      description: "बुनियादी जर्मन सीखें - अभिवादन, परिचय, दैनिक वार्तालाप",
      features: ["Basic Grammar", "Common Phrases", "Pronunciation"],
      price: "₹1,999",
      bgColor: "from-green-50 to-green-100",
      borderColor: "border-green-200",
      iconBg: "bg-green-500",
      checkColor: "text-green-500"
    },
    {
      id: "A2",
      title: "प्राथमिक स्तर",
      description: "व्यावहारिक जर्मन - खरीदारी, यात्रा, पारिवारिक चर्चा",
      features: ["Past & Future Tenses", "Daily Conversations", "Cultural Context"],
      price: "₹1,999",
      bgColor: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
      iconBg: "bg-blue-500",
      checkColor: "text-blue-500"
    },
    {
      id: "B1",
      title: "मध्यम स्तर",
      description: "उन्नत जर्मन - व्यावसायिक संवाद, लेखन कौशल",
      features: ["Complex Grammar", "Professional German", "Writing Skills"],
      price: "₹1,999",
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
            जर्मन भाषा के स्तर
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A1 से B1 तक का संपूर्ण कोर्स। हर स्तर में व्यापक सिलेबस और व्यावहारिक अभ्यास
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                    <div className="text-sm text-gray-600">पूरा कोर्स</div>
                  </div>
                  
                  <Button 
                    onClick={() => onLevelSelect(`${level.id} Level`, level.price)}
                    className="w-full bg-brand-orange text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors"
                  >
                    {level.id} चुनें
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
          
          {/* Complete Package */}
          <Card className="bg-gradient-to-br from-yellow-50 to-orange-100 border-2 border-brand-orange hover:shadow-lg transition-shadow relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-brand-orange text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
            </div>
            
            <CardContent className="p-6 mt-2">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-orange to-german-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <Crown className="text-white text-xl" />
                </div>
                <h3 className="font-poppins font-bold text-xl text-gray-900 mb-2">संपूर्ण पैकेज</h3>
                <p className="text-gray-600 text-sm mb-4">A1 से B1 तक - पूरा कोर्स एक साथ, ज्यादा बचत के साथ</p>
                
                <div className="space-y-2 text-sm text-gray-700 mb-6">
                  <div className="flex items-center">
                    <Check className="text-brand-orange mr-2 h-4 w-4" />
                    <span>All 3 Levels</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="text-brand-orange mr-2 h-4 w-4" />
                    <span>Certificate</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="text-brand-orange mr-2 h-4 w-4" />
                    <span>Lifetime Access</span>
                  </div>
                </div>
                
                <div className="text-center mb-4">
                  <div className="line-through text-gray-500">₹5,997</div>
                  <span className="text-2xl font-bold text-brand-orange">₹4,999</span>
                  <div className="text-sm text-green-600 font-medium">₹998 की बचत!</div>
                </div>
                
                <Button 
                  onClick={() => onLevelSelect("Complete Package", "₹4,999")}
                  className="w-full bg-gradient-to-r from-brand-orange to-german-red text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-shadow"
                >
                  Complete Package
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
