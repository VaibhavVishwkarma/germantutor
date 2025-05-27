import { useState } from "react";
import { X, Check, Layers, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedLevel: string;
  selectedPrice: string;
}

export default function PaymentModal({ isOpen, onClose, selectedLevel, selectedPrice }: PaymentModalProps) {
  const [showEnrollmentForm, setShowEnrollmentForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    studentName: "",
    age: "",
    parentName: "",
    email: "",
    phone: "",
    transactionId: "",
    city: "",
    notes: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Web3Forms API integration
      const formDataToSend = new FormData();
      formDataToSend.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "");
      formDataToSend.append("subject", `German Tutor Enrollment - ${selectedLevel}`);
      formDataToSend.append("from_name", formData.parentName);
      formDataToSend.append("selected_level", selectedLevel);
      formDataToSend.append("selected_price", selectedPrice);
      
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });

      if (response.ok) {
        toast({
          title: "Enrollment Successful!",
          description: "आपका फॉर्म सफलतापूर्वक सबमिट हो गया। हम जल्दी ही आपसे संपर्क करेंगे।",
        });
        onClose();
        setShowEnrollmentForm(false);
        setFormData({
          studentName: "",
          age: "",
          parentName: "",
          email: "",
          phone: "",
          transactionId: "",
          city: "",
          notes: ""
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "फॉर्म सबमिट करने में समस्या हुई। कृपया फिर से कोशिश करें।",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    onClose();
    setShowEnrollmentForm(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-poppins font-bold text-xl text-gray-900">
            Course Enrollment
          </DialogTitle>
        </DialogHeader>
        
        {!showEnrollmentForm ? (
          <div className="text-center">
            <div className="mb-4">
              <span className="bg-brand-orange text-white px-4 py-2 rounded-full font-semibold">
                {selectedLevel}
              </span>
            </div>
            
            <div className="text-2xl font-bold text-brand-orange mb-2">{selectedPrice}</div>
            <p className="text-gray-600 mb-6">QR Code scan करके payment करें</p>
            
            <div className="bg-gray-100 w-48 h-48 mx-auto rounded-xl flex items-center justify-center mb-4">
              <div className="text-center">
                <QrCode className="text-4xl text-gray-400 mb-2 mx-auto" size={48} />
                <div className="text-sm text-gray-500">Payment QR Code</div>
              </div>
            </div>
            
            <div className="text-sm text-gray-600 mb-4">
              UPI ID: germantutorpayments@paytm<br />
              या किसी भी UPI app से scan करें
            </div>
            
            <Button 
              onClick={() => setShowEnrollmentForm(true)}
              className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700"
            >
              <Check className="mr-2 h-4 w-4" />
              Payment Complete! अब Details भरें
            </Button>
          </div>
        ) : (
          <div>
            <h4 className="font-semibold text-lg mb-4">छात्र की जानकारी भरें</h4>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="studentName" className="text-sm font-medium text-gray-700">छात्र का नाम *</Label>
                <Input
                  id="studentName"
                  type="text"
                  required
                  value={formData.studentName}
                  onChange={(e) => handleInputChange("studentName", e.target.value)}
                  placeholder="छात्र का पूरा नाम"
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="age" className="text-sm font-medium text-gray-700">उम्र *</Label>
                <Select value={formData.age} onValueChange={(value) => handleInputChange("age", value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="उम्र चुनें" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5-7">5-7 साल</SelectItem>
                    <SelectItem value="8-10">8-10 साल</SelectItem>
                    <SelectItem value="11-13">11-13 साल</SelectItem>
                    <SelectItem value="14-16">14-16 साल</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="parentName" className="text-sm font-medium text-gray-700">माता-पिता का नाम *</Label>
                <Input
                  id="parentName"
                  type="text"
                  required
                  value={formData.parentName}
                  onChange={(e) => handleInputChange("parentName", e.target.value)}
                  placeholder="माता या पिता का नाम"
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">ईमेल आईडी *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="example@gmail.com"
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-sm font-medium text-gray-700">फोन नंबर *</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="+91 12345 67890"
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="transactionId" className="text-sm font-medium text-gray-700">Transaction ID *</Label>
                <Input
                  id="transactionId"
                  type="text"
                  required
                  value={formData.transactionId}
                  onChange={(e) => handleInputChange("transactionId", e.target.value)}
                  placeholder="UPI Transaction ID"
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="city" className="text-sm font-medium text-gray-700">शहर</Label>
                <Input
                  id="city"
                  type="text"
                  value={formData.city}
                  onChange={(e) => handleInputChange("city", e.target.value)}
                  placeholder="आपका शहर"
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="notes" className="text-sm font-medium text-gray-700">कोई खास बात (Optional)</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => handleInputChange("notes", e.target.value)}
                  placeholder="कोई विशेष आवश्यकता या सवाल?"
                  rows={3}
                  className="mt-1"
                />
              </div>
              
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-orange text-white py-4 rounded-xl font-semibold hover:bg-orange-600 transition-colors"
              >
                <Layers className="mr-2 h-4 w-4" />
                {isSubmitting ? "सबमिट हो रहा है..." : "Enrollment Complete करें"}
              </Button>
            </form>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
