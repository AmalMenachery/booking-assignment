import { StyleSheet } from "react-native";

export default StyleSheet.create({
  countContainer: { flex: 1, flexDirection: "row", alignItems: "center" },
  label: { flex: 0.5, color: "#2A333D" },
  counterView: {
    flex: 0.5,
    justifyContent: "flex-start",
    alignItems: "flex-end",
    paddingVertical: 4,
  },
  childAgeView: {
    marginLeft: 8,
    borderLeftColor: "#EFF2F6",
    borderLeftWidth: 1.5,
  },
});
