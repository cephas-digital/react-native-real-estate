import React from "react";
import { validateNewEstate } from "../../../src/service/Validators";
import renderer from "react-test-renderer";

test("renders correctly", () => {
  const validationResult = validateNewEstate({
    name: null,
    price: null,
    city_id: null,
    developer_id: null
  });

  expect(validationResult.hasErrors).toBeTruthy();
  const tree = renderer.create(validationResult.errors).toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders single error", () => {
  const validationResult = validateNewEstate({
    name: "test estate",
    price: 15000,
    city_id: 12,
    developer_id: null
  });

  expect(validationResult.hasErrors).toBeTruthy();
  const tree = renderer.create(validationResult.errors).toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders price error", () => {
  const validationResult = validateNewEstate({
    name: "test estate",
    price: "sdfsd",
    city_id: 12,
    developer_id: 32
  });

  expect(validationResult.hasErrors).toBeTruthy();
  const tree = renderer.create(validationResult.errors).toJSON();
  expect(tree).toMatchSnapshot();
});

test("no errors", () => {
  const validationResult = validateNewEstate({
    name: "test estate",
    price: 1400,
    city_id: 12,
    developer_id: 32
  });

  expect(validationResult.hasErrors).toBeFalsy();
  const tree = renderer.create(validationResult.errors).toJSON();
  expect(tree).toMatchSnapshot();
});
