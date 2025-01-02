import type { Attribute, Schema } from '@strapi/strapi';

export interface CommonAccordion extends Schema.Component {
  collectionName: 'components_common_accordions';
  info: {
    description: '';
    displayName: 'Accordion';
  };
  attributes: {
    content: Attribute.RichText;
    label: Attribute.String;
  };
}

export interface CommonArray extends Schema.Component {
  collectionName: 'components_common_arrays';
  info: {
    displayName: 'Array';
  };
  attributes: {
    name: Attribute.String;
  };
}

export interface CommonButton extends Schema.Component {
  collectionName: 'components_common_buttons';
  info: {
    description: '';
    displayName: 'Button';
  };
  attributes: {
    label: Attribute.String;
    url: Attribute.String;
  };
}

export interface CommonSeo extends Schema.Component {
  collectionName: 'components_common_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'information';
  };
  attributes: {
    description: Attribute.Text;
    images: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    json_schema: Attribute.JSON;
    nofollow: Attribute.Boolean;
    noindex: Attribute.Boolean & Attribute.DefaultTo<false>;
    rss_description: Attribute.String;
    title: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'common.accordion': CommonAccordion;
      'common.array': CommonArray;
      'common.button': CommonButton;
      'common.seo': CommonSeo;
    }
  }
}
