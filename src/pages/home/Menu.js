import React from 'react'
import { View, Text, StyleSheet, TouchableNativeFeedback, Image } from 'react-native'

export default function Menu({ sholat, daftar, contact, artikel, program }) {
  return (
    <View style={styles.container}>
      <View style={styles.containerList}>
        <TouchableNativeFeedback onPress={sholat}>
            <View style={[styles.containerButton, { borderBottomWidth: 0.5, borderColor: "#425F57" }]}>
                <View style={styles.containerIcon}>
                    <Image source={{ uri: 'https://i.ibb.co/LJvnbsB/mosque.png' }} style={styles.icon} />
                </View>
                <Text style={styles.text}>Sholat</Text>
            </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={artikel}>
            <View style={styles.containerButton}>
                <View style={styles.containerIcon}>
                    <Image source={{ uri: 'https://i.ibb.co/9Wb71M6/article-1.png' }} style={styles.icon} />
                </View>
                <Text style={styles.text}>Artikel</Text>
            </View>
        </TouchableNativeFeedback>
      </View>
      <View style={[styles.containerList, { borderRightWidth: 0.5, borderLeftWidth: 0.5, borderColor: "#425F57" }]}>
        <TouchableNativeFeedback onPress={daftar}>
            <View style={[styles.containerButton, { borderBottomWidth: 0.5, borderColor: "#425F57" }]}>
                <View style={styles.containerIcon}>
                    <Image source={{ uri: 'https://i.ibb.co/gZKbJL9/register.png' }} style={styles.icon} />
                </View>
                <Text style={styles.text}>Pendaftaran</Text>
            </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback>
            <View style={styles.containerButton}>
                <View style={styles.containerIcon}>
                    <Image source={{ uri: 'https://i.ibb.co/hCqWGw0/heart.png' }} style={styles.icon} />
                </View>
                <Text style={styles.text}>Donasi</Text>
            </View>
        </TouchableNativeFeedback>
      </View>
      <View style={styles.containerList}>
        <TouchableNativeFeedback onPress={contact}>
            <View style={[styles.containerButton, { borderBottomWidth: 0.5, borderColor: "#425F57" }]}>
                <View style={styles.containerIcon}>
                    <Image source={{ uri: 'https://i.ibb.co/XXxBT5M/contact-mail.png' }} style={styles.icon} />
                </View>
                <Text style={styles.text}>Contact</Text>
            </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={program}>
            <View style={styles.containerButton}>
                <View style={styles.containerIcon}>
                    <Image source={{ uri: 'https://i.ibb.co/1K5wx8C/website.png' }} style={styles.icon} />
                </View>
                <Text style={styles.text}>Program</Text>
            </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: { backgroundColor: "#FFFFFF", flexDirection: "row", margin: 20, borderRadius: 5, elevation: 3 },
    containerList: { width: "33.4%" },
    containerButton: { justifyContent: "center", alignItems: "center", height: 100},
    text: { color: "#425F57", marginTop: 5, textAlign: "justify", fontFamily: 'Quicksand-Regular' },
    containerIcon: { height: 50, width: 50, backgroundColor: "#425F57", borderRadius: 25, justifyContent: 'center', alignItems: 'center' },
    icon: { height: 30, width: 30, tintColor: '#FFF' }
})