import type { Schema, Attribute } from '@strapi/strapi';

export interface CommonAccordion extends Schema.Component {
  collectionName: 'components_common_accordions';
  info: {
    displayName: 'Accordion';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    content: Attribute.RichText;
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
    displayName: 'Button';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    url: Attribute.String;
  };
}

export interface CommonSeo extends Schema.Component {
  collectionName: 'components_common_seos';
  info: {
    displayName: 'Seo';
    icon: 'information';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    noindex: Attribute.Boolean & Attribute.DefaultTo<false>;
    nofollow: Attribute.Boolean;
    json_schema: Attribute.JSON;
    description: Attribute.Text;
    rss_description: Attribute.String;
    images: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
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
