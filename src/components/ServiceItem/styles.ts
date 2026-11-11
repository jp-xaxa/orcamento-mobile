import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    gap: 12,
    flexDirection: "row",
    alignItems: "center",
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
    fontSize: 14,
    lineHeight: 18,
    fontFamily: "Lato_700Bold",
  },
  subTitle: {
    color: "#4A4A4A",
    fontSize: 12,
    lineHeight: 16,
    fontFamily: "Lato_400Regular",
  },
  titleMoney: {
    color: "#0F0F0F",
    fontSize: 16,
    lineHeight: 22,
    fontFamily: "Lato_700Bold",
  },
  unitMoney: {
    color: "#0F0F0F",
    fontSize: 12,
    lineHeight: 16,
    fontFamily: "Lato_400Regular",
  },
  quantity: {
    color: "#4A4A4A",
    fontSize: 12,
    lineHeight: 16,
    fontFamily: "Lato_400Regular",
  },
  editIcon: {
    fontSize: 20,
    color: "#6A46EB",
  },
})
