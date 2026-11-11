import { TouchableOpacity, TouchableOpacityProps } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

import { styles } from "./styles"

type Props = TouchableOpacityProps & {
  iconName: keyof typeof MaterialIcons.glyphMap
}

export function ButtonIcon({ iconName, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8} {...rest}>
      <MaterialIcons name={iconName} style={styles.icon} />
    </TouchableOpacity>
  )
}
