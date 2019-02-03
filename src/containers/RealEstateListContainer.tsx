import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import RealEstateList from "../components/RealEstateList";
import EstatesFilter from "../components/EstatesFilter";
import { Estate, ListingFilters } from "../interfaces";
import { filterEstatesBy } from "../service/EstatesFiltering";
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
    this.setState({
      filters: { ...this.state.filters, ...filters }
    });
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
        <EstatesFilter
          countries={this.state.countries}
          filters={this.state.filters}
          setFilters={(filters: ListingFilters) => this.setFilters(filters)}
        />
        <RealEstateList
          estates={filterEstatesBy(this.state.estates, this.state.filters)}
        />
      </SafeAreaView>
    );
  }
}
