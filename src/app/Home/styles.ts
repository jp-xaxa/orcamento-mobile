import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
  header: {
    width: "100%",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: "Lato_700Bold",
    color: "#6A46EB",
    lineHeight: 24,
  },
  headerSubTitle: {
    fontSize: 14,
    fontFamily: "Lato_400Regular",
    color: "#676767",
    lineHeight: 18,
  },
  content: {
    paddingVertical: 24,
    paddingHorizontal: 20,
    gap: 24,
    flex: 1,
  },
  listContent: {
    gap: 24,
  },
})
