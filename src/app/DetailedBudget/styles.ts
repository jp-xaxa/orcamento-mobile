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
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  headerBack: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
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
  infosClient: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E6E5E5",
  },
  infosClientHeader: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: "#E6E5E5",
    flexDirection: "row",
    gap: 12,
  },
  infosClientHeaderTitle: {
    flex: 1,
    fontSize: 18,
    fontFamily: "Lato_700Bold",
    color: "#0F0F0F",
    lineHeight: 24,
  },
  infosClientFooter: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    gap: 12,
  },
  infosClientFooterTitle: {
    fontSize: 14,
    fontFamily: "Lato_400Regular",
    color: "#0F0F0F",
    lineHeight: 18,
  },
  infosClientFooterSubTitle: {
    fontSize: 12,
    fontFamily: "Lato_400Regular",
    color: "#4A4A4A",
    lineHeight: 16,
  },
  infosClientFooterRow: {
    flexDirection: "row",
    gap: 12,
  },
  infosClientFooterRowRightAndLeft: {
    width: "48%",
  },
  servicesIncludedCard: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    gap: 20,
  },
  infosMoney: {
    flex: 1,
    padding: 16,
    gap: 16,
    flexDirection: "row",
    alignItems: "flex-start",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E6E5E5",
  },
  infosMoneyRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  infosMoneyTitle: {
    fontSize: 14,
    fontFamily: "Lato_700Bold",
    color: "#0F0F0F",
    lineHeight: 18,
  },
  infosMoneySubTitle: {
    fontSize: 14,
    fontFamily: "Lato_400Regular",
    color: "#4A4A4A",
    lineHeight: 18,
  },
  footer: {
    gap: "auto",
    paddingTop: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  optionsIcons: {
    gap: 8,
    flexDirection: "row",
  },
})
