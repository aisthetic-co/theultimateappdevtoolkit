import { BlocksContent } from "@strapi/blocks-react-renderer";

export type Tlink = {
    internalLink?: {
        slug: string | null;
    } | null;
    externalLink?: string | null;
};

export type CustomCtaProps = {
    ctaLabel?: string;
    ctaLink: Tlink | null;
};

export type CustomImageProps = {
    id: string;
    desktopImage?: {
        url: string;
        width: number;
        height: number;
        alternativeText?: string;
    };
    mobileImage?: {
        url: string;
        width: number;
        height: number;
        alternativeText?: string;
    };
    className?: string;
    isLCP?: boolean;
    width?: string | number;
    height?: string | number;
};

export type CustomVideoProps = {
    id: string;
    mobileVideo?: {
        url: string;
    };
    desktopVideo?: {
        url: string;
    };
    mobileWidth?: number;
    mobileHeight?: number;
    desktopWidth?: number;
    desktopHeight?: number;
    showMuteIcon: boolean;
    width?: string | number;
    height?: string | number;
    className?: string;
};

export interface TCustomMedia {
    mediaType: "image" | "video";
    image?: CustomImageProps;
    video?: CustomVideoProps
}

export interface CustomRichTextProps {
    content: BlocksContent;
}
