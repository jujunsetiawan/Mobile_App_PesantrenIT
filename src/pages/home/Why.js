import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Why() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mengapa Pesantren IT</Text>
      <Text style={styles.text}>Lulusan PesantrenIT yang sudah terbukti diatas standard atau bisa dikatakan expert. Terlebih support kegiatan dan tim pengajar yang sudah tidak diragukan lagi dan yang terpenting <Text style={{fontWeight: "800"}}>GRATIS</Text>.</Text>
      <View>
        <View style={styles.card}>
            <Text style={[styles.title, { textAlign: "center", marginVertical: 5 }]}>Kegiatan</Text>
            <View style={styles.line} />
            <Text style={[styles.text, { marginBottom: 20, textAlign: "center" }]}>Edurace, Publik Speaking, Entrepreneur, Character Building, Leadership, Futsal, Amal Sosial.</Text>
        </View>
        <View style={styles.card}>
            <Text style={[styles.title, { textAlign: "center", marginVertical: 5 }]}>Tim Pengajar</Text>
            <View style={styles.line} />
            <Text style={[styles.text, { marginBottom: 20, textAlign: "center" }]}>Ust.Saefullah Abu Sholeh B.A, Ust Ahmad LC, Muhammad David Ismail MS, Jujun Setiawan, Indra Damar Jati</Text>
        </View>
        <View style={styles.card}>
            <Text style={[styles.title, { textAlign: "center", marginVertical: 5 }]}>Program Unggulan</Text>
            <View style={styles.line} />
            <Text style={[styles.text, { marginBottom: 20, textAlign: "center" }]}>Menumbuh kembangkan soft skill dan skill kompetensi melalui Pesantren IT, Boot Camp, IT Camp, English Camp, Tahfidz dan Tahsin, dan masih banyak lagi.</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: { marginHorizontal: 20, marginTop: 20 },
    title: { color: "#425F57", fontSize: 17, fontWeight: "600", fontFamily: 'Quicksand-Regular' },
    text: { color: "#053742", marginTop: 10, lineHeight: 25, textAlign: "justify", fontFamily: 'Quicksand-Regular' },
    card: { width: "100%", paddingHorizontal: 20, borderWidth: 0.5, marginTop: 20, borderRadius: 5, borderColor: "#17D7A0" },
    line: { width: "100%", borderWidth: 0.5, borderColor: "#17D7A0", marginTop: 5 },
})