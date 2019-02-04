import React from "react";
import renderer from "react-test-renderer";
import PriceSelector from "../../../src/components/PriceSelector";

test("renders correctly", () => {
  const tree = renderer
    .create(
      <PriceSelector
        filters={{}}
        setFilters={filters => console.log(filters)}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
