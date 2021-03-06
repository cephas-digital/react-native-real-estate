import React, { PureComponent } from "react";
import { View } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { ListingFilters } from "../interfaces";

interface MyProps {
  countries: Array<{ name: string }>;
  filters: ListingFilters;
  setFilters(filters: ListingFilters): void;
}

export default class CountrySelector extends PureComponent<MyProps> {
  render() {
    return (
      <View>
        <RNPickerSelect
          placeholder={{
            label: "Select country",
            value: null,
            color: "#9EA0A4"
          }}
          items={this.props.countries.map((country: { name: string }) => {
            return { label: country.name, value: country.name };
          })}
          onValueChange={selectedCountry => {
            this.setState({ selectedCountry });
            this.props.setFilters({ country: selectedCountry });
          }}
          value={this.props.filters.country}
          style={{
            inputIOS: {
              fontSize: 16,
              paddingTop: 13,
              paddingHorizontal: 10,
              paddingBottom: 12,
              borderWidth: 1,
              borderColor: "gray",
              borderRadius: 4,
              backgroundColor: "white",
              color: "black"
            }
          }}
        />
      </View>
    );
  }
}
