import { StyleSheet } from "react-native";

export default StyleSheet.create({
  countContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 16,
  },
  label: { flex: 0.5 },
  counterView: {
    flex: 0.4,
    justifyContent: "flex-start",
    alignItems: "flex-end",
    paddingVertical: 4,
  },
  dropdown4BtnStyle: {
    width: "63%",
    height: 35,
    borderRadius: 8,
    backgroundColor: "#FFF",
    borderWidth: 0.5,
    borderColor: "#0071F3",
  },
  dropdown4BtnTxtStyle: { color: "#0071F3", textAlign: "left" },
  dropdown4DropdownStyle: { backgroundColor: "#EFEFEF" },
  dropdown4RowStyle: {
    backgroundColor: "#EFEFEF",
    borderBottomColor: "#C5C5C5",
  },
  dropdown4RowTxtStyle: { color: "#0071F3", textAlign: "left" },
  closeIcon: { flex: 0.1, paddingRight: 4 },
});
