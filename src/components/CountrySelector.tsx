import React, { PureComponent } from "react";
import { View } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import Picker from "react-native-picker-select";
import { ListingFilters } from "../interfaces";

interface MyProps {
  countries: Array<string>;
  filters: ListingFilters;
  setFilters(filters: ListingFilters): void;
}

export default class CountrySelector extends PureComponent<MyProps> {
  inputRefsPicker: Picker | null;

  constructor(props: any) {
    super(props);

    this.inputRefsPicker = null;
  }

  render() {
    return (
      <View>
        <RNPickerSelect
          placeholder={{
            label: "Select country",
            value: null,
            color: "#9EA0A4"
          }}
          items={this.props.countries.map((country: string) => {
            return { label: country, value: country };
          })}
          onValueChange={selectedCountry => {
            this.setState({ selectedCountry });
            this.props.setFilters({ country: selectedCountry });
          }}
          onUpArrow={() => {
            this.inputRefsPicker && this.inputRefsPicker.focus();
          }}
          onDownArrow={() => {
            this.inputRefsPicker && this.inputRefsPicker.togglePicker();
          }}
          value={this.props.filters.country}
          ref={el => {
            this.inputRefsPicker = el;
          }}
        />
      </View>
    );
  }
}
