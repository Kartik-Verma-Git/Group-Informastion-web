import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/app/components/ui/dialog";
import { DonationData } from "./DonationForm";
import { Download, Printer, CreditCard } from "lucide-react";

interface MemberIdCardProps {
  open: boolean;
  onClose: () => void;
  donationData: DonationData | null;
}

export function MemberIdCard({ open, onClose, donationData }: MemberIdCardProps) {
  if (!donationData) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const printWindow = window.open('', '', 'width=800,height=600');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Member ID Card - ${donationData.userId}</title>
            <style>
              body { 
                font-family: Arial, sans-serif; 
                padding: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                min-height: 100vh;
              }
              .id-card { 
                width: 350px;
                height: 220px;
                border: 2px solid #000;
                border-radius: 12px;
                padding: 20px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                position: relative;
              }
              .header { 
                display: flex;
                align-items: center;
                gap: 10px;
                margin-bottom: 15px;
                padding-bottom: 10px;
                border-bottom: 1px solid rgba(255,255,255,0.3);
              }
              .logo { 
                width: 40px;
                height: 40px;
                background: white;
                border-radius: 8px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: bold;
                color: #667eea;
              }
              .org-name { 
                font-size: 14px;
                font-weight: bold;
              }
              .member-type {
                font-size: 10px;
                background: rgba(255,255,255,0.2);
                padding: 2px 8px;
                border-radius: 4px;
                margin-top: 2px;
              }
              .photo { 
                width: 60px;
                height: 60px;
                background: rgba(255,255,255,0.2);
                border-radius: 8px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 24px;
                position: absolute;
                right: 20px;
                top: 20px;
              }
              .info { 
                margin-top: 10px;
              }
              .info-row { 
                margin: 6px 0;
                font-size: 12px;
              }
              .label { 
                opacity: 0.8;
                font-size: 10px;
              }
              .value { 
                font-weight: bold;
                font-size: 13px;
              }
              .member-id {
                background: rgba(255,255,255,0.9);
                color: #667eea;
                padding: 4px 8px;
                border-radius: 4px;
                font-family: monospace;
                font-weight: bold;
                display: inline-block;
                margin-top: 10px;
              }
            </style>
          </head>
          <body>
            <div class="id-card">
              <div class="photo">👤</div>
              <div class="header">
                <div class="logo">🤝</div>
                <div>
                  <div class="org-name">Donor Network</div>
                  <div class="member-type">MEMBER CARD</div>
                </div>
              </div>
              <div class="info">
                <div class="info-row">
                  <div class="label">NAME</div>
                  <div class="value">${donationData.userName}</div>
                </div>
                <div class="info-row">
                  <div class="label">EMAIL</div>
                  <div class="value" style="font-size: 11px">${donationData.email}</div>
                </div>
                <div class="info-row">
                  <div class="label">MEMBER SINCE</div>
                  <div class="value">${new Date(donationData.date).toLocaleDateString()}</div>
                </div>
              </div>
              <div class="member-id">ID: ${donationData.userId}</div>
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
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle>Member ID Card</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col items-center gap-6 p-6">
          {/* ID Card */}
          <div className="w-full max-w-md aspect-[1.6/1] rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-orange-600 to-orange-800 text-white p-6 relative">
            {/* Photo placeholder */}
            <div className="absolute right-6 top-6 w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center text-3xl backdrop-blur-sm">
              👤
            </div>

            {/* Header */}
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/30">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-xl">
                🤝
              </div>
              <div>
                <div className="font-bold">Hope Foundation</div>
                <div className="text-xs bg-white/20 px-2 py-0.5 rounded inline-block mt-1">
                  MEMBER CARD / सदस्य कार्ड
                </div>
              </div>
            </div>

            {/* Member Info */}
            <div className="space-y-2 mt-4">
              <div>
                <div className="text-xs opacity-80">NAME / नाम</div>
                <div className="font-bold">{donationData.userName}</div>
              </div>
              <div>
                <div className="text-xs opacity-80">EMAIL / ईमेल</div>
                <div className="text-sm font-semibold truncate">{donationData.email}</div>
              </div>
              <div>
                <div className="text-xs opacity-80">MEMBER SINCE / सदस्य से</div>
                <div className="font-bold">{new Date(donationData.date).toLocaleDateString()}</div>
              </div>
            </div>

            {/* Member ID */}
            <div className="mt-4">
              <div className="bg-white/90 text-orange-800 px-3 py-1 rounded font-mono text-sm font-bold inline-block">
                ID: {donationData.userId}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 w-full max-w-md">
            <button
              onClick={handleDownload}
              className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 py-2 px-4 rounded-md transition-colors"
            >
              <Download className="w-4 h-4" />
              Download Card
            </button>
            <button
              onClick={handlePrint}
              className="flex-1 flex items-center justify-center gap-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground py-2 px-4 rounded-md transition-colors"
            >
              <Printer className="w-4 h-4" />
              Print Card
            </button>
          </div>

          <p className="text-xs text-center text-muted-foreground max-w-md">
            Keep this card safe. You can use your Member ID ({donationData.userId}) 
            to track your donations and access member benefits.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}