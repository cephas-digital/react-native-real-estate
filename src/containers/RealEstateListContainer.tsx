import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import RealEstateList from "../components/RealEstateList";
import EstatesFilter from "../components/EstatesFilter";
import { Estate, ListingFilters } from "../interfaces";
import { filterEstatesBy } from "../service/EstatesFiltering";
import ActionButton from "react-native-action-button";
import { NavigationParams, NavigationScreenProp } from "react-navigation";
var RealEstateApi = require("./../service/realestate");

interface MyProps {
  navigation: NavigationScreenProp<any, NavigationParams>;
}

interface MyState {
  estates: Array<Estate>;
  countries: Array<{ name: string; city_id: number }>;
  filters: ListingFilters;
}

export default class RealEstateListContainer extends React.Component<
  MyProps,
  MyState
> {
  static navigationOptions = {
    header: null
  };

  constructor(props: MyProps) {
    super(props);
    this.state = {
      estates: [],
      countries: [],
      filters: {}
    };
  }

  componentDidMount = () => {
    RealEstateApi.getList().then((estates: Array<Estate>) => {
      const countries = estates
        .map((item: Estate) => {
          return { name: item.city.country, city_id: item.city.id };
        })
        .filter(
          (thing, index, self) =>
            index === self.findIndex(t => t.name === thing.name)
        );
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
          onSingleItemPress={(estate: Estate) =>
            this.props.navigation.navigate("RealEstateSingleView", { estate })
          }
          estates={filterEstatesBy(this.state.estates, this.state.filters)}
        />
        <ActionButton
          buttonColor="rgba(231,76,60,1)"
          onPress={() => this.props.navigation.navigate("RealEstateAddNew")}
        />
      </SafeAreaView>
    );
  }
}
