import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

import { styles } from "./styles"

type Props = TouchableOpacityProps & {
  title: string
  iconName?: keyof typeof MaterialIcons.glyphMap
  type?: "secondary"
}

export function Button({ title, iconName, type, ...rest }: Props) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        type === "secondary"
          ? {
              backgroundColor: "#FAFAFA",
              borderWidth: 1,
              borderColor: "#E6E5E5",
            }
          : { backgroundColor: "#6A46EB" },
      ]}
      activeOpacity={0.8}
      {...rest}
    >
      {iconName && (
        <MaterialIcons
          name={iconName}
          style={[
            styles.icon,
            type === "secondary"
              ? {
                  color: "#6A46EB",
                }
              : { color: "#FFFFFF" },
          ]}
        />
      )}
      <Text
        style={[
          styles.title,
          type === "secondary"
            ? {
                color: "#6A46EB",
              }
            : { color: "#FFFFFF" },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}
