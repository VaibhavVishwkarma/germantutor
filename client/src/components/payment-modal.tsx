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
      formDataToSend.append("access_key", "2b8984e0-8732-474a-b4e7-489535f685f9");
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
          description: "Your form has been submitted successfully. We will contact you soon.",
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
        description: "There was a problem submitting the form. Please try again.",
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
            <p className="text-gray-600 mb-6">Scan QR Code to make payment</p>
            
            <div className="w-48 h-48 mx-auto rounded-xl mb-4">
              <img 
                src="/src/assets/WhatsApp Image 2025-05-27 at 18.02.34_29c2be4e.jpg"
                alt="Payment QR Code"
                className="w-full h-full object-contain rounded-xl"
              />
            </div>
            
            <div className="text-sm text-gray-600 mb-4">
              Scan with any UPI app to make payment
            </div>
            
            <Button 
              onClick={() => setShowEnrollmentForm(true)}
              className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700"
            >
              <Check className="mr-2 h-4 w-4" />
              Payment Complete! Fill Details Now
            </Button>
          </div>
        ) : (
          <div>
            <h4 className="font-semibold text-lg mb-4">Fill Student Information</h4>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="studentName" className="text-sm font-medium text-gray-700">Student Name *</Label>
                <Input
                  id="studentName"
                  type="text"
                  required
                  value={formData.studentName}
                  onChange={(e) => handleInputChange("studentName", e.target.value)}
                  placeholder="Student's full name"
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="age" className="text-sm font-medium text-gray-700">Age *</Label>
                <Select value={formData.age} onValueChange={(value) => handleInputChange("age", value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select age" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5-7">5-7 years</SelectItem>
                    <SelectItem value="8-10">8-10 years</SelectItem>
                    <SelectItem value="11-13">11-13 years</SelectItem>
                    <SelectItem value="14-16">14-16 years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="parentName" className="text-sm font-medium text-gray-700">Parent Name *</Label>
                <Input
                  id="parentName"
                  type="text"
                  required
                  value={formData.parentName}
                  onChange={(e) => handleInputChange("parentName", e.target.value)}
                  placeholder="Parent or guardian name"
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email ID *</Label>
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
                <Label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number *</Label>
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
                <Label htmlFor="city" className="text-sm font-medium text-gray-700">City</Label>
                <Input
                  id="city"
                  type="text"
                  value={formData.city}
                  onChange={(e) => handleInputChange("city", e.target.value)}
                  placeholder="Your city"
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="notes" className="text-sm font-medium text-gray-700">Special Requirements (Optional)</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => handleInputChange("notes", e.target.value)}
                  placeholder="Any special requirements or questions?"
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
                {isSubmitting ? "Submitting..." : "Complete Enrollment"}
              </Button>
            </form>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
