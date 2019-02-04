import React from "react";
import { filterEstatesBy } from "../../../src/service/EstatesFiltering";
import renderer from "react-test-renderer";

const estates = [
  {
    id: 1,
    name: "Suite 870",
    isOnSale: 0,
    price: 1317,
    city_id: 1,
    developer_id: 41,
    created_at: "2019-01-31 13:28:45",
    updated_at: "2019-01-31 13:28:45",
    city: {
      id: 1,
      name: "Watsica Glen",
      country: "Aruba",
      created_at: "2019-01-31 13:28:44",
      updated_at: "2019-01-31 13:28:44"
    },
    developer: {
      id: 41,
      name: "Vilma Bartell",
      created_at: "2019-01-31 13:28:45",
      updated_at: "2019-01-31 13:28:45"
    }
  },
  {
    id: 11,
    name: "Suite 113",
    isOnSale: 0,
    price: 7572,
    city_id: 31,
    developer_id: 1,
    created_at: "2019-01-31 13:28:45",
    updated_at: "2019-01-31 13:28:45",
    city: {
      id: 31,
      name: "Callie Mount",
      country: "Guyana",
      created_at: "2019-01-31 13:28:45",
      updated_at: "2019-01-31 13:28:45"
    },
    developer: {
      id: 1,
      name: "Anna Rowe",
      created_at: "2019-01-31 13:28:45",
      updated_at: "2019-01-31 13:28:45"
    }
  },
  {
    id: 21,
    name: "Suite 957",
    isOnSale: 1,
    price: 2826,
    city_id: 81,
    developer_id: 1,
    created_at: "2019-01-31 13:28:45",
    updated_at: "2019-01-31 13:28:45",
    city: {
      id: 81,
      name: "Hildegard Mountain",
      country: "Yemen",
      created_at: "2019-01-31 13:28:45",
      updated_at: "2019-01-31 13:28:45"
    },
    developer: {
      id: 1,
      name: "Anna Rowe",
      created_at: "2019-01-31 13:28:45",
      updated_at: "2019-01-31 13:28:45"
    }
  },
  {
    id: 31,
    name: "Suite 371",
    isOnSale: 1,
    price: 1145,
    city_id: 91,
    developer_id: 41,
    created_at: "2019-01-31 13:28:45",
    updated_at: "2019-01-31 13:28:45",
    city: {
      id: 91,
      name: "O'Reilly Ville",
      country: "Thailand",
      created_at: "2019-01-31 13:28:45",
      updated_at: "2019-01-31 13:28:45"
    },
    developer: {
      id: 41,
      name: "Vilma Bartell",
      created_at: "2019-01-31 13:28:45",
      updated_at: "2019-01-31 13:28:45"
    }
  }
];

test("renders correctly", () => {
  let validationResult = filterEstatesBy(estates, {});
  expect(validationResult.length).toEqual(4);

  validationResult = filterEstatesBy(estates, {
    country: null,
    onSale: 1,
    maxPrice: null
  });
  expect(validationResult.length).toEqual(2);

  validationResult = filterEstatesBy(estates, {
    country: "Thailand",
    onSale: null,
    maxPrice: null
  });
  expect(validationResult.length).toEqual(1);

  validationResult = filterEstatesBy(estates, {
    country: null,
    onSale: null,
    maxPrice: 1400
  });
  expect(validationResult.length).toEqual(2);

  validationResult = filterEstatesBy(estates, {
    country: "Thailand",
    onSale: 1,
    maxPrice: 1400
  });
  expect(validationResult.length).toEqual(1);
});
