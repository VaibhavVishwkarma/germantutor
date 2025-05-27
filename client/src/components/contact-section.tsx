import { Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactSection() {
  const handleQuickMessage = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle quick message form submission
    alert("संदेश भेजा गया!");
  };

  return (
    <section id="contact" className="py-16 bg-brand-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-poppins text-3xl lg:text-4xl font-bold mb-6">
              Contact Us
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Have any questions or need help? We're here to assist you
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                  <Phone className="text-white" />
                </div>
                <div>
                  <div className="font-semibold">Call Us</div>
                  <div className="text-blue-100">+91 98765 43210</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                  <Mail className="text-white" />
                </div>
                <div>
                  <div className="font-semibold">Email Us</div>
                  <div className="text-blue-100">support@germantutor.in</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                  <FaWhatsapp className="text-white text-xl" />
                </div>
                <div>
                  <div className="font-semibold">WhatsApp</div>
                  <div className="text-blue-100">+91 98765 43210</div>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="font-semibold text-xl mb-4">Support Timing</h3>
              <div className="text-blue-100">
                Monday to Saturday: 9 AM to 8 PM<br />
                Sunday: 10 AM to 6 PM
              </div>
            </div>
          </div>
          
          <Card className="bg-white bg-opacity-10 border-white border-opacity-30">
            <CardContent className="p-8">
              <h3 className="font-poppins font-bold text-xl mb-6 text-white">Quick Message</h3>
              <form onSubmit={handleQuickMessage} className="space-y-4">
                <Input
                  type="text"
                  placeholder="आपका नाम"
                  className="bg-white bg-opacity-20 border-white border-opacity-30 text-white placeholder-blue-100 focus:ring-white focus:ring-opacity-50"
                  required
                />
                <Input
                  type="email"
                  placeholder="ईमेल"
                  className="bg-white bg-opacity-20 border-white border-opacity-30 text-white placeholder-blue-100 focus:ring-white focus:ring-opacity-50"
                  required
                />
                <Textarea
                  placeholder="आपका संदेश"
                  rows={4}
                  className="bg-white bg-opacity-20 border-white border-opacity-30 text-white placeholder-blue-100 focus:ring-white focus:ring-opacity-50"
                  required
                />
                <Button
                  type="submit"
                  className="w-full bg-brand-orange text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors"
                >
                  संदेश भेजें
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
