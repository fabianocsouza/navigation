import { View } from "react-native";
// import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Title } from "./components/Title";
import { Header } from "./components/Header";
import { ButtonIcon } from "./components/ButtonIcon";

// TIPAGEM       MODO#2              MODO#3
import type { StackRoutesList, StackRoutesProps } from "@/routes/StackRoutes";
import type { BottomRoutesProps } from "@/routes/BottomRoutes";
import type { DrawerRoutesProps } from "@/routes/DrawerRoutes";

// MODO#2 TIPAGEM: type Props = NativeStackScreenProps<StackRoutesList, "home">;

export function Home({ navigation }: DrawerRoutesProps<"home">) {
  return (
    <View style={{ flex: 1, padding: 32, paddingTop: 80 }}>
      <Header>
        <ButtonIcon name="menu" onPress={() => navigation.toggleDrawer()} />
        <Title>Home</Title>
        <ButtonIcon
          name="add-circle"
          onPress={() => navigation.navigate("product", { id: "7" })}
        />
      </Header>
    </View>
  );
}
