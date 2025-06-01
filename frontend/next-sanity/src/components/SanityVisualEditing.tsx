import { VisualEditing } from "@sanity/visual-editing/next-pages-router";
import { useLiveMode } from "@sanity/react-loader";
import DisableDraftMode from "@/components/DisableDraftMode";
import { client } from "@/sanity/lib/client";

const stegaClient = client.withConfig({ stega: true });

export default function SanityVisualEditing() {
  useLiveMode({ client: stegaClient });

  return (
    <>
      <VisualEditing />
      <DisableDraftMode />
    </>
  );
}
