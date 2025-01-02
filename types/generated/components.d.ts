import type { Schema, Struct } from '@strapi/strapi';

export interface CommonAccordion extends Struct.ComponentSchema {
  collectionName: 'components_common_accordions';
  info: {
    description: '';
    displayName: 'Accordion';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    label: Schema.Attribute.String;
  };
}

export interface CommonArray extends Struct.ComponentSchema {
  collectionName: 'components_common_arrays';
  info: {
    displayName: 'Array';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface CommonButton extends Struct.ComponentSchema {
  collectionName: 'components_common_buttons';
  info: {
    description: '';
    displayName: 'Button';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface CommonSeo extends Struct.ComponentSchema {
  collectionName: 'components_common_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'information';
  };
  attributes: {
    description: Schema.Attribute.Text;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    json_schema: Schema.Attribute.JSON;
    nofollow: Schema.Attribute.Boolean;
    noindex: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    rss_description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'common.accordion': CommonAccordion;
      'common.array': CommonArray;
      'common.button': CommonButton;
      'common.seo': CommonSeo;
    }
  }
}
