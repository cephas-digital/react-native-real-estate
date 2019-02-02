import React from "react";
import RealEstateList from "../../../src/components/RealEstateList";

import renderer from "react-test-renderer";
import { Estate } from "../../../src/interfaces";

let data: Array<Estate> = [
  {
    id: 351,
    name: "Some apartment",
    isOnSale: 1,
    price: 4000,
    city_id: 51,
    developer_id: 31,
    created_at: "2019-02-01 20:35:49",
    updated_at: "2019-02-01 20:35:49",
    city: {
      id: 51,
      name: "Maggio Crossroad",
      country: "Tajikistan",
      created_at: "2019-01-31 13:28:45",
      updated_at: "2019-01-31 13:28:45"
    },
    developer: {
      id: 31,
      name: "Dr. Lucas Krajcik III",
      created_at: "2019-01-31 13:28:45",
      updated_at: "2019-01-31 13:28:45"
    }
  },
  {
    id: 361,
    name: "Some apartment",
    isOnSale: 1,
    price: 4000,
    city_id: 61,
    developer_id: 61,
    created_at: "2019-02-01 20:38:05",
    updated_at: "2019-02-01 20:38:05",
    city: {
      id: 61,
      name: "Mary Field",
      country: "Monaco",
      created_at: "2019-01-31 13:28:45",
      updated_at: "2019-01-31 13:28:45"
    },
    developer: {
      id: 61,
      name: "Lucious Sipes",
      created_at: "2019-01-31 13:28:45",
      updated_at: "2019-01-31 13:28:45"
    }
  }
];

test("renders correctly", () => {
  const tree = renderer.create(<RealEstateList estates={data} />).toJSON();
  expect(tree).toMatchSnapshot();
});
