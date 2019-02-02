export enum OnSale {
  No = 0,
  Yes = 1
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
}
