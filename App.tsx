import React from "react";
import { View, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import RealEstateList from "./src/components/RealEstateList";
import { Estate } from "./src/interfaces";
var RealEstateApi = require("./src/service/realestate");

interface MyState {
  estates: Array<Estate>;
}

class App extends React.Component<any, MyState> {
  static navigationOptions = {
    header: null
  };

  state = {
    estates: []
  };

  componentDidMount = () => {
    RealEstateApi.getList().then((estates: Array<Estate>) =>
      this.setState({ estates })
    );
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
        <RealEstateList estates={this.state.estates} />
      </SafeAreaView>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: App
  }
});

export default createAppContainer(AppNavigator);
