import React, { useEffect } from "react"
import { View, Text, StyleSheet, Image, StatusBar } from "react-native"

export default function SplashScreen({ navigation }) {

    useEffect(() => {
      setTimeout(() => {
        navigation.replace("Main")
      }, 3000);
    }, [])

    return(
        <View style={styles.container}>
            <StatusBar hidden />
            <Image source={require("../assets/images/PesantrenIT.png")} style={styles.logo} />
            <Text style={styles.title}>Pesantren IT</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { display: "flex", flex: 1, backgroundColor: "#F5F5F5", justifyContent: "center", alignItems: "center" },
    logo: { height: 250, width: 250, marginBottom: 20 },
    title: { fontSize: 25, fontWeight: "500", color: "#425F57" }
})