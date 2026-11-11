import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

import { styles } from "./styles"

type Props = TouchableOpacityProps & {
  title: string
  iconName: keyof typeof MaterialIcons.glyphMap
}

export function Button({ title, iconName, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8} {...rest}>
      <MaterialIcons name={iconName} style={styles.icon}/>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}
