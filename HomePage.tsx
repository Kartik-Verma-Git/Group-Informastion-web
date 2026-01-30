import { Users, Target, Heart, Award, Globe, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";

export function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white -mt-4">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold">
              Building Hope, Changing Lives
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              आशा का निर्माण, जीवन में परिवर्तन
            </p>
            <p className="text-lg md:text-xl opacity-90">
              We are a global humanitarian organization dedicated to empowering communities 
              through sustainable development, education, healthcare, and social welfare programs.
            </p>
            <p className="text-base md:text-lg opacity-80">
              हम एक वैश्विक मानवीय संगठन हैं जो सतत विकास, शिक्षा, स्वास्थ्य सेवा और 
              सा��ाजिक कल्याण कार्यक्रमों के माध्यम से समुदायों को सशक्त बनाने के लिए समर्पित है।
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <button 
                onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors shadow-md"
              >
                Get Involved / शामिल हों
              </button>
              <button className="border-2 border-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors">
                Learn More / और जानें
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center space-y-2">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto">
              <Users className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="text-3xl md:text-4xl font-bold">50K+</div>
            <div className="text-sm text-muted-foreground">People Helped</div>
          </div>
          <div className="text-center space-y-2">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto">
              <Globe className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="text-3xl md:text-4xl font-bold">45+</div>
            <div className="text-sm text-muted-foreground">Countries</div>
          </div>
          <div className="text-center space-y-2">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto">
              <Target className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <div className="text-3xl md:text-4xl font-bold">200+</div>
            <div className="text-sm text-muted-foreground">Active Projects</div>
          </div>
          <div className="text-center space-y-2">
            <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto">
              <Award className="w-8 h-8 text-orange-600 dark:text-orange-400" />
            </div>
            <div className="text-3xl md:text-4xl font-bold">15</div>
            <div className="text-sm text-muted-foreground">Years of Service</div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Mission & Vision</h2>
            <p className="text-lg text-muted-foreground">
              Committed to creating lasting change in communities worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-6 h-6 text-red-500" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  To empower underprivileged communities by providing access to quality education, 
                  healthcare, clean water, and sustainable livelihood opportunities. We work tirelessly 
                  to break the cycle of poverty and create pathways to prosperity.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Ensure every child has access to quality education</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Provide healthcare services to underserved communities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Promote sustainable development and self-reliance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-green-500" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  A world where every individual has equal opportunities to thrive, where communities 
                  are self-sufficient, and where compassion and solidarity drive meaningful change. 
                  We envision a future free from poverty and inequality.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Zero poverty in the communities we serve</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Universal access to education and healthcare</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Empowered communities leading their own development</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What We Do</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive approach addresses multiple aspects of community development
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-2xl">📚</span>
                </div>
                <CardTitle>Education</CardTitle>
                <CardDescription>
                  Building schools, providing scholarships, and creating learning opportunities
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-2xl">🏥</span>
                </div>
                <CardTitle>Healthcare</CardTitle>
                <CardDescription>
                  Free medical camps, health awareness programs, and essential medicine distribution
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-2xl">💧</span>
                </div>
                <CardTitle>Clean Water</CardTitle>
                <CardDescription>
                  Installing water wells and purification systems in rural communities
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-2xl">🍲</span>
                </div>
                <CardTitle>Food Security</CardTitle>
                <CardDescription>
                  Meal programs, food distribution, and sustainable agriculture training
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-2xl">🏘️</span>
                </div>
                <CardTitle>Housing</CardTitle>
                <CardDescription>
                  Building safe, affordable homes for families in need
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-2xl">💼</span>
                </div>
                <CardTitle>Livelihood</CardTitle>
                <CardDescription>
                  Skills training, microfinance, and employment opportunities
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}