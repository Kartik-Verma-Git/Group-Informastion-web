import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export interface Group {
  id: string;
  name: string;
  description: string;
  work: string[];
  offers: string[];
  image: string;
  category: string;
}

interface GroupCardProps {
  group: Group;
  onDonateClick: (group: Group) => void;
}

export function GroupCard({ group, onDonateClick }: GroupCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-video w-full overflow-hidden">
        <ImageWithFallback 
          src={group.image} 
          alt={group.name}
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle>{group.name}</CardTitle>
          <Badge variant="secondary">{group.category}</Badge>
        </div>
        <CardDescription>{group.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-semibold mb-2">Our Work</h4>
          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
            {group.work.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">What We Offer</h4>
          <div className="flex flex-wrap gap-2">
            {group.offers.map((offer, index) => (
              <Badge key={index} variant="outline">{offer}</Badge>
            ))}
          </div>
        </div>
        <button
          onClick={() => onDonateClick(group)}
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-2 px-4 rounded-md transition-colors"
        >
          Support This Group
        </button>
      </CardContent>
    </Card>
  );
}
