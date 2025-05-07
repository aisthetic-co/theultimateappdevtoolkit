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