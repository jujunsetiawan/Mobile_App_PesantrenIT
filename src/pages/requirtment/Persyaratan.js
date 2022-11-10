import React, { useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function Persyaratan() {
  const [ state, setState ] = useState({
    syarat: ["Ijazah SMA/SMK sederajat", "Pas foto terbaru ukuran 4x6 ( untuk diunggah )", "Akte kelahiran", "KTP/KTA", "Kartu Keluarga", "Surat pernyataan orangtua", "surat pernyataan santri"]
  })

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Persyaratan <Text style={{ fontWeight: "600" }}>Administrasi</Text></Text>
      <Text style={styles.subTitle}>Untuk menjadi santri PesantrenIT ada beberapa persyaratan yang harus dipenuhi calon santri</Text>
      <Text style={styles.judul}>Persyaratan Berkas</Text>
      <Text style={[styles.text, { fontSize: 12 }]}>Bagi yang ingin mendaftar, harap melengkapi berkas di bawah ini: </Text>
      {state.syarat.map((value, index) => (
        <View style={styles.containerList} key={index}>
          <Text style={styles.text}>{index + 1}. </Text>
          <Text style={styles.text}>{value}</Text>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
    container: { padding: 20 },
    title: { fontSize: 21, color: "#425F57", fontWeight: "300", marginTop: 20 },
    subTitle: { fontSize: 11, color: "#425F57", lineHeight: 17, marginTop: 5, textAlign: "justify", opacity: 0.7},
    judul: { color: "#152D35", fontWeight: "500", marginTop: 20, fontSize: 15 },
    containerList: { flexDirection: "row", marginTop: 10 },
    text: { color: "#152D35", textAlign: "justify" }
})