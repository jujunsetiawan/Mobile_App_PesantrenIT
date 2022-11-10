import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native'

export default function VisiMisi({ contact }) {
  const [state, setState] = useState({
    misi: ["Mencetak Tenaga IT Expert", "Mencetak kader dakwah berlandaskan Quran Sunnah Pemahman Salafus Shalih", "Menyiapkan Pemuda Pemudi yang Bertaqwa, Profesional, Mandiri dan Berbagi", "Membangun Pendidikan berdasarkan Bakat dan Minat", "Membangun Peradaban", "Menyiapkan pemuda pemudi akhlaqul karimah berisikan adab dan budi pekerti"],
    keunggulan: ["Berakhlaq Mulia", "Berjiwa Da’i Jago IT dan Pinter Ngaji", "Mandiri", "Pembelajaran Singkat dan Efisien", "Mengembangkan Potensi dalam Diri", "Garansi Kompetensi"]
  })

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Visi</Text>
      <Text style={styles.text}>Menjadi Pesantren Teladan di indonesia, belajar sesuai Bakat yang bermanhaj Salaful Ummah (Ahlus Sunnah Wal Jama’ah).</Text>
      <Text style={[styles.title, { marginTop: 20 }]}>Misi</Text>
      {state.misi.map((value, index) => (
          <View key={index} style={styles.containerList}>
              <Text style={styles.text}>{index + 1} </Text>
              <Text style={styles.text}>{value}</Text>
          </View>
      ))}
      <Text style={[styles.title, { marginTop: 20 }]}>Keunggulan PesantrenIT</Text>
      {state.keunggulan.map((value, index) => (
          <View key={index} style={styles.containerList}>
              <Text style={styles.text}>{index + 1}. </Text>
              <Text style={styles.text}>{value}</Text>
          </View>
      ))}
      <View style={styles.card}>
        <Text style={[styles.title, { textAlign: "center", marginBottom: 20, color: "#425F57" }]}>Ingin berkontribusi bersama kami !!!</Text>
        <Text style={[styles.text, { color: "#425F57" }]}>Anda dapat berikontribusi dalam dakwah ini dengan cara mendonasikan Harta Anda, Ilmu Anda, Waktu Anda, Barang Barang bekas yang masih layak pakai, dsb … </Text>
        <TouchableNativeFeedback onPress={contact}>
          <View style={styles.button}>
            <Text style={[styles.text, { color: "#FFFFFF", fontWeight: "500" }]}>Kontak Kami</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: { padding: 20 },
    title: { fontWeight: "700", color: "#152D35", fontSize: 15, marginBottom: 10 },
    text: { color: "#152D35", fontWeight: "300", textAlign: "justify", lineHeight: 23 },
    containerList: { flexDirection: "row" },
    card: { padding: 20, backgroundColor: "#F7F7F7", borderRadius: 5, elevation: 3, marginTop: 20 },
    button: { paddingVertical: 10, paddingHorizontal: 30, backgroundColor: "#425F57", borderRadius: 5, elevation: 1, alignItems: "center", marginTop: 20 }
})