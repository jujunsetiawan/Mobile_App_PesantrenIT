import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Skill() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upgrade You Skill</Text>
      <View>
        <View style={styles.card}>
            <Text style={[styles.title, { textAlign: "center", marginVertical: 5 }]}>Programmer</Text>
            <View style={styles.line} />
            <Text style={[styles.text, { marginBottom: 20, textAlign: "center" }]}>Santri akan Belajar pemrograman dan dipandu oleh mentor ahlinya seperti Frontend, Backend, Mobile dan akan mendapatkan sertifikasi</Text>
        </View>
        <View style={styles.card}>
            <Text style={[styles.title, { textAlign: "center", marginVertical: 5 }]}>Multimedia</Text>
            <View style={styles.line} />
            <Text style={[styles.text, { marginBottom: 20, textAlign: "center" }]}>santri akan mempelajari bidang multimedia bersama mentor ahlinya seperti desaign logo dan poster dakwah, edit foto dan video, fotografi serta dapatkan sertifikasi</Text>
        </View>
        <View style={styles.card}>
            <Text style={[styles.title, { textAlign: "center", marginVertical: 5 }]}>Digital Marketing</Text>
            <View style={styles.line} />
            <Text style={[styles.text, { marginBottom: 20, textAlign: "center" }]}>Santri akan mempelajari bidang marketing seperti Facebook Ads, Instagram Ads, Google Ads, Organic Traffic, Customer Service dan akan mendapatkan sertifikasi</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: { paddingTop: 25, paddingHorizontal: 20 },
    title: { color: "#425F57", fontSize: 17, fontWeight: "600" },
    text: { color: "#053742", marginTop: 10, lineHeight: 25, textAlign: "justify" },
    card: { width: "100%", paddingHorizontal: 20, borderWidth: 0.5, marginTop: 20, borderRadius: 5, borderColor: "#17D7A0" },
    line: { width: "100%", borderWidth: 0.5, borderColor: "#17D7A0", marginTop: 5 },
})