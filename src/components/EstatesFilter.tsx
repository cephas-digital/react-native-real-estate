import React, { PureComponent } from "react";
import { View } from "react-native";
import CountrySelector from "../components/CountrySelector";
import OnSaleSelector from "../components/OnSaleSelector";
import { ListingFilters } from "../interfaces";
import PriceSelector from "./PriceSelector";
import { Button } from "react-native-elements";

interface MyProps {
  countries: Array<string>;
  filters: ListingFilters;
  setFilters(filters: ListingFilters): void;
}

export default class EstatesFilter extends PureComponent<MyProps> {
  render() {
    return (
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
        <View style={{ alignItems: "center" }}>
          <Button
            containerStyle={{ width: "35%" }}
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
        </View>
      </View>
    );
  }
}
