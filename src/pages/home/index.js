import React, { useEffect } from 'react'
import { View, StatusBar, StyleSheet, Linking, ToastAndroid, ScrollView, BackHandler, Alert} from 'react-native'
import Header from "./Header"
import Skill from './Skill'
import Why from './Why'
import Menu from './Menu'
import ListYoutube from './ListYoutube'
import SwiperList from './SwiperList'
import Tanggal from './Date'

export default function Home({ navigation }) {

  // useEffect(() => {
  //   const backHandler = BackHandler.addEventListener("hardwareBackPress", onBackPress)
  //   return () => backHandler.remove()
  // }, [])
  
  const onBackPress = () => {
    Alert.alert(
      'Exit From App',
      'Do you want to exit from app ?',
      [
        { text: 'Yes', onPress: () => BackHandler.exitApp() },
        { text: 'No', onPress: () => ToastAndroid.show("Exit from app cancled", ToastAndroid.SHORT) }
      ],
      { cancelable: false },
    );
    return true;
  }

  const openUrl = async(url) => {
    try {
      await Linking.openURL(url)
    } catch (error) {
      ToastAndroid.show(`Don't supported to open this url : ${url}`, ToastAndroid.LONG)
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header open={() => navigation.openDrawer()} onClick={() => openUrl("https://pendaftaran.pesantrenit.com/form-register1")} />
        <Tanggal kiblat={() => navigation.navigate('Compass')} />
        <Menu sholat={() => navigation.navigate("Sholat")} />
        <ListYoutube subs={() => openUrl("https://www.youtube.com/channel/UCgVkipz_0i-rBDHzQjnO0og/featured")} />
        <SwiperList/>
        <Why/>
        <Skill/>
        <View style={styles.foot} />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { display: "flex", flex: 1, backgroundColor: "#F5F5F5" },
  foot: { marginTop: 25 }
})