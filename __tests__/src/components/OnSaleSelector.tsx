import React from "react";
import renderer from "react-test-renderer";
import OnSaleSelector from "../../../src/components/OnSaleSelector";

test("renders correctly", () => {
  const tree = renderer
    .create(
      <OnSaleSelector
        filters={{}}
        setFilters={filters => console.log(filters)}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
