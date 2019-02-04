import { View, Text } from "react-native";
import React, { Fragment } from "react";
import { NewEstate } from "../interfaces";

export const validateNewEstate = (newEstate: NewEstate) => {
  let hasErrors = false;
  const errors: Array<Element> = [];
  const errorMessages = [];
  const { city_id, developer_id, price, name } = newEstate;

  if (city_id === null || !Number.isInteger(city_id)) {
    hasErrors = true;
    errorMessages.push("Selected country is invalid!");
  }

  if (
    developer_id === null ||
    typeof developer_id === "undefined" ||
    !Number.isInteger(developer_id)
  ) {
    hasErrors = true;
    errorMessages.push("Selected developer is invalid!");
  }

  if (
    price === null ||
    typeof price === "undefined" ||
    !Number.isInteger(price)
  ) {
    hasErrors = true;
    errorMessages.push("Provided price is invalid!");
  }

  if (name === null || name.length < 1) {
    hasErrors = true;
    errorMessages.push("Provided name is invalid!");
  }

  errorMessages.forEach((errorMessage, index) => {
    errors.push(
      <View
        key={index}
        style={{
          backgroundColor: "#ff5722",
          marginVertical: 4,
          borderRadius: 4,
          borderWidth: 1,
          borderColor: "#ff5722"
        }}
      >
        <Text style={{ color: "#fff", padding: 4 }}>{errorMessage}</Text>
      </View>
    );
  });

  return { hasErrors, errors: <Fragment>{errors}</Fragment> };
};
