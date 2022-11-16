import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Agenda({ pdf }) {
  const [state, setState] = useState({
    agenda: ["Pendafaran Online", "Proses Seleksi", "Proses Wawancara", "Pengumuman Hasil Seleksi Calon Santri", "Masa Orientasi"],
    ketentuan: ["Cetak dokumen tersebut dengan ukuran kertas A4 dan berwarna.", " Isilah data tersebut secara lengkap oleh orang tua anda.", "Pastikan bahwa anda sudah benar-benar mendapatkan izin dan ridho dari orang tua anda.", "Tanda tangan surat tersebut oleh orang tua anda.", "Bawalah Surat tersebut ketika akan datang ke Pesantren IT."]
  })
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agenda</Text>
      {state.agenda.map((value, index) => (
        <View key={index} style={styles.containerList}>
            <Text style={styles.text}>{index + 1}. </Text>
            <Text style={styles.text}>{value}</Text>
        </View>
      ))}
      <Text style={[styles.title, { marginTop: 20 }]}>Jenis Tes</Text>
      <Text style={[styles.text, { marginTop: 10 }]}>1. Tes Adab dan Ibadah</Text>
      <Text style={[styles.text, { marginTop: 10 }]}>2. Tes Wawancara Santri</Text>
      <Text style={[styles.title, { marginTop: 20 }]}>Ketentuan Surat Pernyataan Orangtua</Text>
      <View style={styles.containerList}>
        <Text style={styles.text}>• </Text>
        <Text style={[styles.text, { fontWeight: "300" }]}>Unduh dokumen <Text style={{ fontWeight: "600" }}>SURAT PERNYATAAN ORANG TUA</Text> melalui link berikut <Text style={{ color: "#2192FF" }} onPress={pdf}>ini</Text></Text>
      </View>
      {state.ketentuan.map((value, index) => (
        <View key={index} style={styles.containerList}>
            <Text style={styles.text}>• </Text>
            <Text style={[styles.text, { fontWeight: "300" }]}>{value}</Text>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
    container: { paddingHorizontal: 20 },
    title: { fontSize: 21, color: "#425F57", fontWeight: "300", fontFamily: 'Quicksand-Regular' },
    containerList: { flexDirection: "row", marginTop: 10 },
    text: { color: "#152D35", textAlign: "justify", lineHeight: 20, fontFamily: 'Quicksand-Regular' },
    containerList: { flexDirection: "row", marginTop: 10 }
})