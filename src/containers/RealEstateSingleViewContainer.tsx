import React from "react";
import { SafeAreaView, StatusBar, Text } from "react-native";
import { Estate } from "../interfaces";
import {
  NavigationScreenProp,
  NavigationParams,
  NavigationScreenDetails
} from "react-navigation";

interface MyProps {
  navigation: NavigationScreenProp<any, NavigationParams>;
}

export default class RealEstateSingleViewContainer extends React.Component<
  MyProps
> {
  static navigationOptions = (
    navigationOptions: NavigationScreenDetails<any>
  ) => {
    return {
      title: navigationOptions.navigation.getParam("estate").name
    };
  };

  render() {
    const estate: Estate = this.props.navigation.getParam("estate");

    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#fff",
          marginTop: StatusBar.currentHeight,
          marginHorizontal: 10
        }}
      >
        <Text>Name: {estate.name}</Text>
        <Text>Price: {estate.price}</Text>
        <Text>On Sale: {estate.isOnSale ? "Yes" : "No"}</Text>
        <Text>Developer: {estate.developer.name}</Text>
        <Text>
          Country: {estate.city.country} ({estate.city.name})
        </Text>
      </SafeAreaView>
    );
  }
}
