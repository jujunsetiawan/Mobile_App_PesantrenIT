import React, { useEffect, useState } from "react"
import { View, Text, StyleSheet, Image, StatusBar, Alert } from "react-native"
import { getData } from "../services/helper"
import NotifService from '../services/NotivicationService'

export default function SplashScreen({ navigation }) {
  const [registerToken, setRegisterToken] = useState('')
  const [fcmRegistered, setFcmRegistered] = useState(false)

  const onRegister = token => {
    setRegisterToken(token.token);
    setFcmRegistered(true);
  }

  const onNotif = notif => {
    // navigation.replace('Sholat')
  }

  const notif = new NotifService(onRegister, onNotif);

  const onNotification = async() => {
    const data = await getData()
    if(new Date(`${new Date().toDateString()} ${data.subuh}:00`).getTime() - new Date().getTime() > 0) {
      notif.scheduleNotif('sample.mp3', data.subuh)
      notif.scheduleNotif('sample.mp3', data.dzuhur)
      notif.scheduleNotif('sample.mp3', data.ashar)
      notif.scheduleNotif('sample.mp3', data.maghrib)
      notif.scheduleNotif('sample.mp3', data.isya)
    }

    if(new Date(`${new Date().toDateString()} ${data.dzuhur}:00`).getTime() - new Date().getTime() > 0) {
      notif.scheduleNotif('sample.mp3', data.dzuhur)
      notif.scheduleNotif('sample.mp3', data.ashar)
      notif.scheduleNotif('sample.mp3', data.maghrib)
      notif.scheduleNotif('sample.mp3', data.isya)
    }

    if(new Date(`${new Date().toDateString()} ${data.ashar}:00`).getTime() - new Date().getTime() > 0) {
      notif.scheduleNotif('sample.mp3', data.ashar)
      notif.scheduleNotif('sample.mp3', data.maghrib)
      notif.scheduleNotif('sample.mp3', data.isya)
    }

    if(new Date(`${new Date().toDateString()} ${data.maghrib}:00`).getTime() - new Date().getTime() > 0) {
      notif.scheduleNotif('sample.mp3', data.maghrib)
      notif.scheduleNotif('sample.mp3', data.isya)
    }

    if(new Date(`${new Date().toDateString()} ${data.isya}:00`).getTime() - new Date().getTime() > 0) {
      notif.scheduleNotif('sample.mp3', data.isya)
    }

    return false
  }

  useEffect(() => {
    onNotification()
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
    title: { fontSize: 25, fontWeight: "500", color: "#425F57", fontFamily: 'Quicksand-Bold' }
})