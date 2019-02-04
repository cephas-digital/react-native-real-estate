import React, { Fragment, Component } from "react";
import { SafeAreaView, StatusBar, Text, View } from "react-native";
import { NavigationScreenProp, NavigationParams } from "react-navigation";
import { Button, Input } from "react-native-elements";
import CountrySelector from "../components/CountrySelector";
import { City, ListingFilters, Developer, NewEstate } from "../interfaces";
import DeveloperSelector from "../components/DeveloperSelector";
import PriceSelector from "../components/PriceSelector";
import { EstatesContext } from "../context/EstatesContext";
import { showMessage } from "react-native-flash-message";
import { validateNewEstate } from "../service/Validators";
var RealEstateApi = require("./../service/realestate");

interface MyProps {
  navigation: NavigationScreenProp<any, NavigationParams>;
}

interface MyState {
  newEstate: NewEstate;
  cities: Array<City>;
  countries: Array<{
    name: string;
    city_id: number;
  }>;
  developers: Array<Developer>;
  errors: Element;
  filters: ListingFilters;
}

export default class RealEstateAddNewContainer extends React.Component<
  MyProps,
  MyState
> {
  static navigationOptions = (
    navigationOptions: NavigationScreenProp<any, NavigationParams>
  ) => {
    return {
      title: "Add new"
    };
  };

  constructor(props: MyProps) {
    super(props);

    this.state = {
      newEstate: {
        name: null,
        price: null,
        city_id: null,
        developer_id: null
      },
      cities: [],
      countries: [],
      developers: [],
      errors: [],
      filters: {}
    };
  }

  componentDidMount = () => {
    RealEstateApi.getCities().then((cities: Array<City>) => {
      const countries = cities
        .map((item: City) => {
          return { name: item.country, city_id: item.id };
        })
        .filter(
          (thing, index, self) =>
            index === self.findIndex(t => t.name === thing.name)
        );
      this.setState({ cities, countries });
    });
    RealEstateApi.getDevelopers().then((developers: Array<Developer>) => {
      this.setState({ developers });
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
        {this.state.errors}

        <CountrySelector
          countries={this.state.countries}
          filters={this.state.filters}
          setFilters={(filters: ListingFilters) => {
            const country = this.state.countries.find(
              country => country.name === filters.country
            );
            if (typeof country !== "undefined") {
              this.setState({
                newEstate: {
                  ...this.state.newEstate,
                  city_id: country.city_id
                }
              });
            }
          }}
        />

        <View style={{ height: 10 }} />

        <DeveloperSelector
          developers={this.state.developers}
          filters={this.state.filters}
          setFilters={(filters: ListingFilters) => {
            this.setState({
              newEstate: {
                ...this.state.newEstate,
                developer_id: filters.developerId
              }
            });
          }}
        />

        <View style={{ height: 10 }} />

        <View style={{ marginHorizontal: 4 }}>
          <PriceSelector
            filters={{ maxPrice: this.state.newEstate.price }}
            setFilters={(filters: ListingFilters) => {
              this.setState({
                newEstate: {
                  ...this.state.newEstate,
                  price: filters.maxPrice
                }
              });
            }}
          />
        </View>

        <View style={{ height: 10 }} />

        <Input
          containerStyle={{ paddingHorizontal: 4 }}
          inputStyle={{ paddingHorizontal: 4, fontSize: 16 }}
          value={this.state.newEstate.name || ""}
          placeholder="Name"
          onChangeText={(name: string) => {
            this.setState({
              newEstate: {
                ...this.state.newEstate,
                name
              }
            });
          }}
        />

        <View style={{ height: 20 }} />

        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center"
          }}
        >
          <Button
            containerStyle={{ width: "30%", marginHorizontal: 10 }}
            buttonStyle={{ backgroundColor: "#ff5722" }}
            onPress={() => {
              this.props.navigation.goBack();
            }}
            title={"Cancel"}
            type={"solid"}
          />
          <EstatesContext.Consumer>
            {data => (
              <Button
                containerStyle={{ width: "35%", marginHorizontal: 10 }}
                onPress={() => {
                  const validationResult = validateNewEstate(
                    this.state.newEstate
                  );
                  this.setState({ errors: validationResult.errors });
                  if (validationResult.hasErrors) {
                    return;
                  }

                  RealEstateApi.addListItem({
                    cityId: this.state.newEstate.city_id,
                    developerId: this.state.newEstate.developer_id,
                    name: this.state.newEstate.name,
                    onSale: 1,
                    lessThen: this.state.newEstate.price
                  })
                    .then(() => {
                      data.fetchEstates();
                      this.setState({
                        newEstate: {
                          name: null,
                          price: null,
                          city_id: null,
                          developer_id: null
                        },
                        filters: {
                          country: null,
                          developerId: null
                        }
                      });
                      showMessage({
                        message: "Offer was added successfuly",
                        type: "success"
                      });
                    })
                    .catch(() =>
                      showMessage({
                        message: "There was an server error",
                        type: "danger"
                      })
                    );
                }}
                title={"Add new"}
                type={"solid"}
              />
            )}
          </EstatesContext.Consumer>
        </View>
      </SafeAreaView>
    );
  }
}
