import type { Schema, Struct } from '@strapi/strapi';

export interface DynamicZoneTitleAndDescription extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_title_and_descriptions';
  info: {
    description: '';
    displayName: 'TitleAndDescription';
    icon: 'brush';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.custom-cta', false>;
    description: Schema.Attribute.Blocks;
    title: Schema.Attribute.Blocks;
  };
}

export interface SharedCustomCta extends Struct.ComponentSchema {
  collectionName: 'components_shared_custom_cta';
  info: {
    description: '';
    displayName: 'CustomCta';
    icon: 'link';
  };
  attributes: {
    ctaLabel: Schema.Attribute.String & Schema.Attribute.Required;
    ctaLink: Schema.Attribute.Component<'shared.link', false>;
  };
}

export interface SharedCustomImage extends Struct.ComponentSchema {
  collectionName: 'components_shared_custom_images';
  info: {
    description: '';
    displayName: 'CustomImage';
    icon: 'picture';
  };
  attributes: {
    desktopImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    mobileImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedCustomVideo extends Struct.ComponentSchema {
  collectionName: 'components_shared_custom_videos';
  info: {
    description: '';
    displayName: 'CustomVideo';
  };
  attributes: {
    desktopHeight: Schema.Attribute.Integer;
    desktopVideo: Schema.Attribute.Media<'videos'> & Schema.Attribute.Required;
    desktopWidth: Schema.Attribute.Integer;
    mobileHeight: Schema.Attribute.Integer;
    mobileVideo: Schema.Attribute.Media<'videos'>;
    mobileWidth: Schema.Attribute.Integer;
    showMuteIcon: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    description: '';
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    externalLink: Schema.Attribute.String;
    internalLink: Schema.Attribute.Relation<'oneToOne', 'api::page.page'>;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    description: '';
    displayName: 'Media';
    icon: 'dashboard';
  };
  attributes: {
    image: Schema.Attribute.Component<'shared.custom-image', false>;
    mediaType: Schema.Attribute.Enumeration<['image', 'video']> &
      Schema.Attribute.Required;
    video: Schema.Attribute.Component<'shared.custom-video', false>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'SEO';
    icon: 'search';
  };
  attributes: {
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 50;
      }>;
    metadataBase: Schema.Attribute.String;
    ogImage: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'dynamic-zone.title-and-description': DynamicZoneTitleAndDescription;
      'shared.custom-cta': SharedCustomCta;
      'shared.custom-image': SharedCustomImage;
      'shared.custom-video': SharedCustomVideo;
      'shared.link': SharedLink;
      'shared.media': SharedMedia;
      'shared.seo': SharedSeo;
    }
  }
}
