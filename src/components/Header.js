import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

export default function Header({ title, open }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={open}>
          <Image source={require("../assets/images/menu.png")} style={styles.menu} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <View style={{ width: 30 }} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: { height: 50, backgroundColor: "#FFFFFF", elevation: 3, flexDirection: "row", alignItems: "center", paddingHorizontal: 10, justifyContent: "space-between" },
    menu: { width: 30, height: 30, tintColor: "#425F57" },
    title: { color: "#425F57", fontSize: 17, fontWeight: "500" }
})