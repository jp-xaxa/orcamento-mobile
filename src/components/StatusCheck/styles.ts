import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    width: "48%",
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: "#A1A2A1",
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxChecked: {
    backgroundColor: "#6A46EB",
    borderColor: "#6A46EB",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 999,
    backgroundColor: "#FFFFFF",
  },
  icon: {
    color: "#FFFFFF",
    fontSize: 16,
    alignItems: "center",
    justifyContent: "center",
  },
})
