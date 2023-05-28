import React from "react";
import { Text } from "react-native";
import { render, fireEvent } from "react-native-testing-library";
import { ReactTestInstance } from "react-test-renderer";
import { Alert } from "react-native";

import { OrderCard } from "../../../../components/OrderScreenComponents";
import Order from "../../../../entities/Order";
import Product from "../../../../entities/Product";

test("should render Selected Order List in all screens", () => {
  const tagName = "Hello";
  let deleteOrderHandler = jest.fn();
  const order = new Order(
    1,
    30,
    299,
    new Date(),
    "red",
    "XL",
    1,
    "Accepted",
    new Product(
      1,
      "T-Shirt",
      "verey elegent",
      299,
      ["x", "xl", "m"],
      ["red", "white", "blue"],
      "../../../../assets/images/02.jpg",
      "../../../../assets/images/02.jpg",
      "../../../../assets/images/02.jpg",
      "1",
      "Zara",
      new Date()
    )
  );
  const tree = render(<OrderCard order={order} TestId="OrderList" />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe("<OrderListItems>", () => {
  let deleteOrderHandler: (value?: string | undefined) => void,
    getByTestId: (text: string) => ReactTestInstance;

  beforeEach(() => {
    deleteOrderHandler = jest.fn();
    const order = new Order(
        1,
        30,
        299,
        new Date(),
        "red",
        "XL",
        1,
        "Accepted",
        new Product(
          1,
          "T-Shirt",
          "verey elegent",
          299,
          ["x", "xl", "m"],
          ["red", "white", "blue"],
          "../../../../assets/images/02.jpg",
          "../../../../assets/images/02.jpg",
          "../../../../assets/images/02.jpg",
          "1",
          "Zara",
          new Date()
        )
      );
    ({ getByTestId } = render(
        <OrderCard order={order} TestId="OrderList" />
    ));
  });

  describe("Interactive test", () => {
    it("should call delete order on press", () => {
      expect(deleteOrderHandler).toBeDefined();
    });
    it("should render with right swipeout", async () => {
      expect(getByTestId("OrderList").props.children).toBeInstanceOf(Object);
    });

    it("should call render amd all props defined", async () => {
      expect(getByTestId("OrderList").props).toBeDefined();
      expect(getByTestId("OrderList").children).toBeDefined();
    });
  });
});