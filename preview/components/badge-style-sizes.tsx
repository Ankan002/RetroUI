import { Badge } from "@/components/ui";

export default function BadgeStyleVariants() {
  return (
    <div className="space-x-4">
      <Badge size="sm">small</Badge>
      <Badge>medium</Badge>
      <Badge size="lg">large</Badge>
    </div>
  );
}
