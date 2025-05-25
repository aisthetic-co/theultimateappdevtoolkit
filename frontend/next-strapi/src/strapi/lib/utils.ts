import { unstable_noStore as noStore } from "next/cache";
import { strapiApiUrl } from "../env";
import { Tlink } from "@/app.types";

export function strapiUrl(url: string) {
    noStore();
    if (url?.startsWith("/")) {
        if (!strapiApiUrl && document?.location.host.endsWith(".strapidemo.com")) {
            return `https://${document.location.host.replace("client-", "api-")}${url}`;
        }

        return strapiApiUrl + url;
    }
    return url;
}

export const getReferenceLink = (
    value: Tlink | null
): { linkType: "external" | "internal"; url?: string | null } => {
    const linkType = value?.internalLink ? "internal" : "external";
    let url: string | undefined | null = "#";

    switch (linkType) {
        case "internal": {
            url = value?.internalLink?.slug === "homepage" ? "/" : `/${value?.internalLink?.slug}`;
            break;
        }
        case "external": {
            url = value?.externalLink;
            break;
        }
    }

    return { linkType, url };
};
