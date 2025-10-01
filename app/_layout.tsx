
import { Slot } from "expo-router";
import { StyleSheet, View } from "react-native";
import { PaperProvider } from 'react-native-paper';
import BottomMenu from './component/BottonMenu.jsx';
import TopDropMenu from "./component/topmenu.jsx";

export default function Layout() {
  return(
    <PaperProvider>
      <View style= {styles.container}>
        <TopDropMenu />      
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
