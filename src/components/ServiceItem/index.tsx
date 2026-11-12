import { View, Text, TouchableOpacity } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

import { styles } from "./styles"

interface ServiceItem {
  title: string
  subTitle: string
  price: string
  quantity: string
  edit?: boolean
}

export function ServiceItem({
  title,
  subTitle,
  price,
  quantity,
  edit = false,
}: ServiceItem) {
  function handleLimitText(text: string): string {
    if (text.length > 31) {
      return text.slice(0, 31) + "..."
    }
    return text
  }

  return (
    <View style={styles.container}>
      <View style={styles.right}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>
          {edit ? handleLimitText(subTitle) : subTitle}
        </Text>
      </View>

      <View style={styles.left}>
        <Text style={styles.unitMoney}>
          R$ <Text style={styles.titleMoney}>{price}</Text>
        </Text>
        <Text style={styles.quantity}>Qt: {quantity}</Text>
      </View>

      {edit && (
        <TouchableOpacity>
          <MaterialIcons name="border-color" style={styles.editIcon} />
        </TouchableOpacity>
      )}
    </View>
  )
}
