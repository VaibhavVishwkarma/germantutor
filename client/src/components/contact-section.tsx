import { Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactSection() {
  const handleQuickMessage = (e: React.FormEvent) => {
    e.preventDefault();
    // Form will be handled by Web3Forms
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
              <p className="text-blue-100">
                Ready to start your German learning journey? Fill out the form and we'll get back to you soon!
              </p>
            </div>
          </div>
          
          <Card className="bg-white bg-opacity-10 border-white border-opacity-30">
            <CardContent className="p-8">
              <h3 className="font-poppins font-bold text-xl mb-6 text-white">Quick Message</h3>
              <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
                <input type="hidden" name="access_key" value="2b8984e0-8732-474a-b4e7-489535f685f9" />
                <input type="hidden" name="subject" value="German Tutor Contact Form" />
                <input type="hidden" name="redirect" value="https://web3forms.com/success" />
                
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-3 bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-blue-100 rounded-lg focus:ring-2 focus:ring-white focus:ring-opacity-50 focus:outline-none"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full p-3 bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-blue-100 rounded-lg focus:ring-2 focus:ring-white focus:ring-opacity-50 focus:outline-none"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  className="w-full p-3 bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-blue-100 rounded-lg focus:ring-2 focus:ring-white focus:ring-opacity-50 focus:outline-none resize-none"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-brand-orange text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
