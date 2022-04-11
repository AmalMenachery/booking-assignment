import { StyleSheet } from "react-native";

export default StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: "4%",
    marginVertical: 4,
    borderRadius: 8,
    backgroundColor: "#0077FF",
  },
  label: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 18,
  },
  textContainer: {
    maxWidth: "80%",
  },
  iconContainer: {
    maxWidth: "20%",
    marginRight: 4,
  },
});
