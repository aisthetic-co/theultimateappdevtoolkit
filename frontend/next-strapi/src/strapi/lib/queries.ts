export const linkFields = {
  populate: {
    internalLink: {
      fields: ['slug']
    }
  }
}

export const customCtaFields = {
  fields: ["ctaLabel"],
  populate: {
    ctaLink: {
      ...linkFields
    },
  },
}

export const navbarFields = {
  fields: ["field1", "field2"]
}

export const footerFields = {
  fields: ["field1", "field2"]
}

export const seoFields = {
  populate: {
    ogImage: {
      fields: ['url']
    }
  }
}

export const customImageFields = {
  populate: {
    desktopImage: {
      fields: ['url', "width", "height", "alternativeText"]
    },
    mobileImage: {
      fields: ['url', "width", "height", "alternativeText"]
    }
  }
}

export const customVideoFields = {
  fields: ["desktopWidth", "desktopHeight", "mobileWidth", "mobileHeight", "showMuteIcon"],
  populate: {
    desktopVideo: {
      fields: ['url']
    },
    mobileVideo: {
      fields: ['url']
    }
  }
}

export const mediaFields = {
  fields: ["mediaType"],
  populate: {
    image: {
      ...customImageFields
    },
    video: {
      ...customVideoFields
    }
  }
}

export const titleAndMediaFields = {
  fields: ["title", "description"],
  populate: {
    cta: {
      ...customCtaFields
    }
  }
}

export const dynamicZoneComponents = {
  "dynamic-zone.title-and-description": {
    ...titleAndMediaFields,
  },
  "shared.media": {
    ...mediaFields
  }
}

// Navbar
export function navbarQuery() {
  return {
    contentType: "navigation",
    params: {
      ...navbarFields
    },
    spreadData: true,
  };
}

// Footer
export function footerQuery() {
  return {
    contentType: "footer",
    params: {
      ...footerFields
    },
    spreadData: true,
  };
}

// Common Page 
export function pageContentQuery(slug: string) {
  return {
    contentType: "pages",
    params: {
      filters: {
        slug,
      },
      fields: ["slug", "title"],
      populate: {
        seo: {
          ...seoFields
        },
        dynamic_zone: {
          on: dynamicZoneComponents
        }
      }
    },
    spreadData: true,
  };
}

// Common Page Slugs
export function pageSlugsQuery() {
  return {
    contentType: "pages",
    params: {
      fields: "slug",
    },
    spreadData: false,
  };
}
