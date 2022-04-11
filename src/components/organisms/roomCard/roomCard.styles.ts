import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginBottom: 16,
    borderBottomColor: "#EFF2F6",
    borderBottomWidth: 1.5,
  },
  title: {
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleText: { fontWeight: "600", fontSize: 16 ,color:"#2A333D"},
  removeText: {
    fontWeight: "600",
    fontSize: 14,
    color: "#D83B3B",
    paddingHorizontal: 8,
  },
});
