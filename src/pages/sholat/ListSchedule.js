import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default function ListSchedule({ waktu, jam, onBell, bell }) {
  return (
    <View style={styles.listItem}>
      <View style={styles.containerTime}>
        <Text style={styles.time}>{waktu}</Text>
        <Text style={styles.time}>{jam}</Text>
      </View>
      {/* <Image source={{ uri: "https://i.ibb.co/wKPS7w4/no-bell.png" }} style={styles.icon} /> */}
      <TouchableOpacity onPress={onBell}>
        <Image source={{ uri: "https://i.ibb.co/QvmH8Rz/bell.png" }} style={styles.icon} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  listItem: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingVertical: 15, paddingHorizontal: 5 },
  time: { fontSize: 19, color: "#425F57", fontFamily: 'Quicksand-Regular' },
  containerTime: { flexDirection: 'row', width: '80%', justifyContent: 'space-between' },
  icon: { height: 30, width: 30 }
})