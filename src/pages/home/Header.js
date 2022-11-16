import React from 'react'
import { View, Text, Image, StyleSheet, TouchableNativeFeedback, TouchableOpacity } from 'react-native'

export default function HeaderSholat(props) {
    
  const { onClick, open } = props

  return (
    <View>
      <View style={styles.container}>
        <Image resizeMode='cover' source={require("../../assets/images/header.jpg")} style={styles.backgroundImg} />
        <View style={styles.containerBackground} />
        <TouchableOpacity onPress={open} style={{position: "absolute", top: 10, left: 20}}>
          <Image source={require("../../assets/images/menu.png")} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.title}>Pesantren IT</Text>
        <Text style={[styles.subTitle, {marginTop: 5, marginBottom: 15}]}>Ingin putra-putri Anda menjadi expert IT dan tidak lalai agama?</Text>
        <Text style={styles.subTitle}>Kami menyadari keluhan bapak/ibu, kami hadir untuk membantu mengatasinya</Text>
        <TouchableNativeFeedback onPress={onClick}>
            <View style={styles.button}>
                <Text style={styles.titleButton}>Daftar Sekarang</Text>
            </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    containerBackground: { height: 250, width: "100%", backgroundColor: "#00000090", position: "absolute" },
    backgroundImg: { height: 250, width: "100%", position: "absolute" },
    container: { height: 250, width: "100%", justifyContent: "center", alignItems: "center" },
    title: { fontSize: 31, color: "#F3F3F3", fontFamily: 'Quicksand-Regular' },
    subTitle: { color: "#F3F3F3", textAlign: "center", marginHorizontal: 25, fontSize: 12, fontFamily: 'Quicksand-Regular' },
    button: { height: 45, width: 150, justifyContent: "center", alignItems: "center", borderRadius: 5, backgroundColor: "#152D35", marginTop: 27, elevation: 3 },
    titleButton: { color: "#F3F3F3", fontFamily: 'Quicksand-Regular' },
    icon: { width: 30, height: 30, tintColor: "#FFFFFF" }
})