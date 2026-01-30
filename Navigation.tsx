import { Home, Briefcase, Heart } from "lucide-react";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const navItems = [
    { id: "home", label: "Home", labelHi: "होम", icon: Home },
    { id: "work", label: "Our Work", labelHi: "हमारा कार्य", icon: Briefcase },
    { id: "donate", label: "Donate", labelHi: "दान करें", icon: Heart }
  ];

  return (
    <nav className="bg-background border-b sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-orange-700 rounded-lg flex items-center justify-center text-white text-xl shadow-md">
              🤝
            </div>
            <div>
              <span className="font-bold text-xl text-foreground">Hope Foundation</span>
              <div className="text-xs text-muted-foreground">आशा फाउंडेशन</div>
            </div>
          </div>
          
          <div className="flex gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                    isActive 
                      ? "bg-primary text-primary-foreground shadow-sm" 
                      : "hover:bg-muted"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <div className="hidden sm:block text-left">
                    <div className="text-sm leading-none">{item.label}</div>
                    <div className="text-xs opacity-80 mt-0.5">{item.labelHi}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}