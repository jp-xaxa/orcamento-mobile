import { View, TextInput, TextInputProps } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

import { styles } from "./styles"

interface InputProps extends TextInputProps {
  title: string
  iconName?: keyof typeof MaterialIcons.glyphMap
}

export function Input({ title, iconName, ...rest }: InputProps) {
  return (
    <View style={styles.container}>
      {iconName && <MaterialIcons name={iconName} style={styles.searchIcon} />}

      <TextInput
        style={styles.search}
        placeholder={title}
        placeholderTextColor="#676767"
        {...rest}
      />
    </View>
  )
}
