import React, { PureComponent } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import CountrySelector from "../components/CountrySelector";
import OnSaleSelector from "../components/OnSaleSelector";
import { ListingFilters } from "../interfaces";
import PriceSelector from "./PriceSelector";
import { Button, Icon } from "react-native-elements";
import Collapsible from "react-native-collapsible";

interface MyProps {
  countries: Array<string>;
  filters: ListingFilters;
  setFilters(filters: ListingFilters): void;
}

export default class EstatesFilter extends PureComponent<MyProps> {
  state = {
    collapsed: true
  };

  getSelectedCountry() {
    if (
      this.props.filters.country === null ||
      typeof this.props.filters.country === "undefined"
    ) {
      return "Everywere";
    }

    return this.props.filters.country;
  }

  getSelectedStatus() {
    if (
      this.props.filters.onSale === null ||
      this.props.filters.onSale === 2 ||
      typeof this.props.filters.onSale === "undefined"
    ) {
      return "All";
    }

    if (this.props.filters.onSale === 1) {
      return "Yes";
    }

    if (this.props.filters.onSale === 0) {
      return "No";
    }
  }

  getSelectedPrice() {
    if (
      this.props.filters.maxPrice === null ||
      typeof this.props.filters.maxPrice === "undefined"
    ) {
      return "No limit!";
    }

    return this.props.filters.maxPrice;
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => this.setState({ collapsed: !this.state.collapsed })}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 10,
              paddingHorizontal: 5,
              alignItems: "center"
            }}
          >
            <Text style={{}}>Country: {this.getSelectedCountry()} | </Text>
            <Text style={{}}>On sale?: {this.getSelectedStatus()} | </Text>
            <Text style={{}}>Max price: {this.getSelectedPrice()} </Text>
            <Icon name={"filter"} type={"font-awesome"} />
          </View>
        </TouchableOpacity>
        <Collapsible collapsed={this.state.collapsed}>
          <View style={{ borderBottomWidth: 1, paddingBottom: 5 }}>
            <CountrySelector
              countries={this.props.countries}
              filters={this.props.filters}
              setFilters={(filters: ListingFilters) =>
                this.props.setFilters(filters)
              }
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <OnSaleSelector
                filters={this.props.filters}
                setFilters={(filters: ListingFilters) =>
                  this.props.setFilters(filters)
                }
              />
              <PriceSelector
                filters={this.props.filters}
                setFilters={(filters: ListingFilters) =>
                  this.props.setFilters(filters)
                }
              />
            </View>
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "center"
              }}
            >
              <Button
                containerStyle={{ width: "30%", marginHorizontal: 10 }}
                buttonStyle={{ backgroundColor: "#ff5722" }}
                onPress={() =>
                  this.props.setFilters({
                    country: null,
                    maxPrice: null,
                    onSale: 2
                  })
                }
                title={"Reset"}
                type={"solid"}
              />
              <Button
                containerStyle={{ width: "35%", marginHorizontal: 10 }}
                onPress={() => this.setState({ collapsed: true })}
                title={"Close"}
                type={"solid"}
              />
            </View>
          </View>
        </Collapsible>
      </View>
    );
  }
}
