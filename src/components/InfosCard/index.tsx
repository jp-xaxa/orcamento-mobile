import { View, Text } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import type { ReactNode } from "react"

import { styles } from "./styles"

interface InfosCardProps {
  title: string
  iconName: keyof typeof MaterialIcons.glyphMap
  children: ReactNode
}

export function InfosCard({ title, iconName, children }: InfosCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name={iconName} style={styles.headerIcon} />
        <Text style={styles.headerTitle}>{title}</Text>
      </View>

      <View>{children}</View>
    </View>
  )
}
