import { 
  Presentation, 
  Smartphone, 
  IdCard, 
  Headphones, 
  Users, 
  Clock 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Using react-icons for icons that aren't available in lucide-react
import { FaChalkboardTeacher, FaMobileAlt, FaCertificate, FaHeadphones, FaUsers, FaClock } from "react-icons/fa";

export default function Features() {
  const features = [
    {
      icon: <FaChalkboardTeacher className="text-blue-600 text-xl" />,
      title: "विशेषज्ञ शिक्षक",
      description: "जर्मनी से प्रमाणित शिक्षक। भारतीय छात्रों को पढ़ाने का विशेष अनुभव।",
      bgColor: "bg-blue-100"
    },
    {
      icon: <FaMobileAlt className="text-green-600 text-xl" />,
      title: "मोबाइल फ्रेंडली",
      description: "कहीं भी, कभी भी सीखें। Android और iOS दोनों में बेहतरीन अनुभव।",
      bgColor: "bg-green-100"
    },
    {
      icon: <FaCertificate className="text-yellow-600 text-xl" />,
      title: "अंतर्राष्ट्रीय प्रमाणपत्र",
      description: "कोर्स पूरा करने पर मिलता है अंतर्राष्ट्रीय स्तर पर मान्य प्रमाणपत्र।",
      bgColor: "bg-yellow-100"
    },
    {
      icon: <FaHeadphones className="text-purple-600 text-xl" />,
      title: "इंटरैक्टिव लर्निंग",
      description: "आवाज़ की पहचान, उच्चारण सुधार, और रियल-टाइम फीडबैक।",
      bgColor: "bg-purple-100"
    },
    {
      icon: <FaUsers className="text-red-600 text-xl" />,
      title: "कम्युनिटी सपोर्ट",
      description: "अन्य छात्रों के साथ जुड़ें। डाउट क्लियर करें और प्रैक्टिस करें।",
      bgColor: "bg-red-100"
    },
    {
      icon: <FaClock className="text-indigo-600 text-xl" />,
      title: "लाइफटाइम एक्सेस",
      description: "एक बार खरीदें, हमेशा के लिए एक्सेस करें। अपडेट्स भी मुफ्त।",
      bgColor: "bg-indigo-100"
    }
  ];

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-poppins text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            हमारी विशेषताएं
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            जर्मन सीखने के लिए भारत में सबसे अच्छा तरीका
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
