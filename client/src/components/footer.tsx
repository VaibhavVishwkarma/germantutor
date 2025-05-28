import { GraduationCap } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-german-red to-brand-orange rounded-lg flex items-center justify-center">
                <GraduationCap className="text-white" />
              </div>
              <div>
                <h3 className="font-poppins font-bold text-lg">German Tutor</h3>
                <p className="text-xs text-gray-400">Learn German Language</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              The best German language learning platform for Indian children
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Courses</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#courses" className="hover:text-white transition-colors">A1 Level</a></li>
              <li><a href="#courses" className="hover:text-white transition-colors">A2 Level</a></li>
              <li><a href="#courses" className="hover:text-white transition-colors">B1 Level</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Help</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors"></a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <FaFacebook className="text-sm" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <FaInstagram className="text-sm" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <FaYoutube className="text-sm" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <FaWhatsapp className="text-sm" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 German Tutor. All rights reserved. | Made with ❤️ in India</p>
        </div>
      </div>
    </footer>
  );
}
