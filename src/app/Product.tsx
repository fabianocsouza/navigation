import { View } from "react-native";

import { Title } from "./components/Title";
import { Header } from "./components/Header";
import { ButtonIcon } from "./components/ButtonIcon";

export function Product() {
  return (
    <View style={{ flex: 1, padding: 32, paddingTop: 80 }}>
      <Header>
        <ButtonIcon name="arrow-circle-left" />
        <Title>Product</Title>
      </Header>
    </View>
  );
}
