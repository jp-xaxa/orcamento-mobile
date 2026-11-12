import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack"

import { Home } from "@/app/Home"
import { BudgetNew } from "@/app/BudgetNew"
import { DetailedBudget } from "@/app/DetailedBudget"

export type StackRoutesList = {
  home: undefined
  "budget-new": undefined
  "detailed-budget": { id: string } 
}

export type StackRoutesProps<T extends keyof StackRoutesList> =
  NativeStackScreenProps<StackRoutesList, T>

const Stack = createNativeStackNavigator<StackRoutesList>()

export function StackRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="budget-new" component={BudgetNew} />
      <Stack.Screen name="detailed-budget" component={DetailedBudget} />
    </Stack.Navigator>
  )
}
