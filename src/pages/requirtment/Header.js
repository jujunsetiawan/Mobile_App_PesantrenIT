import React from 'react'
import { View, Text, StyleSheet, Image, TouchableNativeFeedback, TouchableOpacity } from 'react-native'

export default function Header({ onDaftar, open }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={open} style={styles.icon}>
        <Image source={require("../../assets/images/menu.png")} style={{height: 30, width: 30}} />
      </TouchableOpacity>
      <Image source={require("../../assets/images/santri.png")} style={styles.img} />
      <Text style={styles.title}>Penerimaan Santri Baru</Text>
      <Text style={styles.text}>Mari bergabung bersama kami, inilah saatnya anda menjadi keluarga besar PesantrenIT</Text>
      <TouchableNativeFeedback onPress={onDaftar} >
        <View style={styles.button}>
          <Text style={styles.titleBtn}>Daftar</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
    container: { alignItems: "center" },
    img: { width: 200, height: 130, marginVertical: 20 },
    title: { fontSize: 21, fontWeight: "300", color: "#425F57", fontFamily: 'Quicksand-Regular' },
    text: { textAlign: "center", fontSize: 13, marginTop: 10, lineHeight: 23, marginHorizontal: 40, color: "#425F57", fontFamily: 'Quicksand-Regular' },
    button: { paddingVertical: 10, paddingHorizontal: 30, backgroundColor: "#425F57", borderRadius: 5, marginTop: 20 },
    titleBtn: { color: "#F3F3F3", fontWeight: "500", fontFamily: 'Quicksand-Regular' },
    icon: { alignSelf: "flex-start", margin: 20, tintColor: "#425F57" }
})