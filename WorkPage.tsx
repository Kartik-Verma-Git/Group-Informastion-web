import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Calendar, MapPin, Users } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  beneficiaries: string;
  image: string;
  category: string;
  impact: string[];
}

const projects: Project[] = [
  {
    id: "1",
    title: "Community Education Center Launch",
    description: "Successfully opened a new learning center providing free education to 500+ children in rural areas. The center includes modern classrooms, a library, and computer labs equipped with latest technology.",
    location: "Rural Kenya",
    date: "December 2025",
    beneficiaries: "500+ Children",
    image: "https://images.unsplash.com/photo-1569420626546-55b02c8376b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGVkdWNhdGlvbiUyMHNjaG9vbHxlbnwxfHx8fDE3Njg5MDA4MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Education",
    impact: [
      "500+ students enrolled",
      "20 teachers employed",
      "100% literacy improvement"
    ]
  },
  {
    id: "2",
    title: "Mobile Healthcare Initiative",
    description: "Launched mobile medical units serving remote villages with free healthcare services. Our team of dedicated doctors and nurses provide regular checkups, vaccinations, and emergency care to underserved communities.",
    location: "Northern India",
    date: "November 2025",
    beneficiaries: "10,000+ People",
    image: "https://images.unsplash.com/photo-1765222385397-6c2ea556086f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaGVhbHRoY2FyZSUyMHN1cHBvcnR8ZW58MXx8fHwxNzY4OTM2Mjc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Healthcare",
    impact: [
      "15,000 consultations",
      "5,000 vaccinations",
      "Zero cost to patients"
    ]
  },
  {
    id: "3",
    title: "Clean Water Wells Project",
    description: "Installed 25 clean water wells providing access to safe drinking water for entire villages. Each well is solar-powered and equipped with purification systems ensuring water quality meets international standards.",
    location: "Central Africa",
    date: "October 2025",
    beneficiaries: "8,000+ Villagers",
    image: "https://images.unsplash.com/photo-1722081103336-6437cc0bf723?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMHdhdGVyJTIwd2VsbHxlbnwxfHx8fDE3Njg4OTMyMTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Water",
    impact: [
      "25 wells installed",
      "100% clean water access",
      "80% reduction in waterborne diseases"
    ]
  },
  {
    id: "4",
    title: "Food Distribution Drive",
    description: "Organized large-scale food distribution providing nutritious meals and essential supplies to families facing food insecurity. Our program ensures no one goes hungry while promoting sustainable agriculture practices.",
    location: "Southeast Asia",
    date: "September 2025",
    beneficiaries: "12,000+ Families",
    image: "https://images.unsplash.com/photo-1759411354058-9e429834f92f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGlzdHJpYnV0aW9uJTIwY2hhcml0eXxlbnwxfHx8fDE3Njg5MDEwMDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Food Security",
    impact: [
      "500 tons of food distributed",
      "12,000 families supported",
      "Nutrition education provided"
    ]
  },
  {
    id: "5",
    title: "Community Housing Development",
    description: "Built 100 safe and sustainable homes for families living in inadequate housing conditions. Each home is designed with eco-friendly materials and includes proper sanitation facilities.",
    location: "Latin America",
    date: "August 2025",
    beneficiaries: "400+ People",
    image: "https://images.unsplash.com/photo-1689574666546-75e1036e55fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBidWlsZGluZyUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3Njg5Nzg3ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Housing",
    impact: [
      "100 homes built",
      "400 people housed",
      "100% sustainable materials"
    ]
  },
  {
    id: "6",
    title: "Volunteer Outreach Program",
    description: "Engaged over 1,000 volunteers in community service activities ranging from teaching to construction. Our volunteers are the backbone of our mission, bringing hope and change to communities worldwide.",
    location: "Global",
    date: "Ongoing",
    beneficiaries: "Multiple Communities",
    image: "https://images.unsplash.com/photo-1761666507437-9fb5a6ef7b0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBoZWxwJTIwdm9sdW50ZWVyc3xlbnwxfHx8fDE3Njg5MTE3NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Community",
    impact: [
      "1,000+ active volunteers",
      "50+ projects completed",
      "Year-round engagement"
    ]
  }
];

export function WorkPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white -mt-4">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-5xl font-bold">Our Work in Action</h1>
            <p className="text-2xl opacity-90">हमारा कार्य - क्रियान्वयन में</p>
            <p className="text-xl opacity-90">
              See the real impact we're making in communities around the world. 
              Every project represents lives changed and hope restored.
            </p>
            <p className="text-base opacity-80">
              दुनिया भर के समुदायों में हम जो वास्तविक प्रभाव डाल रहे हैं, उसे देखें। 
              हर परियोजना बदले हुए जीवन और बहाल आशा का प्रतिनिधित्व करती है।
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video w-full overflow-hidden">
                <ImageWithFallback 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <Badge variant="secondary">{project.category}</Badge>
                  <span className="text-xs text-muted-foreground">{project.date}</span>
                </div>
                <CardTitle className="line-clamp-2">{project.title}</CardTitle>
                <CardDescription className="line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{project.beneficiaries}</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-sm mb-2">Key Impact</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {project.impact.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Impact Summary */}
      <section className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Our Collective Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">30K+</div>
                <div className="text-sm text-muted-foreground">Lives Directly Impacted</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">150+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">45</div>
                <div className="text-sm text-muted-foreground">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                <div className="text-sm text-muted-foreground">Volunteers Engaged</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}