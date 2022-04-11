import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 4,
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginVertical: 1,
    width: 30,
    height: 30,
  },
  label: {
    color: "#2A333D",
    fontSize: 13,
    fontWeight: "600",
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 4,
    backgroundColor: "#F7FBFF",
    borderWidth: 0.5,
    borderColor: "#0071F3",
  },
});
