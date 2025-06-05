import { Home } from "@/app/Home";
import { Product } from "@/app/Product";
import {
  createNativeStackNavigator,
  type NativeStackScreenProps,
} from "@react-navigation/native-stack";

//MODO#1 TIPAGEM
export type StackRoutesList = {
  home: undefined;
  product: undefined | { id: string };
};

//MODO#3 TIPAGEM
export type StackRoutesProps<T extends keyof StackRoutesList> =
  NativeStackScreenProps<StackRoutesList, T>;

const { Navigator, Screen } = createNativeStackNavigator<StackRoutesList>();

export function StackRoutes() {
  return (
    <Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="product" component={Product} />
    </Navigator>
  );
}
