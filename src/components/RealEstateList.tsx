import React, { Component } from "react";
import { ScrollView, Text, StyleSheet, FlatList, View } from "react-native";
import { ListItem, Badge } from "react-native-elements";
import { Estate, OnSale } from "../interfaces";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

interface MyProps {
  estates: Array<Estate>;
}

export default class RealEstateList extends Component<MyProps> {
  render() {
    return (
      <ScrollView style={{ backgroundColor: "#FFFFFF", flex: 1 }}>
        <FlatList
          data={this.props.estates.filter((estate: Estate) => {
            if (estate.hidden) {
              return false;
            }

            return true;
          })}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }: { item: Estate }) => (
            <ListItem
              key={item.id}
              title={
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ marginRight: 10 }}>{item.name}</Text>
                  <Badge
                    value={`$${item.price}`}
                    status={"success"}
                    badgeStyle={{ padding: 5 }}
                  />
                </View>
              }
              subtitle={`Country: ${item.city.country}, Developer: ${
                item.developer.name
              }`}
              rightTitle={
                item.isOnSale == OnSale.Yes ? "On Sale" : "Not On Sale"
              }
            />
          )}
        />
      </ScrollView>
    );
  }
}
