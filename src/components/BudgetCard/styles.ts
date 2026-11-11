import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    gap: 12,
    flexDirection: "row",
    padding: 16,
    backgroundColor: "#F0F0F0",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#FAFAFA",
  },
  right: {
    flex: 1,
    gap: 8,
  },
  left: {
    justifyContent: "space-between",
    gap: 8,
    alignItems: "flex-end",
  },
  title: {
    color: "#0F0F0F",
    fontSize: 16,
    lineHeight: 21,
    fontFamily: "Lato_700Bold",
  },
  subTitle: {
    color: "#4A4A4A",
    fontSize: 14,
    lineHeight: 18,
    fontFamily: "Lato_400Regular",
  },
  unit: {
    color: "#0F0F0F",
    fontSize: 12,
    lineHeight: 16,
    fontFamily: "Lato_400Regular",
  },
})
