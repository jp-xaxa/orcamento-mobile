import { View, TouchableOpacity, Text, ScrollView } from "react-native"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import { MaterialIcons } from "@expo/vector-icons"

import { StackRoutesProps } from "@/routes/StackRoutes"

import { Status } from "@/components/Status"
import { InfosCard } from "@/components/InfosCard"
import { ServiceItem } from "@/components/ServiceItem"
import { IconCard } from "@/components/IconCard"
import { ButtonIcon } from "@/components/ButtonIcon"
import { Button } from "@/components/Button"

import { styles } from "./styles"

export function DetailedBudget({
  navigation,
  route,
}: StackRoutesProps<"detailed-budget">) {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerBack}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialIcons
                name="arrow-back-ios"
                style={styles.headerButton}
              />
            </TouchableOpacity>

            <Text style={styles.headerTitle}>Orçamento #{route.params.id}</Text>
          </View>

          <Status status="Enviado" />
        </View>

        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.content}
        >
          <View style={styles.infosClient}>
            <View style={styles.infosClientHeader}>
              <IconCard iconName="store" />

              <Text style={styles.infosClientHeaderTitle}>
                Desenvolvimento de aplicativo de loja online
              </Text>
            </View>

            <View style={styles.infosClientFooter}>
              <View>
                <Text style={styles.infosClientFooterSubTitle}>Cliente</Text>

                <Text style={styles.infosClientFooterTitle}>
                  Soluções Tecnológicas Beta
                </Text>
              </View>

              <View style={styles.infosClientFooterRow}>
                <View style={styles.infosClientFooterRowRightAndLeft}>
                  <Text style={styles.infosClientFooterSubTitle}>
                    Criado em
                  </Text>

                  <Text style={styles.infosClientFooterTitle}>22/08/2024</Text>
                </View>

                <View style={styles.infosClientFooterRowRightAndLeft}>
                  <Text style={styles.infosClientFooterSubTitle}>
                    Atualizado em
                  </Text>

                  <Text style={styles.infosClientFooterTitle}>25/08/2024</Text>
                </View>
              </View>
            </View>
          </View>

          <InfosCard title="Serviços Inclusos" iconName="sticky-note-2">
            <View style={styles.servicesIncludedCard}>
              <ServiceItem
                title="Design de interfaces"
                subTitle="Criação de wireframes e protótipos de alta fidelidade"
                price="3.847,50"
                quantity="1"
              />

              <ServiceItem
                title="Desenvolvimento front-end"
                subTitle="Criação de interfaces de usuário interativas"
                price="3.847,50"
                quantity="1"
              />

              <ServiceItem
                title="Desenvolvimento back-end"
                subTitle="Implementação de servidor, banco de dados e APIs"
                price="3.847,50"
                quantity="1"
              />

              <ServiceItem
                title="Implantação e suporte"
                subTitle="Publicação nas lojas de aplicativos e suporte técnico"
                price="3.847,50"
                quantity="1"
              />
            </View>
          </InfosCard>

          <View style={styles.infosMoney}>
            <IconCard iconName="account-balance-wallet" />

            <View style={{ gap: 8, flex: 1 }}>
              <View>
                <View style={styles.infosMoneyRow}>
                  <Text style={styles.infosMoneySubTitle}>Subtotal</Text>

                  <Text
                    style={{
                      fontSize: 12,
                      color: "#4A4A4A",
                      fontFamily: "Lato_700Bold",
                    }}
                  >
                    R$ 4.050,00
                  </Text>
                </View>

                <View style={styles.infosMoneyRow}>
                  <Text style={styles.infosMoneySubTitle}>Subtotal</Text>

                  <Text
                    style={{
                      fontSize: 12,
                      color: "#30752F",
                      fontFamily: "Lato_700Bold",
                    }}
                  >
                    R$ 200,00
                  </Text>
                </View>
              </View>

              <View
                style={{ borderBottomWidth: 1, borderColor: "#E6E5E5" }}
              ></View>

              <View style={styles.infosMoneyRow}>
                <Text style={styles.infosMoneyTitle}>Investimento total</Text>

                <View style={styles.infosMoneyRow}>
                  <Text>R$</Text>
                  <Text style={styles.infosMoneyTitle}>3.847,50</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <View style={styles.optionsIcons}>
            <ButtonIcon iconName="delete" type="secondary" />
            <ButtonIcon iconName="content-copy" />
            <ButtonIcon iconName="border-color" />
          </View>
          <Button title="Compartilhar" iconName="share" />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
