import { View, Text } from "react-native"

import { Status } from "../Status"

import { styles } from "./styles"

import type { OptionsStatus } from "@/types/OptionsStatus"

export interface BudgetCardProps {
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
}: BudgetCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.right}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>

      <View style={styles.left}>
        <Status status={status}/>
        <Text style={styles.unit}>
          R$ <Text style={styles.title}>{price}</Text>
        </Text>
      </View>
    </View>
  )
}
