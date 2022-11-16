import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TouchableNativeFeedback } from 'react-native'

export default function ListYoutube({ subs }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>VIDEO</Text>
        <TouchableNativeFeedback onPress={subs}>
            <View style={styles.containerBtnSubs}>
                <Text style={[styles.text, { color: "#FFF" }]}>Subscribe</Text>    
            </View>
        </TouchableNativeFeedback>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.containerContent}>
          <View style={{ marginRight: 15 }}>
            <Image source={{ uri: "https://i.ibb.co/hVR5d13/thumb.webp" }} style={styles.thumb} />
            <View style={styles.containerTitle} />
            <Text numberOfLines={2} style={[styles.text, { color: "#FFF", textAlign: "center", position: "absolute", bottom: 10, left: 5, right: 5 }]}>Chat Application using React JS - Build and Deploy a Chat App in 1 Hour</Text>
          </View>
          <View style={{ marginRight: 15 }}>
            <Image source={{ uri: "https://i.ibb.co/hVR5d13/thumb.webp" }} style={styles.thumb} />
            <View style={styles.containerTitle} />
            <Text numberOfLines={2} style={[styles.text, { color: "#FFF", textAlign: "center", position: "absolute", bottom: 10, left: 5, right: 5 }]}>Chat Application using React JS - Build and Deploy a Chat App in 1 Hour</Text>
          </View>
          <View style={{ marginRight: 15 }}>
            <Image source={{ uri: "https://i.ibb.co/hVR5d13/thumb.webp" }} style={styles.thumb} />
            <View style={styles.containerTitle} />
            <Text numberOfLines={2} style={[styles.text, { color: "#FFF", textAlign: "center", position: "absolute", bottom: 10, left: 5, right: 5 }]}>Chat Application using React JS - Build and Deploy a Chat App in 1 Hour</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: { marginHorizontal: 20, backgroundColor: "#FFFFFF", borderRadius: 5, elevation: 3, padding: 20 },
    text: { color: "#425F57", textAlign: "justify", fontFamily: 'Quicksand-Regular' },
    containerBtnSubs: { backgroundColor: "#D2001A", paddingVertical: 5, paddingHorizontal: 15, borderRadius: 5, marginLeft: 15 },
    header: { flexDirection: 'row', alignItems: "center" },
    containerContent: { marginTop: 15, flexDirection: "row" },
    thumb: { width: 190, height: 100 },
    containerTitle: { position: "absolute", backgroundColor: "#00000070", top: 0, bottom: 0, left: 0, right: 0 }
})