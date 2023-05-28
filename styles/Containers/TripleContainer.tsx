import { StyleSheet } from "react-native";

export const TripleVzEqualContainer = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: "column",
  },
  TopComponent: {
    flex: 1,
  },
  MiddleComponent: {
    flex: 1,
  },
  BottomComponent: {
    flex: 1,
  },
});

export const TripleVz123Container = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: "column",
  },
  TopComponent: {
    flex: 1,
  },
  MiddleComponent: {
    flex: 2,
  },
  BottomComponent: {
    flex: 3,
  },
});

export const TripleVz131Container = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: "column",
  },
  TopComponent: {
    flex: 1,
  },
  MiddleComponent: {
    flex: 3,
  },
  BottomComponent: {
    flex: 1,
  },
});


export const TripleHzEqualContainer = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: "row",
  },
  LeftComponent: {
    flex: 1,
  },
  MiddleComponent: {
    flex: 1,
  },
  RightComponent: {
    flex: 1,
  },
});

export const TripleHz123Container = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: "row",
  },
  LeftComponent: {
    flex: 1,
  },
  MiddleComponent: {
    flex: 2,
  },
  RightComponent: {
    flex: 3,
  },
});

export const TripleHz132Container = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: "row",
  },
  LeftComponent: {
    flex: 1,
  },
  MiddleComponent: {
    flex: 3,
  },
  RightComponent: {
    flex: 2,
  },
});
