import React from "react";
import renderer from "react-test-renderer";
import CountrySelector from "../../../src/components/CountrySelector";

let countries: Array<{ name: string }> = [
  { name: "Poland" },
  { name: "Norway" },
  { name: "Germany" }
];

test("renders correctly", () => {
  const tree = renderer
    .create(
      <CountrySelector
        filters={{}}
        countries={countries}
        setFilters={filters => console.log(filters)}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
