import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableNativeFeedback, Image } from 'react-native'

export default function Tanggal({ kiblat }) {
  const [ state, setState ] = useState({
    currentDate: new Date().toDateString(),
    currentHijriDate: new Intl.DateTimeFormat('ar-TN-u-ca-islamic', {day: 'numeric', month: 'long',weekday: 'long',year : 'numeric'}).format(Date.now())
  })

  return (
    <View style={styles.container}>
        <TouchableNativeFeedback onPress={kiblat}>
            <View style={styles.containerKiblat}>
                <Image source={require("../../assets/images/kaaba.png")} style={styles.iconKaaba} />
                <Text style={styles.text}>Arah Kiblat</Text>
            </View>
        </TouchableNativeFeedback>
        <View style={{ width: "54.5%", height: 100, justifyContent: "space-around" }}>
            <View style={styles.containerDate}>
                <Text style={styles.text}>{state.currentHijriDate}</Text>
            </View>
            <View style={styles.containerDate}>
                <Text style={styles.text}>{state.currentDate}</Text>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: { flexDirection: "row", marginTop: 20, marginHorizontal: 20, borderRadius: 5, justifyContent: "space-between" },
    containerKiblat: { height: 100, width: "44.5%", backgroundColor: "#FFFFFF", justifyContent: "center", alignItems: "center", elevation: 3, borderRadius: 5 },
    containerDate: { height: 46, backgroundColor: "#FFFFFF", justifyContent: "center", alignItems: "center", borderRadius: 5, marginRight: 4, elevation: 3 },
    text: { color: "#425F57", textAlign: "justify" },
    iconKaaba: { width: 55, height: 55 }
})