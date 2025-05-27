import { Star, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Testimonials() {
  const testimonials = [
    {
      rating: 5,
      text: "मेरे बेटे ने सिर्फ 3 महीने में जर्मन सीख लिया। शिक्षक बहुत अच्छे हैं और बच्चों को समझाने का तरीका शानदार है।",
      name: "प्रिया शर्मा",
      role: "आर्यन की माँ (10 साल)",
      image: "https://images.unsplash.com/photo-1582233479366-6d38bc390a08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
    },
    {
      rating: 5,
      text: "बहुत ही किफायती कीमत में बेहतरीन कोर्स। मेरी बेटी अब धाराप्रवाह जर्मन बोल सकती है। जर्मनी जाने का सपना पूरा होगा।",
      name: "राजेश कुमार",
      role: "अनीता के पापा (12 साल)",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
    },
    {
      rating: 5,
      text: "German Tutor से बेहतर कोई नहीं। छोटे बच्चों के लिए बिल्कुल perfect है। ऐप भी बहुत easy है use करने में।",
      name: "सुनीता देवी",
      role: "करण की माँ (8 साल)",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-poppins text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            छात्रों की समीक्षाएं
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            हजारों खुश छात्रों और माता-पिता की राय
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-50">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{testimonial.text}</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4 object-cover" 
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-green-50 px-6 py-3 rounded-xl">
            <Trophy className="text-green-600 text-xl" />
            <span className="font-semibold text-gray-900">4.8/5 रेटिंग</span>
            <span className="text-gray-600">500+ रिव्यूज के आधार पर</span>
          </div>
        </div>
      </div>
    </section>
  );
}
