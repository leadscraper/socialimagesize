// app/page.tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlatformCard } from "@/components/PlatformCard";
import { PLATFORMS } from "@/constants";
export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">
            2024 Social Media Image Size Guide
          </h1>
          <p className="text-lg text-muted-foreground">
            Optimize your social media presence with the perfect image sizes
          </p>
        </div>

        <Tabs defaultValue="instagram" className="space-y-4">
          <TabsList className="flex justify-center flex-wrap gap-2">
            {PLATFORMS.map((platform) => (
              <TabsTrigger
                key={platform.id}
                value={platform.id}
                className="flex items-center gap-2"
              >
                <platform.icon  />
                {platform.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {PLATFORMS.map((platform) => (
            <TabsContent key={platform.id} value={platform.id}>
              <PlatformCard platform={platform} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </main>
  );
}