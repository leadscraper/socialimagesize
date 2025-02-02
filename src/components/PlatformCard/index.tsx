// components/PlatformCard.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ImageSizeCard } from "@/components/ImageSizeCard";
import { Platform } from "@/constants";

interface PlatformCardProps {
  platform: Platform;
}

export function PlatformCard({ platform }: PlatformCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <platform.icon  />
          <CardTitle>{platform.name}</CardTitle>
        </div>
        <CardDescription>{platform.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {platform.imageTypes.map((imageType) => (
            <ImageSizeCard key={imageType.name} imageType={imageType} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}