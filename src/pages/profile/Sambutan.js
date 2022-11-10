import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Sambutan() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sambutan Direktur Pendidikan PESANTREN IT</Text>
      <View style={styles.headText}>
        <Text style={styles.text}>Bismillah,</Text>
        <Text style={styles.text}>Assalamu ‘alaikum warahmatullahi wabarakatuhu.</Text>
      </View>
      <View style={styles.headText}>
        <Text style={styles.text}>Segala puji hanyalah milik Allah, yang dengan nikmat-Nya sempurnalah amal-amal kebaikan, Semoga selawat dan salam senantiasa tercurah kepada Nabi Muhammad, keluarganya dan para sahabatnya.</Text>
      </View>
      <View style={styles.headText}>
        <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
      </View>
      <View style={styles.headText}>
        <Text style={styles.text}>Direktur PesantrenIT</Text>
        <Text style={styles.text}>Ustadz Ariful Farhan Lubis MSc</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 20 },
  title: { fontWeight: "700", color: "#152D35", fontSize: 15, textAlign: "center", marginTop: 20 },
  headText: { marginTop: 20 },
  text: { color: "#152D35", fontWeight: "300", textAlign: "justify", lineHeight: 23 }
})