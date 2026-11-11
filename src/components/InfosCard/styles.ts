import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E6E5E5",
  },
  header: {
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 16,
    gap: 8,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#E6E5E5",
  },
  headerTitle: {
    color: "#676767",
    fontSize: 12,
    lineHeight: 16,
    fontFamily: "Lato_400Regular",
  },
  headerIcon: {
    color: "#6A46EB",
    fontSize: 14,
  },
})
