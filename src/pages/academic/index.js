import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Header from '../../components/Header'

export default function Academic({ navigation }) {
  return (
    <View style={styles.container}>
      <Header title="Academic" open={() => navigation.openDrawer()} />
      <View style={styles.contentContainer}>
        <Text style={styles.text}>Belum Ada Content</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: { display: "flex", flex: 1, backgroundColor: "#F3F3F3" },
    text: { color: "#152D35", lineHeight: 25, textAlign: "center", marginTop: 30, fontFamily: 'Quicksand-Regular' },
    contentContainer: { flex: 1, justifyContent: "center", alignItems: "center" }
})