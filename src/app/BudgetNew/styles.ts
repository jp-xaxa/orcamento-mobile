import { BackHandler, StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
  header: {
    width: "100%",
    padding: 20,
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  headerTitle: {
    fontSize: 14,
    fontFamily: "Lato_700Bold",
    color: "#0F0F0F",
    lineHeight: 18,
  },
  headerButton: {
    fontSize: 24,
    color: "#4A4A4A",
  },
  scroll: {
    flex: 1,
  },
  content: {
    padding: 20,
    gap: 24,
  },
  generalInformationCard: {
    padding: 16,
    gap: 12,
  },
  statusCard: {
    padding: 16,
    gap: 12,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  servicesIncludedCard: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    gap: 20,
  },
  newServiceButton: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E6E5E5",
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#FAFAFA",
    paddingVertical: 12,
  },
  newServiceButtonIcon: {
    fontSize: 24,
    color: "#6A46EB",
  },
  newServiceButtonText: {
    fontSize: 14,
    fontFamily: "Lato_700Bold",
    color: "#6A46EB",
    lineHeight: 18,
  },
  investCardResume: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    gap: 20,
  },
  investCardResumeTitle: {
    fontSize: 14,
    fontFamily: "Lato_400Regular",
    color: "#0F0F0F",
    lineHeight: 18,
  },
  investCardResumeSubTitle: {
    fontSize: 12,
    fontFamily: "Lato_400Regular",
    color: "#4A4A4A",
    lineHeight: 16,
  },
  investCardTitleDiscount: {
    fontSize: 14,
    fontFamily: "Lato_400Regular",
    color: "#DB4D4D",
    lineHeight: 18,
  },
  investCardTotal: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    gap: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  containerDiscount: {
    minHeight: 32,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    gap: 8,
    padding: 4,
    backgroundColor: "#E6E5E5",
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#FAFAFA",
  },
  discount: {
    color: "#0F0F0F",
    fontSize: 16,
  },
  discountIcon: {
    color: "#0F0F0F",
    fontSize: 16,
  },
  footer: {
    gap: 16,
    borderTopWidth: 1,
    borderTopColor: "#F0F0F0",
    justifyContent: "center",
    paddingTop: 20,
  },
})
