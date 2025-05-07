import createImageUrlBuilder from "@sanity/image-url";

import { dataset, projectId } from "@/sanity/env";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Tlink } from "@/app.types";
const imageBuilder = createImageUrlBuilder({
  projectId: projectId || "",
  dataset: dataset || ""
});

export const urlForImage = (source: SanityImageSource) => {
  return imageBuilder?.image(source).auto("format").fit("max");
};


export const getReferenceLink = (
  value: Tlink
): { linkType: "external" | "internal"; url: string } => {
  const linkType = value?.internalLink ? "internal" : "external";
  let url = "#";

  switch (linkType) {
    case "internal": {
      url = value?.internalLink?.slug;
      break;
    }
    case "external": {
      url = value?.externalLink;
      break;
    }
  }

  return { linkType, url };
};