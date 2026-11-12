import { TouchableOpacity, TouchableOpacityProps } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

import { styles } from "./styles"

type Props = TouchableOpacityProps & {
  iconName: keyof typeof MaterialIcons.glyphMap
  type?: "secondary"
}

export function ButtonIcon({ iconName, type, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8} {...rest}>
      <MaterialIcons
        name={iconName}
        style={[
          styles.icon,
          type === "secondary"
            ? {
                color: "#DB4D4D",
              }
            : { color: "#6A46EB" },
        ]}
      />
    </TouchableOpacity>
  )
}
