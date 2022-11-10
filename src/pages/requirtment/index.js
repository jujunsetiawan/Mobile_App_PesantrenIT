import React from 'react'
import { View, Text, StyleSheet, Linking, ToastAndroid, ScrollView } from 'react-native'
import Agenda from './Agenda'
import ContactUS from './ContactUS'
import Header from './Header'
import Persyaratan from './Persyaratan'

export default function Requirment({ navigation }) {

  const openUrl = async(url) => {
    try {
      await Linking.openURL(url)
    } catch (error) {
      ToastAndroid.show(`Don't supported to open this url : ${url}`, ToastAndroid.LONG)
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header open={() => navigation.openDrawer()} onDaftar={() => openUrl("https://pendaftaran.pesantrenit.com/form-register1")} />
        <Persyaratan/>
        <Agenda pdf={() => openUrl("https://drive.google.com/file/d/1Tft8LnJYywJ-JILWvZvk3-J5Yol0k5Ko/view")} />
        <ContactUS bapak={() => openUrl(`whatsapp://send?phone=6281548004800`)} akhwat={() => openUrl(`whatsapp://send?phone=6281558005800`)} ikhwan={() => openUrl(`whatsapp://send?phone=628155005800`)} web={() => openUrl("https://pesantrenit.com/")} facebook={() => openUrl("https://www.facebook.com/pesantrenitindonesia")} instagram={() => openUrl("https://www.instagram.com/pesantrenit.id/")} youtube={() => openUrl("https://www.youtube.com/channel/UCgVkipz_0i-rBDHzQjnO0og/featured")} />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { display: "flex", flex: 1, backgroundColor: "#F3F3F3" }
})