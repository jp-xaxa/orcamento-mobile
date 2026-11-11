import { Text, View } from "react-native"

import { styles } from "./styles"

import { OptionsStatus } from "@/types/OptionsStatus"

interface StatusProps {
  status: OptionsStatus
}

const statusColors: Record<
  OptionsStatus,
  { primary: string; secondary: string }
> = {
  Aprovado: { primary: "#4BB84A", secondary: "#BFF7BE" },
  Recusado: { primary: "#9E4949", secondary: "#FFD6D6" },
  Rascunho: { primary: "#676767", secondary: "#E6E5E5" },
  Enviado: { primary: "#1D7096", secondary: "#CEEFFF" },
}

export function Status({ status }: StatusProps) {
  const colors = statusColors[status]

  return (
    <View style={[styles.container, { backgroundColor: colors.secondary }]}>
      <View style={[styles.circle, { backgroundColor: colors.primary }]} />
      <Text style={[styles.title, { color: colors.primary }]}>{status}</Text>
    </View>
  )
}
