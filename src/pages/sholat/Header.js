import React, { useEffect } from 'react'
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native'

export default function Header({ city, date, countDown, onFinish, sholat }) {

  useEffect(() => {

  }, [])
  

  return (
    <View>
      <View style={{ height: 300, width: "100%" }}>
        <Image resizeMode='cover' source={{ uri: "https://i.ibb.co/hF17h26/masjud.jpg" }} style={styles.backgroundImg} />
        <View style={styles.containerBackground} />
        <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>Waktu Sholat</Text>
        </View>
        <Text style={styles.waktuSholat}>{sholat}</Text>
        <Text style={styles.waktuPengingat}>{countDown}</Text>
        <View style={styles.containerTime}>
            <Text style={styles.day}>Hari ini</Text>
            <Text style={styles.time}>{date}</Text>
        </View>
        <Text style={styles.chooseCity}>{city}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    containerBackground: { height: 300, width: "100%", backgroundColor: "#00000050", position: "absolute" },
    backgroundImg: { height: 300, width: "100%", position: "absolute" },
    headerTitle: { color: "#F3F3F3", fontSize: 17, fontWeight: "500" },
    headerContainer: { height: 70, justifyContent: "center", alignItems: "center", },
    waktuSholat: { textAlign: "center", fontSize: 45, fontWeight: "300", color: "#F3F3F3" },
    waktuPengingat: { textAlign: "center", color: "#F3F3F3"  },
    day: { color: "#F3F3F3", fontSize: 21, fontWeight: "500" },
    time: { color: "#F3F3F3" },
    containerTime: { position: "absolute", bottom: 20, left: 30 },
    chooseCity: { color: "#F3F3F3", fontSize: 17, position: "absolute", bottom: 20, right: 35 }
})