import { View } from "react-native"

import { ButtonIcon } from "../ButtonIcon"
import { Input } from "../Input"

import { styles } from "./styles"

export function Search() {
  return (
    <View style={styles.container}>
      <Input title="Título ou cliente" iconName="search"/>
      <ButtonIcon iconName="tune" />
    </View>
  )
}
