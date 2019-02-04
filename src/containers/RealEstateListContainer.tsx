import React, { Fragment } from "react";
import { SafeAreaView, StatusBar } from "react-native";
import RealEstateList from "../components/RealEstateList";
import EstatesFilter from "../components/EstatesFilter";
import { Estate, ListingFilters } from "../interfaces";
import { filterEstatesBy } from "../service/EstatesFiltering";
import ActionButton from "react-native-action-button";
import { NavigationParams, NavigationScreenProp } from "react-navigation";
import { EstatesContext } from "../context/EstatesContext";
var RealEstateApi = require("./../service/realestate");

interface MyProps {
  navigation: NavigationScreenProp<any, NavigationParams>;
}

interface MyState {
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
      filters: {}
    };
  }

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
        <EstatesContext.Consumer>
          {data => (
            <Fragment>
              <EstatesFilter
                countries={data.countries}
                filters={this.state.filters}
                setFilters={(filters: ListingFilters) =>
                  this.setFilters(filters)
                }
              />
              <RealEstateList
                onSingleItemPress={(estate: Estate) =>
                  this.props.navigation.navigate("RealEstateSingleView", {
                    estate
                  })
                }
                estates={filterEstatesBy(data.estates, this.state.filters)}
              />
            </Fragment>
          )}
        </EstatesContext.Consumer>

        <ActionButton
          buttonColor="rgba(231,76,60,1)"
          onPress={() => this.props.navigation.navigate("RealEstateAddNew")}
        />
      </SafeAreaView>
    );
  }
}
