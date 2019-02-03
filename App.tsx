import { createStackNavigator, createAppContainer } from "react-navigation";
import RealEstateListContainer from "./src/containers/RealEstateListContainer";
import RealEstateSingleViewContainer from "./src/containers/RealEstateSingleViewContainer";

const AppNavigator = createStackNavigator({
  RealEstateList: {
    screen: RealEstateListContainer
  },
  RealEstateSingleView: {
    screen: RealEstateSingleViewContainer
  }
});

export default createAppContainer(AppNavigator);
