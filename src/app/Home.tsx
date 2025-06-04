import { View } from "react-native";

import { Title } from "./components/Title";
import { Header } from "./components/Header";
import { ButtonIcon } from "./components/ButtonIcon";

export function Home() {
  return (
    <View style={{ flex: 1, padding: 32, paddingTop: 80 }}>
      <Header>
        <Title>Home</Title>
        <ButtonIcon name="add-circle" />
      </Header>
    </View>
  );
}
