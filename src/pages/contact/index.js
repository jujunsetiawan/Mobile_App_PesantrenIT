import React from 'react'
import { View, Text, StyleSheet, ScrollView, Linking, ToastAndroid } from 'react-native'
import Header from '../../components/Header'
import Kontak from './Contact'

export default function Contact({ navigation }) {
    const openUrl = async(url) => {
        try {
          await Linking.openURL(url)
        } catch (error) {
          ToastAndroid.show(`Don't supported to open this url : ${url}`, ToastAndroid.LONG)
        }
      }

  return (
    <View style={styles.container}>
      <Header open={() => navigation.openDrawer()} title="Contact" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Kontak bapak={() => openUrl(`whatsapp://send?phone=6281548004800`)} akhwat={() => openUrl(`whatsapp://send?phone=6281558005800`)} ikhwan={() => openUrl(`whatsapp://send?phone=628155005800`)} web={() => openUrl("https://pesantrenit.com/")} facebook={() => openUrl("https://www.facebook.com/pesantrenitindonesia")} instagram={() => openUrl("https://www.instagram.com/pesantrenit.id/")} youtube={() => openUrl("https://www.youtube.com/channel/UCgVkipz_0i-rBDHzQjnO0og/featured")} />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: { display: "flex", flex: 1, backgroundColor: "#F3F3F3" }
})