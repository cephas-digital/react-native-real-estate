import React, { Fragment } from "react";
import FlashMessage from "react-native-flash-message";
import { createStackNavigator, createAppContainer } from "react-navigation";
import RealEstateListContainer from "./src/containers/RealEstateListContainer";
import RealEstateSingleViewContainer from "./src/containers/RealEstateSingleViewContainer";
import RealEstateAddNewContainer from "./src/containers/RealEstateAddNewContainer";
import { View } from "react-native";
import { Estate } from "./src/interfaces";
import { EstatesContext } from "./src/context/EstatesContext";
var RealEstateApi = require("./src/service/realestate");

const AppNavigator = createStackNavigator({
  RealEstateList: {
    screen: RealEstateListContainer
  },
  RealEstateSingleView: {
    screen: RealEstateSingleViewContainer
  },
  RealEstateAddNew: {
    screen: RealEstateAddNewContainer
  }
});

const AppContainer = createAppContainer(AppNavigator);

interface MyState {
  estates: Array<Estate>;
  countries: Array<{ name: string; city_id: number }>;
  fetchEstates(): void;
}

export default class App extends React.Component<any, MyState> {
  fetchEstates = () => {
    console.log("estates fetched");
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

  state = {
    estates: [],
    countries: [],
    fetchEstates: this.fetchEstates
  };

  componentDidMount = () => this.fetchEstates();

  render() {
    return (
      <View style={{ flex: 1 }}>
        <EstatesContext.Provider value={this.state}>
          <AppContainer />
        </EstatesContext.Provider>
        <FlashMessage position="top" />
      </View>
    );
  }
}
