import { Text, View, TouchableOpacity } from "react-native"

import { StackRoutesProps } from "@/routes/StackRoutes"

import { styles } from "./styles"

export function BudgetNew({ navigation }: StackRoutesProps<"budget-new">) {
  return (
    <View style={styles.container}>
      <Text>BudgetNew</Text>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
    </View>
  )
}
