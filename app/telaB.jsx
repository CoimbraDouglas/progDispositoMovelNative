import { router } from 'expo-router';
import { useState } from 'react';
import { Text, View } from "react-native";
import { Appbar, Menu } from 'react-native-paper';

export default function Index() {
    
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}
    >

    <Appbar.Header>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={<Appbar.Action icon="menu" color="black" onPress={openMenu} />}
      >
        <Menu.Item onPress={() => router.push('/telaA')} title="Tela A" />
        <Menu.Item onPress={() => router.push('/telaB')} title="Tela B" />
        <Menu.Item onPress={() => router.push('/')} title="Index" />
      </Menu>
      <Appbar.Content title="Meu App" />
    </Appbar.Header>



      <Text>Essa é a Tela B.</Text>
    </View>
  );
}
