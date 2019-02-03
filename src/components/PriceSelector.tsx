import React, { PureComponent } from "react";
import { Input } from "react-native-elements";

export default class PriceSelector extends PureComponent {
  render() {
    return (
      <Input
        containerStyle={{ width: 160 }}
        placeholder="Max Price"
        leftIcon={{ name: "dollar", type: "font-awesome" }}
        leftIconContainerStyle={{ marginRight: 10 }}
        onChangeText={text => console.log(text)}
        keyboardType={"number-pad"}
      />
    );
  }
}
