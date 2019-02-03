import React, { PureComponent } from "react";
import { Input } from "react-native-elements";
import { ListingFilters } from "../interfaces";

interface MyProps {
  setFilters(filters: ListingFilters): void;
  filters: ListingFilters;
}

export default class PriceSelector extends PureComponent<MyProps> {
  getValue() {
    if (
      this.props.filters.maxPrice === null ||
      typeof this.props.filters.maxPrice === "undefined"
    ) {
      return "";
    }

    return this.props.filters.maxPrice.toString();
  }
  render() {
    return (
      <Input
        containerStyle={{ width: 160 }}
        value={this.getValue()}
        placeholder="Max Price"
        leftIcon={{ name: "dollar", type: "font-awesome" }}
        leftIconContainerStyle={{ marginRight: 10 }}
        onChangeText={(maxPrice: string) => {
          this.props.setFilters({ maxPrice: parseInt(maxPrice, 10) });
        }}
        keyboardType={"number-pad"}
      />
    );
  }
}
