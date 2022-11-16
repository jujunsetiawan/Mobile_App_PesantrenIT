import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableNativeFeedback } from 'react-native'

export default function Menu({ navigation }) {
  const [ select, setSelect ] = useState("Home")
  const [ menu, setMenu ] = useState([
    "Home",
    "Profile",
    "Academic",
    "News",
    "Achievement",
    "Requirtment",
    "Contact US"
  ])

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/PesantrenIT.png")} style={styles.logo} />
      <View style={styles.line} />
      <View style={styles.conatinerList}>
        {menu.map((value, index) => (
          <TouchableNativeFeedback key={index} onPress={() => {
              setSelect(value)
              navigation.closeDrawer()
              navigation.navigate(value)
            }}>
            <View style={select == value ? styles.onButtonList : styles.buttonList}>
              <Text style={select == value ? styles.onText : styles.text}>{value}</Text>
            </View>
          </TouchableNativeFeedback>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { display: "flex", flex: 1, alignItems: "center"},
  logo: { width: 180, height: 180 },
  conatinerList: { width: "100%", padding: 20 },
  buttonList: { padding: 10, marginBottom: 15 },
  onButtonList: { padding: 10, marginBottom: 15, backgroundColor: "#425F57", borderRadius: 5 },
  text: { color: "#425F57", fontSize: 15, fontFamily: 'Quicksand-Regular' },
  onText: { color: "#F3F3F3", fontSize: 15, fontFamily: 'Quicksand-Regular' },
})