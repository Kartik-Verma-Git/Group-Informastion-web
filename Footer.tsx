import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted mt-auto border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-orange-700 rounded-lg flex items-center justify-center text-white text-xl shadow-md">
                🤝
              </div>
              <div>
                <span className="font-bold text-xl">Hope Foundation</span>
                <div className="text-xs text-muted-foreground">आशा फाउंडेशन</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Dedicated to making a positive impact in communities worldwide through 
              sustainable development, education, and social welfare programs.
            </p>
            <p className="text-sm text-muted-foreground">
              सतत विकास, शिक्षा और सामाजिक कल्याण कार्यक्रमों के माध्यम से दुनिया भर के समुदायों में 
              सकारात्मक प्रभाव डालने के लिए समर्पित।
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">
              Contact Us <span className="text-sm text-muted-foreground">/ संपर्क करें</span>
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p>123 Seva Marg, Sector 15</p>
                  <p>New Delhi, Delhi 110001, India</p>
                  <p className="text-xs text-muted-foreground mt-1">नई दिल्ली, भारत</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+911234567890" className="hover:text-primary transition-colors">
                  +91 12345 67890
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:info@hopefoundation.org.in" className="hover:text-primary transition-colors">
                  info@hopefoundation.org.in
                </a>
              </div>
            </div>
          </div>

          {/* Social Media & Hours */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">
              Connect With Us <span className="text-sm text-muted-foreground">/ हमसे जुड़ें</span>
            </h3>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 bg-background rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors shadow-sm"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-background rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors shadow-sm"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-background rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors shadow-sm"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-background rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors shadow-sm"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <div className="text-sm">
              <h4 className="font-semibold mb-2">
                Office Hours <span className="text-muted-foreground">/ कार्यालय समय</span>
              </h4>
              <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-muted-foreground text-xs">सोमवार - शुक्रवार: सुबह 9 - शाम 6 बजे</p>
              <p className="text-muted-foreground mt-1">Saturday: 10:00 AM - 4:00 PM</p>
              <p className="text-muted-foreground text-xs">शनिवार: सुबह 10 - शाम 4 बजे</p>
              <p className="text-muted-foreground mt-1">Sunday: Closed / रविवार: बंद</p>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2026 Hope Foundation / आशा फाउंडेशन. All rights reserved. Making the world a better place, one step at a time.</p>
          <p className="text-xs mt-1">एक समय में एक कदम, दुनिया को बेहतर बनाना।</p>
        </div>
      </div>
    </footer>
  );
}