import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import RealEstateList from "../components/RealEstateList";
import { Estate, OnSale, ListingFilters } from "../interfaces";
import CountrySelector from "../components/CountrySelector";
var RealEstateApi = require("./../service/realestate");

interface MyState {
  estates: Array<Estate>;
  countries: Array<string>;
  filters: ListingFilters;
}

export default class RealEstateListContainer extends React.Component<
  any,
  MyState
> {
  static navigationOptions = {
    header: null
  };

  constructor(props: any) {
    super(props);
    this.state = {
      estates: [],
      countries: [],
      filters: {}
    };
  }

  componentDidMount = () => {
    RealEstateApi.getList().then((estates: Array<Estate>) => {
      const countries = [
        ...new Set(estates.map((item: Estate) => item.city.country))
      ];
      this.setState({ estates, countries });
    });
  };

  setFilters = (filters: ListingFilters) => {
    const newFilters = { ...this.state.filters, ...filters };

    this.setState({
      filters: newFilters,
      estates: this.filterEstatesBy(filters)
    });
  };

  filterEstatesBy = (filters: ListingFilters): Array<Estate> => {
    let estates = this.state.estates;
    estates = estates.map(
      (estate: Estate): Estate => {
        estate.hidden = true;

        if (
          estate.city.country === filters.country ||
          filters.country === null ||
          typeof filters.country === "undefined"
        ) {
          estate.hidden = false;
        }

        return estate;
      }
    );

    return estates;
  };

  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#fff",
          marginTop: StatusBar.currentHeight,
          marginHorizontal: 10
        }}
      >
        <CountrySelector
          countries={this.state.countries}
          setFilters={(filters: ListingFilters) => this.setFilters(filters)}
        />
        <RealEstateList estates={this.state.estates} />
      </SafeAreaView>
    );
  }
}
