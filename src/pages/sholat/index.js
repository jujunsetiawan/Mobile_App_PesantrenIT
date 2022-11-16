import React, { useState, useEffect } from 'react'
import { View, Text, Image, StyleSheet, ScrollView, ActivityIndicator, PermissionsAndroid, Modal, TouchableOpacity, TouchableWithoutFeedback, ToastAndroid, TouchableNativeFeedback } from 'react-native'
import Header from './Header'
import ListSchedule from './ListSchedule'
import Geolocation from '@react-native-community/geolocation'
import { storeData } from '../../services/helper'

export default function Sholat() {
  const yymmdd = new Date().toISOString().split("T")[0]
  const date = new Date().toDateString()
  const [ currentScheduleSholat, setCurrentScheduleSholat ] = useState({})
  const [ location, setLocation ] = useState("")
  const [ loading, setLoading ] = useState(false)
  const [ waktuSholat, setWaktuSholat ] = useState("")
  const [ distance, setDistance ] = useState("")
  const [ modal, setModal ] = useState(false)
  const test = ["14:30", "15:00"]
  useEffect(() => {
    requestGPS()
    console.log(test.includes(`${new Date().getHours()}:${new Date().getMinutes()}`));
  }, [])

  async function requestGPS() {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );   
      if (granted === PermissionsAndroid.RESULTS.GRANTED) return getLocation();
    }
    
  const getLocation = () => {
    setLoading(true)
    Geolocation.getCurrentPosition(info => {
      fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${info.coords.latitude}&lon=${info.coords.longitude}`)
      .then(res => res.json())
      .then(res => {
        setLocation(res.address.county)
        getIdLocation(res.address.county)
      })
    })

    Geolocation.watchPosition(res => console.log(res), err => {
      setLoading(false)
      setModal(true)
    })
  }

  const getIdLocation = (city) => {
    fetch(`https://api.banghasan.com/sholat/format/json/kota/nama/${city}`)
    .then(res => res.json())
    .then(res => getScheduleSholat(res.kota[0].id))
    .catch(err => console.log('getIdLocation error : ' + err))
  }

  const getScheduleSholat = (id) => {
    fetch(`https://api.banghasan.com/sholat/format/json/jadwal/kota/${id}/tanggal/${yymmdd}`)
    .then(res => res.json())
    .then((res) => {
      setCurrentScheduleSholat(res.jadwal.data)
      getSholat(res.jadwal.data)
      storeData(JSON.stringify(res.jadwal.data))
    })
    .catch(err => console.log('getScheduleSholat error : ' + err))
    .finally(() => setLoading(false))
  }

  const getSholat = (data) => {
    let x = setInterval(() => {
      if(new Date().getHours() < 4 && new Date().getHours() > 18) {
        setWaktuSholat(`Subuh ${data.subuh}`)
        setDistance(`${Math.floor(((new Date(`${date} ${data.subuh}:00`).getTime() - new Date().getTime()) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))} h ${Math.floor(((new Date(`${date} ${data.subuh}:00`).getTime() - new Date().getTime()) % (1000 * 60 * 60)) / (1000 * 60))} min ${Math.floor(((new Date(`${date} ${data.subuh}:00`).getTime() - new Date().getTime()) % (1000 * 60)) / 1000)} sec`)
        if(new Date(`${date} ${data.subuh}:00`).getTime() - new Date().getTime() < 0) {
          clearInterval(x)
          setDistance("Sudah memasuki waktu sholat subuh")
        }
      }
  
      if(new Date().getHours() < 12 && new Date().getHours() > 3) {
        setWaktuSholat(`Dzuhur ${data.dzuhur}`)
        setDistance(`${Math.floor(((new Date(`${date} ${data.dzuhur}:00`).getTime() - new Date().getTime()) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))} h ${Math.floor(((new Date(`${date} ${data.dzuhur}:00`).getTime() - new Date().getTime()) % (1000 * 60 * 60)) / (1000 * 60))} min ${Math.floor(((new Date(`${date} ${data.dzuhur}:00`).getTime() - new Date().getTime()) % (1000 * 60)) / 1000)} sec`)
        if(new Date(`${date} ${data.dzuhur}:00`).getTime() - new Date().getTime() < 0) {
          clearInterval(x)
          setDistance("Sudah memasuki waktu shalat dzuhur")
        }
      }
  
      if(new Date().getHours() < 15 && new Date().getHours() > 11) {
        setWaktuSholat(`Ashar ${data.ashar}`)
        setDistance(`${Math.floor(((new Date(`${date} ${data.ashar}:00`).getTime() - new Date().getTime()) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))} h ${Math.floor(((new Date(`${date} ${data.ashar}:00`).getTime() - new Date().getTime()) % (1000 * 60 * 60)) / (1000 * 60))} min ${Math.floor(((new Date(`${date} ${data.ashar}:00`).getTime() - new Date().getTime()) % (1000 * 60)) / 1000)} sec`)
        if(new Date(`${date} ${data.ashar}:00`).getTime() - new Date().getTime() < 0) {
          clearInterval(x)
          setDistance("Sudah memasuki waktu sholat ashar")
        }
      }
  
      if(new Date().getHours() < 18 && new Date().getHours() > 14) {
        setWaktuSholat(`Maghrib ${data.maghrib}`)
        setDistance(`${Math.floor(((new Date(`${date} ${data.maghrib}:00`).getTime() - new Date().getTime()) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))} h ${Math.floor(((new Date(`${date} ${data.maghrib}:00`).getTime() - new Date().getTime()) % (1000 * 60 * 60)) / (1000 * 60))} min ${Math.floor(((new Date(`${date} ${data.maghrib}:00`).getTime() - new Date().getTime()) % (1000 * 60)) / 1000)} sec`)
        if(new Date(`${date} ${data.maghrib}:00`).getTime() - new Date().getTime() < 0) {
          clearInterval(x)
          setDistance("Sudah memasuki waktu shalat hari maghrib")
        }
      }
  
      if(new Date().getHours() < 23 && new Date().getHours() > 17) {
        setWaktuSholat(`Isya ${data.isya}`)
        setDistance(`${Math.floor(((new Date(`${date} ${data.isya}:00`).getTime() - new Date().getTime()) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))} h ${Math.floor(((new Date(`${date} ${data.isya}:00`).getTime() - new Date().getTime()) % (1000 * 60 * 60)) / (1000 * 60))} min ${Math.floor(((new Date(`${date} ${data.isya}:00`).getTime() - new Date().getTime()) % (1000 * 60)) / 1000)} sec`)
        if(new Date(`${date} ${data.isya}:00`).getTime() - new Date().getTime() < 0) {
          clearInterval(x)
          setDistance("Waktu shalat hari ini sudah selesai")
        }
      }
    }, 1000);
  }

  const IsModal = () => {
    return(
        <Modal animationType="fade" transparent={true} visible={modal}>
            <TouchableWithoutFeedback onPress={() => setModal(false)}>
                <View style={styles.backBtn} />
            </TouchableWithoutFeedback>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={styles.modalContainer}>
                    <TouchableOpacity onPress={() => setModal(false)} style={styles.closeBtn}>
                        <Text style={{ fontFamily: 'Comfortaa-Bold', color: '#F05454', fontSize: 19 }}>X</Text>
                    </TouchableOpacity>
                    <View style={{marginHorizontal: 20, marginTop: 20}}>
                        <Text style={styles.ket}>PERMISSIONS DENIED,</Text>
                        <Text style={styles.ket}>Beberapa fitur di aplikasi ini membutuhkan akses lokasi, Untuk pengalaman yang lebih baik harap aktifkan gps di perangkat anda.</Text>
                        <Text style={styles.ket}>Terimakasih.</Text>
                    </View>
                </View>
            </View>
        </Modal>
    )
  }

  return (
    <View style={StyleSheet.container}>
      <ScrollView showsVerticalScrollIndicator={false}>   
        <Header city={location} date={date} sholat={waktuSholat} countDown={distance} onFinish={() => getLocation()} />
        {loading ? <ActivityIndicator size="large" color="#425F57" style={styles.loading} /> : 
          !location ?
          <TouchableNativeFeedback onPress={() => requestGPS()} >
            <View style={styles.refreshBtn}>
              <Text style={{ color: '#FFF' }}>Refresh</Text>
            </View>
          </TouchableNativeFeedback> : (
          <View style={styles.containerList}>
            <ListSchedule waktu="Subuh" jam={currentScheduleSholat.subuh} onBell={() => ToastAndroid.show("Fitur masih dalam tahap pengembangan", ToastAndroid.SHORT)} />
            <ListSchedule waktu="Dhuha" jam={currentScheduleSholat.dhuha} onBell={() => ToastAndroid.show("Fitur masih dalam tahap pengembangan", ToastAndroid.SHORT)} />
            <ListSchedule waktu="Dzuhur" jam={currentScheduleSholat.dzuhur} onBell={() => ToastAndroid.show("Fitur masih dalam tahap pengembangan", ToastAndroid.SHORT)} />
            <ListSchedule waktu="Ashar" jam={currentScheduleSholat.ashar} onBell={() => ToastAndroid.show("Fitur masih dalam tahap pengembangan", ToastAndroid.SHORT)} />
            <ListSchedule waktu="Maghrib" jam={currentScheduleSholat.maghrib} onBell={() => ToastAndroid.show("Fitur masih dalam tahap pengembangan", ToastAndroid.SHORT)} />
            <ListSchedule waktu="Isya" jam={currentScheduleSholat.isya} onBell={() => ToastAndroid.show("Fitur masih dalam tahap pengembangan", ToastAndroid.SHORT)} />
          </View>
        )}
      </ScrollView>
      {IsModal()}
    </View>
  )
}

const styles = StyleSheet.create({
    container: { display: "flex", flex: 1 },
    containerList: { paddingHorizontal: 30, paddingVertical: 15, justifyContent: "center" },
    loading: { margin: 50 },
    backBtn: { position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, backgroundColor: '#00000070' },
    modalContainer: { width: '85%', backgroundColor: '#FFF', borderRadius: 10 },
    closeBtn: { height: 30, width: 30, justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-end' },
    ket: { fontFamily: 'Quicksand-Regular', color: '#2C3333', lineHeight: 25, textAlign: 'justify', marginBottom: 20 },
    refreshBtn: { backgroundColor: '#425F57', alignSelf: 'center', height: 35, justifyContent: 'center', width: 100, alignItems: 'center', borderRadius: 5, marginTop: 150 }
})