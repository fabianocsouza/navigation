import { NavigationContainer } from "@react-navigation/native";
import { DrawerRoutes } from "./DrawerRoutes";
// import { StackRoutes } from "./StackRoutes";
// import { BottomRoutes } from "./BottomRoutes";

export function Routes() {
  return (
    <NavigationContainer>
      <DrawerRoutes />
    </NavigationContainer>
  );
}
