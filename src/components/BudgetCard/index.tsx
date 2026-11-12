import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native"

import { Status } from "../Status"

import { styles } from "./styles"

import type { OptionsStatus } from "@/types/OptionsStatus"

export type BudgetCardProps = TouchableOpacityProps & {
  title: string
  subTitle: string
  price: string
  status: OptionsStatus
}

export function BudgetCard({
  title,
  subTitle,
  status,
  price,
  ...rest
}: BudgetCardProps) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} {...rest}>
      <View style={styles.right}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>

      <View style={styles.left}>
        <Status status={status} />
        <Text style={styles.unit}>
          R$ <Text style={styles.title}>{price}</Text>
        </Text>
      </View>
    </TouchableOpacity>
  )
}
