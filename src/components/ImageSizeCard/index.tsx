// components/ImageSizeCard.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ImageType } from "@/constants";

interface ImageSizeCardProps {
  imageType: ImageType;
}

export function ImageSizeCard({ imageType }: ImageSizeCardProps) {
  return (
    <Card className="relative overflow-hidden">
      <CardHeader>
        <CardTitle className="text-lg">{imageType.name}</CardTitle>
        <CardDescription>{imageType.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Size Preview */}
          <div className="relative w-full aspect-video bg-muted rounded-lg overflow-hidden">
            <div 
              className="absolute inset-0 border-2 border-dashed border-primary/50"
              style={{
                aspectRatio: `${imageType.size.width}/${imageType.size.height}`
              }}
            />
          </div>
          
          {/* Size Details */}
          <dl className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <dt className="text-muted-foreground">Width</dt>
              <dd className="font-medium">{imageType.size.width}px</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Height</dt>
              <dd className="font-medium">{imageType.size.height}px</dd>
            </div>
            {imageType.size.aspectRatio && (
              <div>
                <dt className="text-muted-foreground">Aspect Ratio</dt>
                <dd className="font-medium">{imageType.size.aspectRatio}</dd>
              </div>
            )}
            {imageType.size.maxFileSize && (
              <div>
                <dt className="text-muted-foreground">Max File Size</dt>
                <dd className="font-medium">{imageType.size.maxFileSize}</dd>
              </div>
            )}
          </dl>

          {/* Recommendations */}
          {imageType.recommendations && imageType.recommendations.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Tips</h4>
              <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                {imageType.recommendations.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}