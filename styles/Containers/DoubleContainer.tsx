import { StyleSheet } from "react-native";

export const DoubleVzEqualContainer = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: "column",
  },
  TopComponent: {
    flex: 1,
  },
  BottomComponent: {
    flex: 1,
  },
});

export const DoubleVz12Container = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: "column",
  },
  TopComponent: {
    flex: 1,
  },
  BottomComponent: {
    flex: 2,
  },
});

export const DoubleVz21Container = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: "column",
  },
  TopComponent: {
    flex: 2,
  },
  BottomComponent: {
    flex: 1,
  },
});

export const DoubleHzContainer = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: "row",
  },
  LeftComponent: {
    flex: 1,
  },
  RightComponent: {
    flex: 1,
  },
});

export const DoubleHz12Container = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: "row",
  },
  LeftComponent: {
    flex: 1,
  },
  RightComponent: {
    flex: 2,
  },
});

export const DoubleHz21Container = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: "row",
  },
  LeftComponent: {
    flex: 2,
  },
  RightComponent: {
    flex: 1,
  },
});
