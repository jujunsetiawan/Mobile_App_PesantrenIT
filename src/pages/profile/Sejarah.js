import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Sejarah() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Pesantren IT</Text>
      <Text style={styles.text}>Peasantren IT adalah sebuah tempat pendidikan IT Non formal berbasis pondok, Membekali santrinya dengan Skill IT & Ilmu Agama Serta mengarahkan Skill para santri untuk menggunkannya di jalan Dakwah sesuai dengan pemahaman para Salafusholih.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: { padding: 20, marginTop: 20 },
    title: { fontWeight: "700", color: "#152D35", fontSize: 15, marginBottom: 20 },
    text: { color: "#152D35", fontWeight: "300", textAlign: "justify", lineHeight: 23 }
})