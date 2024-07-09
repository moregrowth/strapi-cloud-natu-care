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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'common.accordion': CommonAccordion;
      'common.button': CommonButton;
    }
  }
}
