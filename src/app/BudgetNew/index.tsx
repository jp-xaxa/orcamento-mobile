import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import { MaterialIcons } from "@expo/vector-icons"

import { StackRoutesProps } from "@/routes/StackRoutes"

import { InfosCard } from "@/components/InfosCard"
import { Input } from "@/components/Input"
import { StatusCheck } from "@/components/StatusCheck"
import { ServiceItem } from "@/components/ServiceItem"
import { Button } from "@/components/Button"

import { styles } from "./styles"

export function BudgetNew({ navigation }: StackRoutesProps<"budget-new">) {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back-ios" style={styles.headerButton} />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Orçamento</Text>
        </View>

        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.content}
        >
          <InfosCard title="Informações gerais" iconName="store">
            <View style={styles.generalInformationCard}>
              <Input title="Título" />
              <Input title="Cliente" />
            </View>
          </InfosCard>

          <InfosCard title="Status" iconName="sell">
            <View style={styles.statusCard}>
              <StatusCheck status="Rascunho" typeBox="circle" />
              <StatusCheck status="Aprovado" typeBox="circle" />
              <StatusCheck status="Enviado" typeBox="circle" />
              <StatusCheck status="Recusado" typeBox="circle" />
            </View>
          </InfosCard>

          <InfosCard title="Serviços Inclusos" iconName="sticky-note-2">
            <View style={styles.servicesIncludedCard}>
              <ServiceItem
                title="Design de interfaces"
                subTitle="Criação de wireframes e protótipos de alta fidelidade"
                price="3.847,50"
                quantity="1"
                edit
              />

              <ServiceItem
                title="Implantação e suporte"
                subTitle="Publicação nas lojas de aplicativos e suporte técnico"
                price="3.847,50"
                quantity="1"
                edit
              />

              <TouchableOpacity style={styles.newServiceButton}>
                <MaterialIcons name="add" style={styles.newServiceButtonIcon} />
                <Text style={styles.newServiceButtonText}>
                  Adicionar serviço
                </Text>
              </TouchableOpacity>
            </View>
          </InfosCard>

          <InfosCard title="Investimento" iconName="account-balance-wallet">
            <View style={styles.investCardResume}>
              <View style={[styles.row, { justifyContent: "space-between" }]}>
                <Text style={styles.investCardResumeTitle}>Subtotal</Text>

                <View style={[styles.row, { gap: 12 }]}>
                  <Text style={styles.investCardResumeSubTitle}>8 itens</Text>

                  <Text style={styles.investCardResumeTitle}>R$ 3.847,50</Text>
                </View>
              </View>

              <View style={[styles.row, { justifyContent: "space-between" }]}>
                <View style={[styles.row, { gap: 8 }]}>
                  <Text style={styles.investCardResumeTitle}>Desconto </Text>

                  <View style={styles.containerDiscount}>
                    <TextInput
                      keyboardType="number-pad"
                      style={styles.discount}
                      placeholder="0"
                    />

                    <MaterialIcons name="percent" style={styles.discountIcon} />
                  </View>
                </View>

                <Text style={styles.investCardTitleDiscount}>- R$ 200,00</Text>
              </View>
            </View>

            <View style={styles.investCardResume}></View>
          </InfosCard>
        </ScrollView>

        <View style={[styles.row, styles.footer]}>
          <Button
            title="Cancelar"
            type="secondary"
            onPress={() => navigation.goBack()}
          />

          <Button iconName="check" title="Salvar" />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
