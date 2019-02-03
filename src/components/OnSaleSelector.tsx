import React, { Component } from "react";
//@ts-ignore
import { RadioButton } from "react-native-btr";
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

  generateButtons(): Array<Element> {
    const buttons: Array<Element> = [];
    [
      {
        text: "All",
        value: 2,
        checked: (props: any) =>
          props.filters.onSale === 2 ||
          props.filters.onSale === null ||
          typeof props.filters.onSale === "undefined"
      },
      {
        text: "Yes",
        value: 1,
        checked: (props: any) => props.filters.onSale === 1
      },
      {
        text: "No",
        value: 0,
        checked: (props: any) => props.filters.onSale === 0
      }
    ].forEach((button, index) => {
      buttons.push(
        <RadioButton
          key={index}
          checked={button.checked(this.props)}
          color={"#484"}
          onPress={() => this.onButtonPress(button.value)}
          size={10}
        >
          <Text style={[{ margin: 10, color: "#484" }]}>{button.text}</Text>
        </RadioButton>
      );
    });

    return buttons;
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
        <View>{this.generateButtons()}</View>
      </View>
    );
  }
}
