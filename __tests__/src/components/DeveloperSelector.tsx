import React from "react";
import renderer from "react-test-renderer";
import DeveloperSelector from "../../../src/components/DeveloperSelector";
import { Developer } from "../../../src/interfaces";

let developers: Array<Developer> = [
  {
    id: 1,
    name: "Developer 1",
    created_at: "2019-02-04 11:21:22",
    updated_at: "2019-02-04 11:21:22"
  },
  {
    id: 2,
    name: "Cheap Developer",
    created_at: "2019-02-04 11:21:22",
    updated_at: "2019-02-04 11:21:22"
  },
  {
    id: 3,
    name: "Expensive Developer",
    created_at: "2019-02-04 11:21:22",
    updated_at: "2019-02-04 11:21:22"
  }
];

test("renders correctly", () => {
  const tree = renderer
    .create(
      <DeveloperSelector
        filters={{ developerId: 2 }}
        developers={developers}
        setFilters={filters => console.log(filters)}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
