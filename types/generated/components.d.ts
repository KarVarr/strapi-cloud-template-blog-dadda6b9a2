import type { Schema, Struct } from '@strapi/strapi';

export interface MetaPriceChange extends Struct.ComponentSchema {
  collectionName: 'components_meta_price_changes';
  info: {
    displayName: 'Price Change';
    icon: 'dollar-sign';
  };
  attributes: {
    change: Schema.Attribute.Decimal;
    date: Schema.Attribute.Date;
    direction: Schema.Attribute.Enumeration<['increase', 'decrease']>;
    price: Schema.Attribute.Decimal;
  };
}

export interface PropertyApartmentInfo extends Struct.ComponentSchema {
  collectionName: 'components_property_apartment_infos';
  info: {
    displayName: 'Apartment Info';
    icon: 'home';
  };
  attributes: {
    appliances: Schema.Attribute.Text;
    area: Schema.Attribute.Decimal;
    balcony: Schema.Attribute.Boolean;
    bathrooms: Schema.Attribute.Integer;
    ceiling_height: Schema.Attribute.Decimal;
    floor: Schema.Attribute.Integer;
    furniture: Schema.Attribute.Boolean;
    renovation_type: Schema.Attribute.Enumeration<['design', 'standard', 'no']>;
    rooms: Schema.Attribute.Integer;
    view: Schema.Attribute.Enumeration<['yard', 'city', 'park']>;
  };
}

export interface PropertyBuildingInfo extends Struct.ComponentSchema {
  collectionName: 'components_property_building_infos';
  info: {
    description: '';
    displayName: 'Building Info';
    icon: 'building';
  };
  attributes: {
    construction_type: Schema.Attribute.Enumeration<
      ['monolith', 'panel', 'brick']
    >;
    floors_total: Schema.Attribute.Integer;
    has_elevator: Schema.Attribute.Boolean;
    infrastructure: Schema.Attribute.Text;
    is_new: Schema.Attribute.Boolean;
    parking_type: Schema.Attribute.Enumeration<['open', 'underground', 'none']>;
  };
}

export interface PropertyCommercialInfo extends Struct.ComponentSchema {
  collectionName: 'components_property_commercial_infos';
  info: {
    displayName: 'Commercial Info';
    icon: 'store';
  };
  attributes: {
    area: Schema.Attribute.Decimal;
    commercial_type: Schema.Attribute.Enumeration<
      [
        'office',
        'store',
        'warehouse',
        'restaurant',
        'hotel',
        'auto_service',
        'multifunctional',
      ]
    >;
    floor: Schema.Attribute.Integer;
    infrastructure: Schema.Attribute.Text;
  };
}

export interface PropertyGarageInfo extends Struct.ComponentSchema {
  collectionName: 'components_property_garage_infos';
  info: {
    displayName: 'Garage Info';
    icon: 'car';
  };
  attributes: {
    area: Schema.Attribute.Decimal;
    garage_type: Schema.Attribute.Enumeration<['garage', 'parking']>;
  };
}

export interface PropertyLandInfo extends Struct.ComponentSchema {
  collectionName: 'components_property_land_infos';
  info: {
    displayName: 'Land Info';
    icon: 'tree';
  };
  attributes: {
    area: Schema.Attribute.Decimal;
    land_type: Schema.Attribute.Enumeration<
      ['residential', 'agricultural', 'industrial', 'public', 'mixed']
    >;
  };
}

export interface SharedContact extends Struct.ComponentSchema {
  collectionName: 'components_shared_contacts';
  info: {
    displayName: 'Contact';
    icon: 'user';
  };
  attributes: {
    email: Schema.Attribute.Email;
    is_agency: Schema.Attribute.Boolean;
    name: Schema.Attribute.String;
    phone: Schema.Attribute.String;
    registered_on: Schema.Attribute.Date;
  };
}

export interface SharedFeature extends Struct.ComponentSchema {
  collectionName: 'components_shared_features';
  info: {
    displayName: 'Feature';
    icon: 'check';
  };
  attributes: {
    name: Schema.Attribute.Enumeration<
      [
        'elevator',
        'air_conditioner',
        'refrigerator',
        'video_surveillance',
        'security',
        'furniture',
        'wifi',
      ]
    >;
    value: Schema.Attribute.Boolean;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'meta.price-change': MetaPriceChange;
      'property.apartment-info': PropertyApartmentInfo;
      'property.building-info': PropertyBuildingInfo;
      'property.commercial-info': PropertyCommercialInfo;
      'property.garage-info': PropertyGarageInfo;
      'property.land-info': PropertyLandInfo;
      'shared.contact': SharedContact;
      'shared.feature': SharedFeature;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
