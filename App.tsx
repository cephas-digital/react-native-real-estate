import { createStackNavigator, createAppContainer } from "react-navigation";
import RealEstateListContainer from "./src/containers/RealEstateListContainer";

const AppNavigator = createStackNavigator({
  RealEstateList: {
    screen: RealEstateListContainer
  }
});

export default createAppContainer(AppNavigator);
