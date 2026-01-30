import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/app/components/ui/dialog";
import { DonationData } from "./DonationForm";
import { Check, Download, Printer } from "lucide-react";

interface PaymentSlipProps {
  open: boolean;
  onClose: () => void;
  donationData: DonationData | null;
}

export function PaymentSlip({ open, onClose, donationData }: PaymentSlipProps) {
  if (!donationData) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Create a printable version
    const printWindow = window.open('', '', 'width=800,height=600');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Payment Slip - ${donationData.transactionId}</title>
            <style>
              body { font-family: Arial, sans-serif; padding: 40px; }
              .slip { max-width: 600px; margin: 0 auto; border: 2px solid #000; padding: 30px; }
              .header { text-align: center; border-bottom: 2px solid #000; padding-bottom: 20px; margin-bottom: 20px; }
              .success-icon { font-size: 48px; color: green; }
              .row { display: flex; justify-content: space-between; margin: 10px 0; padding: 8px 0; border-bottom: 1px solid #ddd; }
              .label { font-weight: bold; }
              .amount { font-size: 24px; color: green; font-weight: bold; }
              .footer { margin-top: 30px; padding-top: 20px; border-top: 2px solid #000; text-align: center; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="slip">
              <div class="header">
                <div class="success-icon">✓</div>
                <h1>Payment Successful</h1>
                <p>Thank you for your donation!</p>
              </div>
              <div class="row">
                <span class="label">Transaction ID:</span>
                <span>${donationData.transactionId}</span>
              </div>
              <div class="row">
                <span class="label">Date:</span>
                <span>${new Date(donationData.date).toLocaleString()}</span>
              </div>
              <div class="row">
                <span class="label">Donor Name:</span>
                <span>${donationData.userName}</span>
              </div>
              <div class="row">
                <span class="label">Email:</span>
                <span>${donationData.email}</span>
              </div>
              <div class="row">
                <span class="label">Phone:</span>
                <span>${donationData.phone}</span>
              </div>
              <div class="row">
                <span class="label">Group Supported:</span>
                <span>${donationData.groupName}</span>
              </div>
              <div class="row">
                <span class="label">Payment Method:</span>
                <span>${donationData.paymentMethod.toUpperCase()}</span>
              </div>
              <div class="row">
                <span class="label">Amount Donated:</span>
                <span class="amount">₹${donationData.amount.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
              </div>
              <div class="footer">
                <p>This is a computer-generated receipt. No signature required.</p>
                <p>For any queries, please contact us with your transaction ID.</p>
              </div>
            </div>
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Payment Receipt</DialogTitle>
        </DialogHeader>

        <div className="space-y-6 p-6 border rounded-lg bg-background" id="payment-slip">
          <div className="text-center space-y-2 pb-6 border-b">
            <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mx-auto">
              <Check className="w-10 h-10 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="text-2xl font-bold">Payment Successful!</h2>
            <p className="text-muted-foreground">Thank you for your generous donation</p>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between py-2 border-b">
              <span className="font-semibold">Transaction ID:</span>
              <span className="font-mono">{donationData.transactionId}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="font-semibold">Date & Time:</span>
              <span>{new Date(donationData.date).toLocaleString()}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="font-semibold">Donor Name:</span>
              <span>{donationData.userName}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="font-semibold">Email:</span>
              <span>{donationData.email}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="font-semibold">Phone:</span>
              <span>{donationData.phone}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="font-semibold">Group Supported:</span>
              <span>{donationData.groupName}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="font-semibold">Payment Method:</span>
              <span className="uppercase">{donationData.paymentMethod}</span>
            </div>
            <div className="flex justify-between py-3 border-b-2 border-primary">
              <span className="font-semibold text-lg">Amount Donated:</span>
              <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                ₹{donationData.amount.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              onClick={handleDownload}
              className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 py-2 px-4 rounded-md transition-colors"
            >
              <Download className="w-4 h-4" />
              Download Receipt
            </button>
            <button
              onClick={handlePrint}
              className="flex-1 flex items-center justify-center gap-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground py-2 px-4 rounded-md transition-colors"
            >
              <Printer className="w-4 h-4" />
              Print Receipt
            </button>
          </div>

          <p className="text-xs text-center text-muted-foreground pt-4 border-t">
            This is a computer-generated receipt. No signature required.
            For any queries, please contact us with your transaction ID.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}