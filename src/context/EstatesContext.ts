import React from "react";
export const EstatesContext = React.createContext({
  estates: [],
  countries: [],
  fetchEstates: () => {}
});
