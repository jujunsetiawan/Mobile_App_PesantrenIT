import React, { useState, useEffect } from 'react'
import { View, Text, Image, StyleSheet, ScrollView, ActivityIndicator } from 'react-native'
import Header from './Header'
import ListSchedule from './ListSchedule'
import Geolocation from '@react-native-community/geolocation'

export default function Sholat() {
  const yymmdd = new Date().toISOString().split("T")[0]
  const date = new Date().toDateString()
  const [ currentScheduleSholat, setCurrentScheduleSholat ] = useState({})
  const [ location, setLocation ] = useState("")
  const [ loading, setLoading ] = useState(false)
  const [ waktuSholat, setWaktuSholat ] = useState("")
  const [ distance, setDistance ] = useState("")

  useEffect(() => {
    getLocation()
  }, [])

  const getLocation = () => {
    setLoading(true)
    Geolocation.getCurrentPosition(info => {
      fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${info.coords.latitude}&lon=${info.coords.longitude}`)
      .then(res => res.json())
      .then(res => {
        setLocation(res.address.county)
        getIdLocation(res.address.county)
      }, err => console.log(err.message))
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
    .then(res => {
      setCurrentScheduleSholat(res.jadwal.data)
      getSholat(res.jadwal.data)
    })
    .catch(err => console.log('getScheduleSholat error : ' + err))
    .finally(() => setLoading(false))
  }

  const getSholat = (data) => {
    let x = setInterval(() => {
      if(new Date().getHours() < 4 && new Date().getHours() > 18) {
        setWaktuSholat(`Subuh ${data.subuh}`)
        setDistance(`${Math.floor(((new Date(`${date} ${data.subuh}:00`).getTime() - new Date().getTime()) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))} h ${Math.floor(((new Date(`${date} ${data.subuh}:00`).getTime() - new Date().getTime()) % (1000 * 60 * 60)) / (1000 * 60))} min ${Math.floor(((new Date(`${date} ${data.subuh}:00`).getTime() - new Date().getTime()) % (1000 * 60)) / 1000)} sec`)
      }
  
      if(new Date().getHours() < 12 && new Date().getHours() > 3) {
        setWaktuSholat(`Dzuhur ${data.dzuhur}`)
        setDistance(`${Math.floor(((new Date(`${date} ${data.dzuhur}:00`).getTime() - new Date().getTime()) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))} h ${Math.floor(((new Date(`${date} ${data.dzuhur}:00`).getTime() - new Date().getTime()) % (1000 * 60 * 60)) / (1000 * 60))} min ${Math.floor(((new Date(`${date} ${data.dzuhur}:00`).getTime() - new Date().getTime()) % (1000 * 60)) / 1000)} sec`)
      }
  
      if(new Date().getHours() < 15 && new Date().getHours() > 11) {
        setWaktuSholat(`Ashar ${data.ashar}`)
        setDistance(`${Math.floor(((new Date(`${date} ${data.ashar}:00`).getTime() - new Date().getTime()) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))} h ${Math.floor(((new Date(`${date} ${data.ashar}:00`).getTime() - new Date().getTime()) % (1000 * 60 * 60)) / (1000 * 60))} min ${Math.floor(((new Date(`${date} ${data.ashar}:00`).getTime() - new Date().getTime()) % (1000 * 60)) / 1000)} sec`)
      }
  
      if(new Date().getHours() < 18 && new Date().getHours() > 14) {
        setWaktuSholat(`Maghrib ${data.maghrib}`)
        setDistance(`${Math.floor(((new Date(`${date} ${data.maghrib}:00`).getTime() - new Date().getTime()) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))} h ${Math.floor(((new Date(`${date} ${data.maghrib}:00`).getTime() - new Date().getTime()) % (1000 * 60 * 60)) / (1000 * 60))} min ${Math.floor(((new Date(`${date} ${data.maghrib}:00`).getTime() - new Date().getTime()) % (1000 * 60)) / 1000)} sec`)
      }
  
      if(new Date().getHours() < 19 && new Date().getHours() > 17) {
        setWaktuSholat(`Isya ${data.isya}`)
        setDistance(`${Math.floor(((new Date(`${date} ${data.isya}:00`).getTime() - new Date().getTime()) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))} h ${Math.floor(((new Date(`${date} ${data.isya}:00`).getTime() - new Date().getTime()) % (1000 * 60 * 60)) / (1000 * 60))} min ${Math.floor(((new Date(`${date} ${data.isya}:00`).getTime() - new Date().getTime()) % (1000 * 60)) / 1000)} sec`)
        if(new Date(`${date} ${data.isya}:00`).getTime() - new Date().getTime() < 0) {
          clearInterval(x)
          setDistance("Waktu shalat hari ini sudah selesai")
        }
      }
    }, 1000);
  }

  return (
    <View style={StyleSheet.container}>
      <ScrollView showsVerticalScrollIndicator={false}>   
        <Header city={location} date={date} sholat={waktuSholat} countDown={distance} onFinish={() => getLocation()} />
        {loading ? <ActivityIndicator size="large" color="#425F57" style={styles.loading} /> : (
          <View style={styles.containerList}>
            <ListSchedule waktu="Subuh" jam={currentScheduleSholat.subuh} />
            <ListSchedule waktu="Dhuha" jam={currentScheduleSholat.dhuha} />
            <ListSchedule waktu="Dzuhur" jam={currentScheduleSholat.dzuhur} />
            <ListSchedule waktu="Ashar" jam={currentScheduleSholat.ashar} />
            <ListSchedule waktu="Maghrib" jam={currentScheduleSholat.maghrib} />
            <ListSchedule waktu="Isya" jam={currentScheduleSholat.isya} />
          </View>
        )}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: { display: "flex", flex: 1 },
    containerList: { paddingHorizontal: 30, paddingVertical: 15, justifyContent: "center" },
    loading: { margin: 50 }
})