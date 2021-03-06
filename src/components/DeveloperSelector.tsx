import React, { PureComponent } from "react";
import { View } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { ListingFilters, Developer } from "../interfaces";

interface MyProps {
  developers: Array<Developer>;
  filters: ListingFilters;
  setFilters(filters: ListingFilters): void;
}

export default class DeveloperSelector extends PureComponent<MyProps> {
  render() {
    return (
      <View>
        <RNPickerSelect
          placeholder={{
            label: "Select developer",
            value: null,
            color: "#9EA0A4"
          }}
          items={this.props.developers.map((developer: Developer) => {
            return { label: developer.name, value: developer.id };
          })}
          onValueChange={developerId => {
            this.props.setFilters({ developerId });
          }}
          value={this.props.filters.developerId}
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
