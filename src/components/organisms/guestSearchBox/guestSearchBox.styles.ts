import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#FFF",
    borderRadius: 8,
  },
  shadowProperty: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 7,
    elevation: 8,
  },
  searchBar: { marginBottom: 8 },
  checkInDetails: {
    marginBottom: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  datePicker: { flex: 0.8 },
  guestBox: {
    flex: 0.2,
    paddingLeft: 8,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  button: {},
});
