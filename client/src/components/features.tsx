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
      title: "Expert Teacher",
      description: "Experienced tutor with special expertise in teaching German to Indian students.",
      bgColor: "bg-blue-100"
    },
    {
      icon: <FaMobileAlt className="text-green-600 text-xl" />,
      title: "Mobile Friendly",
      description: "Learn anywhere, anytime. Great experience on both Android and iOS.",
      bgColor: "bg-green-100"
    },
    {
      icon: <FaCertificate className="text-yellow-600 text-xl" />,
      title: "Course Completion",
      description: "Get course completion certificate after successfully finishing each level.",
      bgColor: "bg-yellow-100"
    },
    {
      icon: <FaHeadphones className="text-purple-600 text-xl" />,
      title: "Interactive Learning",
      description: "Voice recognition, pronunciation correction, and real-time feedback.",
      bgColor: "bg-purple-100"
    },
    {
      icon: <FaUsers className="text-red-600 text-xl" />,
      title: "Community Support",
      description: "Connect with other students. Clear doubts and practice together.",
      bgColor: "bg-red-100"
    },
    {
      icon: <FaClock className="text-indigo-600 text-xl" />,
      title: "Lifetime Access",
      description: "Buy once, access forever. Free updates included.",
      bgColor: "bg-indigo-100"
    }
  ];

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-poppins text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The best way to learn German in India
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
