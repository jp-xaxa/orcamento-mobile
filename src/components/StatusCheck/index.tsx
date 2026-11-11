import { Pressable, PressableProps, View } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

import { Status } from "../Status"

import { styles } from "./styles"

import type { OptionsStatus } from "@/types/OptionsStatus"

type StatusCheckProps = PressableProps & {
  status: OptionsStatus
  typeBox: "circle" | "square"
  check?: boolean
}

export function StatusCheck({
  status,
  typeBox,
  check = false,
  ...rest
}: StatusCheckProps) {
  return (
    <Pressable
      style={styles.container}
      accessibilityRole="radio"
      accessibilityState={{ checked: check }}
      {...rest}
    >
      <View
        style={[
          styles.checkbox,
          check && styles.checkboxChecked,
          { borderRadius: typeBox === "circle" ? 999 : 6 },
        ]}
      >
        {check && typeBox === "circle" && <View style={styles.dot} />}

        {check && typeBox === "square" && (
          <MaterialIcons name="check" style={styles.icon} />
        )}
      </View>

      <Status status={status} />
    </Pressable>
  )
}
