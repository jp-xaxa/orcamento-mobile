import { Text, View, FlatList } from "react-native"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"

import { StackRoutesProps } from "@/routes/StackRoutes"

import { Button } from "@/components/Button"
import { Search } from "@/components/Search"
import { BudgetCard } from "@/components/BudgetCard"

import { styles } from "./styles"

import type { BudgetCardProps } from "@/components/BudgetCard"

type Data = BudgetCardProps & {
  id: string
}

const data: Data[] = [
  {
    id: "1",
    title: "Desenvolvimento de aplicativo de loja online",
    subTitle: "Soluções Tecnológicas Beta",
    price: "22.300,00",
    status: "Aprovado",
  },
  {
    id: "2",
    title: "Consultoria em marketing digital",
    subTitle: "Marketing Wizards",
    price: "4.000,00",
    status: "Rascunho",
  },
  {
    id: "3",
    title: "Serviços de SEO",
    subTitle: "SEO Masters",
    price: "3.500,00",
    status: "Enviado",
  },
  {
    id: "4",
    title: "Criação de conteúdo",
    subTitle: "Content Creators",
    price: "2.500,00",
    status: "Recusado",
  },
  {
    id: "5",
    title: "Desenvolvimento de aplicativo de loja online",
    subTitle: "Soluções Tecnológicas Beta",
    price: "22.300,00",
    status: "Aprovado",
  },
  {
    id: "6",
    title: "Consultoria em marketing digital",
    subTitle: "Marketing Wizards",
    price: "4.000,00",
    status: "Rascunho",
  },
  {
    id: "7",
    title: "Serviços de SEO",
    subTitle: "SEO Masters",
    price: "3.500,00",
    status: "Enviado",
  },
  {
    id: "8",
    title: "Criação de conteúdo",
    subTitle: "Content Creators",
    price: "2.500,00",
    status: "Recusado",
  },
  {
    id: "9",
    title: "Desenvolvimento de aplicativo de loja online",
    subTitle: "Soluções Tecnológicas Beta",
    price: "22.300,00",
    status: "Aprovado",
  },
  {
    id: "10",
    title: "Consultoria em marketing digital",
    subTitle: "Marketing Wizards",
    price: "4.000,00",
    status: "Rascunho",
  },
  {
    id: "11",
    title: "Serviços de SEO",
    subTitle: "SEO Masters",
    price: "3.500,00",
    status: "Enviado",
  },
  {
    id: "12",
    title: "Criação de conteúdo",
    subTitle: "Content Creators",
    price: "2.500,00",
    status: "Recusado",
  },
]

export function Home({ navigation }: StackRoutesProps<"home">) {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View>
            <Text style={styles.headerTitle}>Orçamentos</Text>
            <Text style={styles.headerSubTitle}>
              Você tem 1 item em rascunho
            </Text>
          </View>
          <Button title="Novo" iconName="add" />
        </View>

        <View style={styles.content}>
          <Search />

          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={(item) => (
              <BudgetCard
                title={item.item.title}
                subTitle={item.item.subTitle}
                price={item.item.price}
                status={item.item.status}
              />
            )}
            style={styles.listContent}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
