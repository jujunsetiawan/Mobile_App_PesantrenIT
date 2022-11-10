import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'
import Swiper from 'react-native-swiper'

export default function SwiperList() {
  return (
    <View style={styles.container}>
        <Swiper activeDotColor="#F3F3F3" loop={false} >
          <Image source={{ uri: "https://i.ibb.co/Dz503ft/pendafaran.jpg" }} resizeMode="contain" style={styles.image} />
          <Image source={{ uri: "https://i.ibb.co/89CGS2t/pendaftaranmuslimah.jpg" }} resizeMode="contain" style={styles.image} />
          <Image source={{ uri: "https://i.ibb.co/q7F34Jm/donasi.jpg" }} resizeMode="contain" style={styles.image} />
          <Image source={{ uri: "https://i.ibb.co/hy78PQ0/sedekahjumat.jpg" }} resizeMode="contain" style={styles.image} />
          <Image source={{ uri: "https://i.ibb.co/D829W3N/membacaalkahfi.jpg" }} resizeMode="contain" style={styles.image} />
          <Image source={{ uri: "https://i.ibb.co/dj9FRJR/putih.jpg" }} resizeMode="contain" style={styles.image} />
        </Swiper>
    </View>
  )
}

const { width } = Dimensions.get("window")

const styles = StyleSheet.create({
    container: { width, height: 300, marginTop: 20, backgroundColor: "#FFFFFF", elevation: 3 },
    image: { width, height: 300 }
})