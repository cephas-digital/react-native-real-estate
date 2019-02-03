import React, { Fragment } from "react";
import FlashMessage from "react-native-flash-message";
import { createStackNavigator, createAppContainer } from "react-navigation";
import RealEstateListContainer from "./src/containers/RealEstateListContainer";
import RealEstateSingleViewContainer from "./src/containers/RealEstateSingleViewContainer";
import RealEstateAddNewContainer from "./src/containers/RealEstateAddNewContainer";
import { View } from "react-native";

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

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppContainer />
        <FlashMessage position="top" />
      </View>
    );
  }
}
