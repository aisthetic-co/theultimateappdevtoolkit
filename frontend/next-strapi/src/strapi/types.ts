export interface StrapiDocument {
    id: number;
    documentId: string;
}

export interface FooterQueryResult extends StrapiDocument {
    field1?: string;
    field2?: string;
}

export interface NavbarQueryResult extends StrapiDocument {
    field1?: string;
    field2?: string;
}

export interface PageQueryResult extends StrapiDocument {
    slug: string;
    title?: string;
    seo?: {
        metaTitle?: string;
        metaDescription?: string;
        ogImage?: {
            url: string;
        };
    };
    dynamic_zone?: Array<{
        [key: string]: Record<string, unknown>;
    }>;
}