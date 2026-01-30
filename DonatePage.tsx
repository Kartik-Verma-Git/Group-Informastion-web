// import { useState } from "react";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
// import { Input } from "@/app/components/ui/input";
// import { Label } from "@/app/components/ui/label";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";
// import { DonationData } from "@/app/components/DonationForm";
// import { PaymentSlip } from "@/app/components/PaymentSlip";
// import { MemberIdCard } from "@/app/components/MemberIdCard";
// import { Heart, Shield, Award, TrendingUp } from "lucide-react";

// export function DonatePage() {
//   const [activeTab, setActiveTab] = useState<"signin" | "signup">("signup");
//   const [showPaymentSlip, setShowPaymentSlip] = useState(false);
//   const [showIdCard, setShowIdCard] = useState(false);
//   const [donationData, setDonationData] = useState<DonationData | null>(null);
  
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     name: "",
//     phone: "",
//     address: "",
//     amount: "",
//     paymentMethod: "card",
//     cardNumber: "",
//     cvv: "",
//     expiryDate: "",
//     donationType: "one-time",
//     upiId: ""
//   });

//   const handleInputChange = (field: string, value: string) => {
//     setFormData(prev => ({ ...prev, [field]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
    
//     const transactionId = `TXN${Date.now()}${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
//     const userId = `USER${Date.now()}${Math.random().toString(36).substr(2, 6).toUpperCase()}`;
    
//     const donation: DonationData = {
//       userId,
//       userName: formData.name,
//       email: formData.email,
//       phone: formData.phone,
//       address: formData.address,
//       groupName: "Hope Foundation",
//       amount: parseFloat(formData.amount),
//       paymentMethod: formData.paymentMethod,
//       transactionId,
//       date: new Date().toISOString()
//     };

//     setDonationData(donation);
//     setShowPaymentSlip(true);
//   };

//   const handleClosePaymentSlip = () => {
//     setShowPaymentSlip(false);
//     setShowIdCard(true);
//   };

//   return (
//     <div className="space-y-12">
//       {/* Header */}
//       <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white -mt-4">
//         <div className="container mx-auto px-4 py-16">
//           <div className="max-w-3xl mx-auto text-center space-y-4">
//             <Heart className="w-16 h-16 mx-auto mb-4" />
//             <h1 className="text-5xl font-bold">Support Our Mission</h1>
//             <p className="text-2xl opacity-90">हमारे ���िशन का समर्थन करें</p>
//             <p className="text-xl opacity-90">
//               Your donation directly impacts lives. Every contribution helps us build schools, 
//               provide healthcare, and create opportunities for those who need it most.
//             </p>
//             <p className="text-base opacity-80">
//               आपका दान सीधे जीवन को प्रभावित करता है। हर योगदान हमें स्कूल बनाने, 
//               स्वास्थ्य सेवा प्रदान करने और जरूरतमंदों के लिए अवसर पैदा करने में मदद करता है।
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Benefits Section */}
//       <section className="container mx-auto px-4">
//         <div className="max-w-5xl mx-auto">
//           <h2 className="text-3xl font-bold text-center mb-8">Why Donate to Hope Foundation?</h2>
//           <div className="grid md:grid-cols-4 gap-6">
//             <Card>
//               <CardHeader className="text-center">
//                 <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-2">
//                   <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
//                 </div>
//                 <CardTitle className="text-lg">100% Impact</CardTitle>
//                 <CardDescription>
//                   Every dollar goes directly to our programs
//                 </CardDescription>
//               </CardHeader>
//             </Card>

//             <Card>
//               <CardHeader className="text-center">
//                 <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-2">
//                   <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
//                 </div>
//                 <CardTitle className="text-lg">Tax Deductible</CardTitle>
//                 <CardDescription>
//                   Receive official receipts for tax purposes
//                 </CardDescription>
//               </CardHeader>
//             </Card>

//             <Card>
//               <CardHeader className="text-center">
//                 <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-2">
//                   <Award className="w-6 h-6 text-purple-600 dark:text-purple-400" />
//                 </div>
//                 <CardTitle className="text-lg">Member Benefits</CardTitle>
//                 <CardDescription>
//                   Get exclusive updates and recognition
//                 </CardDescription>
//               </CardHeader>
//             </Card>

//             <Card>
//               <CardHeader className="text-center">
//                 <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-2">
//                   <Heart className="w-6 h-6 text-orange-600 dark:text-orange-400" />
//                 </div>
//                 <CardTitle className="text-lg">Transparency</CardTitle>
//                 <CardDescription>
//                   Track your impact with detailed reports
//                 </CardDescription>
//               </CardHeader>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Donation Form */}
//       <section className="container mx-auto px-4 pb-12">
//         <div className="max-w-3xl mx-auto">
//           <Card>
//             <CardHeader className="text-center">
//               <CardTitle className="text-2xl">Make Your Donation</CardTitle>
//               <CardDescription>
//                 Sign in to your account or create a new one to proceed with your donation
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as "signin" | "signup")}>
//                 <TabsList className="grid w-full grid-cols-2 mb-6">
//                   <TabsTrigger value="signin">Sign In</TabsTrigger>
//                   <TabsTrigger value="signup">Sign Up</TabsTrigger>
//                 </TabsList>

//                 <TabsContent value="signin">
//                   <form onSubmit={handleSubmit} className="space-y-6">
//                     <div className="space-y-4">
//                       <div className="space-y-2">
//                         <Label htmlFor="signin-email">Email</Label>
//                         <Input
//                           id="signin-email"
//                           type="email"
//                           required
//                           placeholder="your.email@example.com"
//                           value={formData.email}
//                           onChange={(e) => handleInputChange("email", e.target.value)}
//                         />
//                       </div>
//                       <div className="space-y-2">
//                         <Label htmlFor="signin-password">Password</Label>
//                         <Input
//                           id="signin-password"
//                           type="password"
//                           required
//                           placeholder="Enter your password"
//                           value={formData.password}
//                           onChange={(e) => handleInputChange("password", e.target.value)}
//                         />
//                       </div>
//                     </div>

//                     <DonationFields formData={formData} onInputChange={handleInputChange} />

//                     <button
//                       type="submit"
//                       className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 px-4 rounded-md transition-colors font-semibold"
//                     >
//                       Complete Donation
//                     </button>
//                   </form>
//                 </TabsContent>

//                 <TabsContent value="signup">
//                   <form onSubmit={handleSubmit} className="space-y-6">
//                     <div className="space-y-4">
//                       <div className="space-y-2">
//                         <Label htmlFor="signup-name">Full Name *</Label>
//                         <Input
//                           id="signup-name"
//                           type="text"
//                           required
//                           placeholder="John Doe"
//                           value={formData.name}
//                           onChange={(e) => handleInputChange("name", e.target.value)}
//                         />
//                       </div>
//                       <div className="space-y-2">
//                         <Label htmlFor="signup-email">Email *</Label>
//                         <Input
//                           id="signup-email"
//                           type="email"
//                           required
//                           placeholder="your.email@example.com"
//                           value={formData.email}
//                           onChange={(e) => handleInputChange("email", e.target.value)}
//                         />
//                       </div>
//                       <div className="space-y-2">
//                         <Label htmlFor="signup-phone">Phone Number *</Label>
//                         <Input
//                           id="signup-phone"
//                           type="tel"
//                           required
//                           placeholder="+1 (234) 567-8900"
//                           value={formData.phone}
//                           onChange={(e) => handleInputChange("phone", e.target.value)}
//                         />
//                       </div>
//                       <div className="space-y-2">
//                         <Label htmlFor="signup-address">Address *</Label>
//                         <Input
//                           id="signup-address"
//                           type="text"
//                           required
//                           placeholder="123 Main St, City, State, ZIP"
//                           value={formData.address}
//                           onChange={(e) => handleInputChange("address", e.target.value)}
//                         />
//                       </div>
//                       <div className="space-y-2">
//                         <Label htmlFor="signup-password">Password *</Label>
//                         <Input
//                           id="signup-password"
//                           type="password"
//                           required
//                           placeholder="Create a password"
//                           value={formData.password}
//                           onChange={(e) => handleInputChange("password", e.target.value)}
//                         />
//                       </div>
//                     </div>

//                     <DonationFields formData={formData} onInputChange={handleInputChange} />

//                     <button
//                       type="submit"
//                       className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 px-4 rounded-md transition-colors font-semibold"
//                     >
//                       Complete Donation
//                     </button>
//                   </form>
//                 </TabsContent>
//               </Tabs>
//             </CardContent>
//           </Card>
//         </div>
//       </section>

//       {/* Modals */}
//       <PaymentSlip
//         open={showPaymentSlip}
//         onClose={handleClosePaymentSlip}
//         donationData={donationData}
//       />

//       <MemberIdCard
//         open={showIdCard}
//         onClose={() => setShowIdCard(false)}
//         donationData={donationData}
//       />
//     </div>
//   );
// }

// function DonationFields({ 
//   formData, 
//   onInputChange 
// }: { 
//   formData: any; 
//   onInputChange: (field: string, value: string) => void;
// }) {
//   const suggestedAmounts = [500, 1000, 2500, 5000, 10000, 25000];

//   return (
//     <div className="border-t pt-6 space-y-6">
//       <div>
//         <h3 className="font-semibold text-lg mb-4">
//           Donation Details <span className="text-sm text-muted-foreground">/ दान विवरण</span>
//         </h3>
        
//         <div className="space-y-4">
//           <div className="space-y-2">
//             <Label>Donation Type / दान प्रकार</Label>
//             <Select 
//               value={formData.donationType} 
//               onValueChange={(v) => onInputChange("donationType", v)}
//             >
//               <SelectTrigger>
//                 <SelectValue />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="one-time">One-time Donation / एकबारगी दान</SelectItem>
//                 <SelectItem value="monthly">Monthly Donation / मासिक दान</SelectItem>
//                 <SelectItem value="yearly">Yearly Donation / वार्षिक दान</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="amount">Donation Amount (₹) * / दान राशि (₹) *</Label>
//             <div className="grid grid-cols-3 gap-2 mb-2">
//               {suggestedAmounts.map((amount) => (
//                 <button
//                   key={amount}
//                   type="button"
//                   onClick={() => onInputChange("amount", amount.toString())}
//                   className={`py-2 px-4 border rounded-md transition-colors ${
//                     formData.amount === amount.toString()
//                       ? "bg-primary text-primary-foreground border-primary"
//                       : "hover:bg-muted"
//                   }`}
//                 >
//                   ₹{amount.toLocaleString('en-IN')}
//                 </button>
//               ))}
//             </div>
//             <Input
//               id="amount"
//               type="number"
//               min="1"
//               step="1"
//               required
//               placeholder="Enter custom amount / कस्टम राशि दर्ज करें"
//               value={formData.amount}
//               onChange={(e) => onInputChange("amount", e.target.value)}
//             />
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="payment-method">Payment Method * / भुगतान विधि *</Label>
//             <Select 
//               value={formData.paymentMethod} 
//               onValueChange={(v) => onInputChange("paymentMethod", v)}
//             >
//               <SelectTrigger>
//                 <SelectValue />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="card">Credit/Debit Card / क्रेडिट/डेबिट कार्ड</SelectItem>
//                 <SelectItem value="upi">UPI / यूपीआई</SelectItem>
//                 <SelectItem value="netbanking">Net Banking / नेट बैंकिंग</SelectItem>
//                 <SelectItem value="bank">Bank Transfer / बैंक ट्रांसफर</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>

//           {formData.paymentMethod === "card" && (
//             <div className="space-y-4">
//               <div className="space-y-2">
//                 <Label htmlFor="card-number">Card Number * / कार्ड नंबर *</Label>
//                 <Input
//                   id="card-number"
//                   type="text"
//                   placeholder="1234 5678 9012 3456"
//                   required
//                   value={formData.cardNumber}
//                   onChange={(e) => onInputChange("cardNumber", e.target.value)}
//                 />
//               </div>
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="space-y-2">
//                   <Label htmlFor="expiry">Expiry Date * / समाप्ति तिथि *</Label>
//                   <Input
//                     id="expiry"
//                     type="text"
//                     placeholder="MM/YY"
//                     required
//                     value={formData.expiryDate}
//                     onChange={(e) => onInputChange("expiryDate", e.target.value)}
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="cvv">CVV *</Label>
//                   <Input
//                     id="cvv"
//                     type="text"
//                     placeholder="123"
//                     required
//                     maxLength={4}
//                     value={formData.cvv}
//                     onChange={(e) => onInputChange("cvv", e.target.value)}
//                   />
//                 </div>
//               </div>
//             </div>
//           )}

//           {formData.paymentMethod === "upi" && (
//             <div className="space-y-2">
//               <Label htmlFor="upi-id">UPI ID * / यूपीआई आईडी *</Label>
//               <Input
//                 id="upi-id"
//                 type="text"
//                 placeholder="yourname@upi"
//                 required
//                 value={formData.upiId || ""}
//                 onChange={(e) => onInputChange("upiId", e.target.value)}
//               />
//             </div>
//           )}
//         </div>
//       </div>

//       <div className="bg-muted p-4 rounded-lg">
//         <p className="text-sm text-muted-foreground">
//           🔒 Your payment is secure and encrypted. We never store your payment information.
//         </p>
//         <p className="text-xs text-muted-foreground mt-1">
//           आपका भुगतान सुरक्षित और एन्क्रिप्टेड है। हम कभी भी आपकी भुगतान जानकारी संग्रहीत नहीं करते हैं।
//         </p>
//       </div>
//     </div>
//   );
// }































import { useState } from "react";

/* UI components */
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../ui/tabs";

/* Custom components */
import { PaymentSlip } from "../PaymentSlip";
import { MemberIdCard } from "../MemberIdCard";

/* Icons */
import { Heart, Shield, Award, TrendingUp } from "lucide-react";

/* API helper */
import { apiRequest } from "../../../services/api";

/* Razorpay global */
declare global {
  interface Window {
    Razorpay: any;
  }
}

export function DonatePage() {
  const [activeTab, setActiveTab] = useState<"signin" | "signup">("signup");
  const [showPaymentSlip, setShowPaymentSlip] = useState(false);
  const [showIdCard, setShowIdCard] = useState(false);
  const [donationData, setDonationData] = useState<any>(null);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
    address: "",
    amount: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Please login first");
        return;
      }

      // 1️⃣ Create donation
      const donationRes = await apiRequest(
        "/donations",
        "POST",
        {
          amount: Number(formData.amount),
          purpose: "Hope Foundation Donation",
        },
        token
      );

      // 2️⃣ Create Razorpay order
      const order = await apiRequest(
        "/donations/create-order",
        "POST",
        { donationId: donationRes.donationId },
        token
      );

      // 3️⃣ Open Razorpay checkout
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: "INR",
        name: "Hope Foundation",
        description: "Donation",
        order_id: order.id,
        handler: async (response: any) => {
          // 4️⃣ Verify payment
          await apiRequest(
            "/donations/verify-payment",
            "POST",
            {
              donationId: donationRes.donationId,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            },
            token
          );

          // 5️⃣ Show receipt + ID card
          setDonationData({
            userName: formData.name,
            email: formData.email,
            phone: formData.phone,
            address: formData.address,
            groupName: "Hope Foundation",
            amount: Number(formData.amount),
            paymentMethod: "Razorpay",
            transactionId: response.razorpay_payment_id,
            date: new Date().toISOString(),
          });

          setShowPaymentSlip(true);
        },
        theme: { color: "#ea580c" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error(err);
      alert("Payment failed. Please try again.");
    }
  };

  const handleClosePaymentSlip = () => {
    setShowPaymentSlip(false);
    setShowIdCard(true);
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white -mt-4">
        <div className="container mx-auto px-4 py-16 text-center space-y-4">
          <Heart className="w-16 h-16 mx-auto" />
          <h1 className="text-5xl font-bold">Support Our Mission</h1>
          <p className="text-xl opacity-90">
            Your donation directly impacts lives.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-6">
          <Benefit icon={<TrendingUp />} title="100% Impact" />
          <Benefit icon={<Shield />} title="Secure Payments" />
          <Benefit icon={<Award />} title="Member Benefits" />
          <Benefit icon={<Heart />} title="Transparency" />
        </div>
      </section>

      {/* Donation Form */}
      <section className="container mx-auto px-4 pb-12">
        <Card className="max-w-3xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle>Make Your Donation</CardTitle>
            <CardDescription>
              Login or sign up to continue
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as any)}>
              <TabsList className="grid grid-cols-2 mb-6">
                <TabsTrigger value="signin">Sign In</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>

              <TabsContent value={activeTab}>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {activeTab === "signup" && (
                    <>
                      <Field label="Full Name">
                        <Input
                          required
                          value={formData.name}
                          onChange={(e) =>
                            handleInputChange("name", e.target.value)
                          }
                        />
                      </Field>

                      <Field label="Phone">
                        <Input
                          required
                          value={formData.phone}
                          onChange={(e) =>
                            handleInputChange("phone", e.target.value)
                          }
                        />
                      </Field>

                      <Field label="Address">
                        <Input
                          required
                          value={formData.address}
                          onChange={(e) =>
                            handleInputChange("address", e.target.value)
                          }
                        />
                      </Field>
                    </>
                  )}

                  <Field label="Email">
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                    />
                  </Field>

                  <Field label="Password">
                    <Input
                      type="password"
                      required
                      value={formData.password}
                      onChange={(e) =>
                        handleInputChange("password", e.target.value)
                      }
                    />
                  </Field>

                  <Field label="Donation Amount (₹)">
                    <Input
                      type="number"
                      min="1"
                      required
                      value={formData.amount}
                      onChange={(e) =>
                        handleInputChange("amount", e.target.value)
                      }
                    />
                  </Field>

                  <button
                    type="submit"
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-md font-semibold"
                  >
                    Complete Donation
                  </button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </section>

      {/* Modals */}
      <PaymentSlip
        open={showPaymentSlip}
        onClose={handleClosePaymentSlip}
        donationData={donationData}
      />

      <MemberIdCard
        open={showIdCard}
        onClose={() => setShowIdCard(false)}
        donationData={donationData}
      />
    </div>
  );
}

/* Helpers */

function Field({ label, children }: any) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      {children}
    </div>
  );
}

function Benefit({ icon, title }: any) {
  return (
    <Card>
      <CardHeader className="text-center">
        <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center bg-orange-100 rounded-full">
          {icon}
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
    </Card>
  );
}
