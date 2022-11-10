import React from 'react'
import { View, StyleSheet, ScrollView, Linking, ToastAndroid } from 'react-native'
import Header from '../../components/Header'
import Sambutan from './Sambutan'
import Sejarah from './Sejarah'
import VisiMisi from './VisiMisi'

export default function Profile({ navigation }) {

  const openUrl = async(url) => {
    try {
      await Linking.openURL(url)
    } catch (error) {
      ToastAndroid.show(`Don't supported to open this url : ${url}`, ToastAndroid.LONG)
    }
  }

  return (
    <View style={styles.container}>
      <Header title="Profile" open={() => navigation.openDrawer()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Sambutan/>
        <Sejarah/>
        <VisiMisi contact={() => openUrl(`whatsapp://send?phone=6281514001400`)}  />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { display: "flex", flex: 1, backgroundColor: "#F3F3F3" }
})