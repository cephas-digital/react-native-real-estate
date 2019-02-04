export enum OnSale {
  No = 0,
  Yes = 1,
  All = 2
}

export interface City {
  id: number;
  name: string;
  country: string;
  created_at: string;
  updated_at: string;
}

export interface Developer {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface Estate {
  id: number;
  name: string;
  isOnSale: OnSale;
  price: number;
  city_id: number;
  developer_id: number;
  created_at: string;
  updated_at: string;
  city: City;
  developer: Developer;
  hidden?: boolean;
}

export interface ListingFilters {
  country?: string | null;
  onSale?: OnSale | null;
  maxPrice?: number | null;
  developerId?: number | null;
}

export interface NewEstate {
  name: string | null;
  price: number | null | undefined;
  city_id: number | null;
  developer_id: number | null | undefined;
}
