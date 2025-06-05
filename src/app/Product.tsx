import { View } from "react-native";
// import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

import { Title } from "./components/Title";
import { Header } from "./components/Header";
import { ButtonIcon } from "./components/ButtonIcon";

import type { StackRoutesProps } from "@/routes/StackRoutes";
import type { BottomRoutesProps } from "@/routes/BottomRoutes";
import type { DrawerRoutesProps } from "@/routes/DrawerRoutes";

type RoutesParams = DrawerRoutesProps<"product">;

/* MODO#2 TIPAGEM USANDO HOOK DE ROTA
 * type RoutesParams = StackRoutesProps<"product">;
 *
 * MODO#1  PASSANDO PARÂMETRO PELA ROTA
 *  Usando `route` por parâmetro na função da screen
 */
export function Product({ navigation, route }: DrawerRoutesProps<"product">) {
  // MODO#2  USANDO HOOK
  const { params } = useRoute<RoutesParams["route"]>();
  //MODO#1 TIPAGEM const navigation = useNavigation();
  return (
    <View style={{ flex: 1, padding: 32, paddingTop: 80 }}>
      <Header>
        <ButtonIcon
          name="arrow-circle-left"
          onPress={() => navigation.goBack()}
        />
        {/* MODO#1 <Title>Product {route.params?.id}</Title> */}
        <Title>Product {params?.id}</Title>
      </Header>
    </View>
  );
}
