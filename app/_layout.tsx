
import { Slot } from "expo-router";
import { StyleSheet, View } from "react-native";
import {PaperProvider} from 'react-native-paper';
import menu from './component/topmenu.jsx';
import BottomMenu from './component/buttonMenu.jsx';

export default function Layout() {
  return(
    <PaperProvider>
      <View style= {styles.container}>
        <menu />
        <Slot />
        <BottomMenu />
      </View>  
    </PaperProvider>
  );
}

// versão atualizada
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff'
  }
});
