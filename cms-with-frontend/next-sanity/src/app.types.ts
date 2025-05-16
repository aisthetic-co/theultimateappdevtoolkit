import { ImageDimensions } from "sanity";

// Extract the type excluding null
export type WithoutNull<T> = T extends null ? never : T;

export type Tlink = {
    internalLink: {
        slug: string;
    };
    externalLink: string;
};

export type CustomCtaProps = {
    ctaLabel: string;
    ctaLink: Tlink;
    ctaColour: string;
};

export type CustomImageProps = {
    desktopImage?: {
        imageUrl?: string;
        imageDimensions?: ImageDimensions;
    };
    mobileImage?: {
        imageUrl?: string;
        imageDimensions?: ImageDimensions;
    };
    isLCP: boolean;
    caption?: string;
};


export type CustomVideoProps = {
    desktopVideo?: {
        videoUrl?: string;
        videoDimensions?: {
            width: number;
            height: number;
        };
    };
    mobileVideo?: {
        videoUrl?: string;
        videoDimensions?: {
            width: number;
            height: number;
        };
    };
    showMuteIcon: boolean;
    cropVideoForMobile: boolean;
};