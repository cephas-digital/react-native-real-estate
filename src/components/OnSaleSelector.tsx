import React, { Component } from "react";
//@ts-ignore
import { RadioGroup, RadioButton } from "react-native-btr";
import { View, Text } from "react-native";
import { ListingFilters } from "../interfaces";

interface MyProps {
  setFilters(filters: ListingFilters): void;
  filters: ListingFilters;
}

export default class OnSaleSelector extends Component<MyProps> {
  onButtonPress(onSaleValue: number) {
    this.props.setFilters({ onSale: onSaleValue });
  }

  render() {
    return (
      <View
        style={{
          alignItems: "center",
          marginVertical: 10
        }}
      >
        <Text
          style={{
            marginBottom: 10,
            fontSize: 20,
            justifyContent: "center"
          }}
        >
          Is on Sale?
        </Text>
        <View>
          <RadioButton
            checked={
              this.props.filters.onSale === 2 ||
              this.props.filters.onSale === null ||
              typeof this.props.filters.onSale === "undefined"
            }
            color={"#484"}
            onPress={() => this.onButtonPress(2)}
            size={10}
          >
            <Text style={[{ margin: 10, color: "#484" }]}>All</Text>
          </RadioButton>
          <RadioButton
            checked={this.props.filters.onSale === 1}
            color={"#484"}
            onPress={() => this.onButtonPress(1)}
            size={10}
          >
            <Text style={[{ margin: 10, color: "#484" }]}>Yes</Text>
          </RadioButton>
          <RadioButton
            checked={this.props.filters.onSale === 0}
            color={"#484"}
            onPress={() => this.onButtonPress(0)}
            size={10}
          >
            <Text style={[{ margin: 10, color: "#484" }]}>No</Text>
          </RadioButton>
        </View>
      </View>
    );
  }
}
