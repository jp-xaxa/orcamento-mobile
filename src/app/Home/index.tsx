import { Text, View, TouchableOpacity } from "react-native"

import { StackRoutesProps } from "@/routes/StackRoutes"

import { styles } from "./styles"

export function Home({ navigation }: StackRoutesProps<"home">) {
  return (
    <View style={styles.container}>
      <Text>Home</Text>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={() => navigation.navigate("budget-new")}
      >
        <Text style={styles.buttonText}>Orçamento Novo</Text>
      </TouchableOpacity>
    </View>
  )
}
