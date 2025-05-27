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
      title: "Personal Tutor",
      description: "One-on-one teaching with personalized attention for each student.",
      bgColor: "bg-blue-100"
    },
    {
      icon: <FaMobileAlt className="text-green-600 text-xl" />,
      title: "Flexible Learning",
      description: "Learn at your own pace with flexible timing and schedule.",
      bgColor: "bg-green-100"
    },
    {
      icon: <FaHeadphones className="text-purple-600 text-xl" />,
      title: "Interactive Sessions",
      description: "Engaging lessons with pronunciation practice and real conversations.",
      bgColor: "bg-purple-100"
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
