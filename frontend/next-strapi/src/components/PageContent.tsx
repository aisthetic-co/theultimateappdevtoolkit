import DynamicZoneManager from "@/components/DynamicZoneManager";
import { ApiPagePage } from "@/strapi/types/contentTypes";

type PageContentProps = {
  content: ApiPagePage["attributes"]["dynamic_zone"];
};

export default function PageContent({ content }: PageContentProps) {
  return (
    <main className="relative overflow-hidden w-full">
      <DynamicZoneManager dynamicZone={content} />
    </main>
  );
}
