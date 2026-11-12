import { View } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

import { styles } from "./styles"

interface IconCardProps {
  iconName: keyof typeof MaterialIcons.glyphMap
}

export function IconCard({ iconName }: IconCardProps) {
  return (
    <View style={styles.container}>
      <MaterialIcons name={iconName} style={styles.icon} />
    </View>
  )
}
