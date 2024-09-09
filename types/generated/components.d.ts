import type { Schema, Attribute } from '@strapi/strapi';

export interface PricesPriceOnType extends Schema.Component {
  collectionName: 'components_prices_price_on_types';
  info: {
    displayName: 'priceOnType';
    description: '';
  };
  attributes: {
    price: Attribute.Integer;
    type: Attribute.Enumeration<['medium', 'large', 'extraLarge']>;
  };
}

export interface PricesDryMode extends Schema.Component {
  collectionName: 'components_prices_dry_modes';
  info: {
    displayName: 'dryMode';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.Text;
    temp: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'prices.price-on-type': PricesPriceOnType;
      'prices.dry-mode': PricesDryMode;
    }
  }
}
