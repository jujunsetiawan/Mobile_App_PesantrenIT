import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function Kontak({ web, facebook, instagram, youtube, ikhwan, akhwat, bapak }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Informasi Mengenai PesantrenIT</Text>
      <View style={styles.card}>
        <Text style={styles.subtitle}>PesantrenIT Contact Center</Text>
        <View style={styles.contactContainer}>
            <Image source={require("../../assets/images/internet.png")} style={styles.icon}/>
            <View style={styles.content}>
                <Text style={styles.titleContent}>Social Media</Text>
                <Text style={styles.text}>Website : <Text style={{ color: "#083AA9" }} onPress={web}>pesantrenit.com</Text></Text>
                <Text style={styles.text}>Facebook : <Text style={{ color: "#083AA9" }} onPress={facebook}>@pesantrenitindonesia</Text></Text>
                <Text style={styles.text}>Instagram : <Text style={{ color: "#083AA9" }} onPress={instagram}>@pesantrenit.id</Text></Text>
                <Text style={styles.text}>Youtube : <Text style={{ color: "#083AA9" }} onPress={youtube}>Pesantren IT</Text></Text>
            </View>
        </View>
        <View style={styles.contactContainer}>
            <Image source={require("../../assets/images/email.png")} style={styles.icon}/>
            <View style={styles.content}>
                <Text style={styles.titleContent}>No. Kantor</Text>
                <Text style={styles.text}>-</Text>
            </View>
        </View>
        <View style={styles.contactContainer}>
            <Image source={require("../../assets/images/whatsapp.png")} style={styles.icon}/>
            <View style={styles.content}>
                <Text style={styles.titleContent}>Whatsapp</Text>
                <Text style={styles.text}>PIT Ikhwan : <Text style={{ color: "#083AA9" }} onPress={ikhwan}>0815-5005-800</Text></Text>
                <Text style={styles.text}>PIT Akhwat : <Text style={{ color: "#083AA9" }} onPress={akhwat}>0815-5800-5800</Text></Text>
                <Text style={styles.text}>Yayasan PIT : <Text style={{ color: "#083AA9" }} onPress={bapak}>0815 4800 4800</Text></Text>
            </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: { padding: 20 },
    title: { color: "#152D35", textAlign: "center", fontWeight: "600", fontSize: 17 },
    card: { padding: 20, backgroundColor: "#F3F3F3", borderRadius: 5, elevation: 3, marginTop: 20 },
    subtitle: { fontSize: 17, fontWeight: "600", color: "#152D35" },
    icon: {  tintColor: "#083AA9", width: 31, height: 31 },
    contactContainer: { flexDirection: "row", marginTop: 20 },
    content: { marginLeft: 20 },
    titleContent: { fontSize: 15, fontWeight: "600", color: "#425F57" },
    text: { color: "#425F57", textAlign: "justify", lineHeight: 20, marginTop: 10, fontWeight: "300" },
})