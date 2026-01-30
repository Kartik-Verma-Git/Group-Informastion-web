import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/app/components/ui/dialog";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";
import { Group } from "./GroupCard";

interface DonationFormProps {
  open: boolean;
  onClose: () => void;
  group: Group | null;
  onDonationComplete: (data: DonationData) => void;
}

export interface DonationData {
  userId: string;
  userName: string;
  email: string;
  phone: string;
  address: string;
  groupName: string;
  amount: number;
  paymentMethod: string;
  transactionId: string;
  date: string;
}

export function DonationForm({ open, onClose, group, onDonationComplete }: DonationFormProps) {
  const [activeTab, setActiveTab] = useState<"signin" | "signup">("signup");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
    address: "",
    amount: "",
    paymentMethod: "card",
    cardNumber: "",
    cvv: "",
    expiryDate: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate transaction ID
    const transactionId = `TXN${Date.now()}${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
    const userId = `USER${Date.now()}${Math.random().toString(36).substr(2, 6).toUpperCase()}`;
    
    const donationData: DonationData = {
      userId,
      userName: formData.name,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      groupName: group?.name || "",
      amount: parseFloat(formData.amount),
      paymentMethod: formData.paymentMethod,
      transactionId,
      date: new Date().toISOString()
    };

    onDonationComplete(donationData);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Support {group?.name}</DialogTitle>
          <DialogDescription>
            Sign in or create an account to make your donation
          </DialogDescription>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as "signin" | "signup")}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>

          <TabsContent value="signin">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="signin-email">Email</Label>
                <Input
                  id="signin-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="signin-password">Password</Label>
                <Input
                  id="signin-password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                />
              </div>
              
              <DonationFields 
                formData={formData}
                onInputChange={handleInputChange}
              />

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-2 px-4 rounded-md transition-colors"
              >
                Complete Donation
              </button>
            </form>
          </TabsContent>

          <TabsContent value="signup">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="signup-name">Full Name</Label>
                <Input
                  id="signup-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="signup-email">Email</Label>
                <Input
                  id="signup-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="signup-phone">Phone Number</Label>
                <Input
                  id="signup-phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="signup-address">Address</Label>
                <Input
                  id="signup-address"
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="signup-password">Password</Label>
                <Input
                  id="signup-password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                />
              </div>

              <DonationFields 
                formData={formData}
                onInputChange={handleInputChange}
              />

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-2 px-4 rounded-md transition-colors"
              >
                Complete Donation
              </button>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}

function DonationFields({ formData, onInputChange }: { 
  formData: any; 
  onInputChange: (field: string, value: string) => void;
}) {
  return (
    <>
      <div className="border-t pt-4 mt-4">
        <h3 className="font-semibold mb-4">Donation Details</h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="amount">Donation Amount ($)</Label>
            <Input
              id="amount"
              type="number"
              min="1"
              step="0.01"
              required
              placeholder="Enter amount"
              value={formData.amount}
              onChange={(e) => onInputChange("amount", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="payment-method">Payment Method</Label>
            <Select value={formData.paymentMethod} onValueChange={(v) => onInputChange("paymentMethod", v)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="card">Credit/Debit Card</SelectItem>
                <SelectItem value="paypal">PayPal</SelectItem>
                <SelectItem value="bank">Bank Transfer</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {formData.paymentMethod === "card" && (
            <>
              <div className="space-y-2">
                <Label htmlFor="card-number">Card Number</Label>
                <Input
                  id="card-number"
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  required
                  value={formData.cardNumber}
                  onChange={(e) => onInputChange("cardNumber", e.target.value)}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <Input
                    id="expiry"
                    type="text"
                    placeholder="MM/YY"
                    required
                    value={formData.expiryDate}
                    onChange={(e) => onInputChange("expiryDate", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvv">CVV</Label>
                  <Input
                    id="cvv"
                    type="text"
                    placeholder="123"
                    required
                    value={formData.cvv}
                    onChange={(e) => onInputChange("cvv", e.target.value)}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
