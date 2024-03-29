import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, Dimensions, BackHandler, Modal, ToastAndroid, TouchableOpacity, TouchableWithoutFeedback, TouchableNativeFeedback } from 'react-native'
import {magnetometer, SensorTypes, setUpdateIntervalForType} from "react-native-sensors";
import LPF from "lpf";
import Geolocation from '@react-native-community/geolocation';

const {height, width} = Dimensions.get("window");

export default function Compass({ navigation }) {
  LPF.init([])
  LPF.smoothing = 0.2

  const [ degree, setDegree ] = useState("0")
  const [ latitude, setLatitude ] = useState("0")
  const [ longitude, setLongitude ] = useState("0")
  const [ kiblat, setKiblat ] = useState("")
  const [ modal, setModal ] = useState(false)

  useEffect(() => {
    // const backHandler = BackHandler.addEventListener("hardwareBackPress", () => navigation.goBack())
    _subscribe()
    getLocation()
    // return () => backHandler.remove()
  }, [])

  const _subscribe = async() => {
    setUpdateIntervalForType(SensorTypes.magnetometer, 16)
    magnetometer.subscribe(sensorData => setDegree(_angle(sensorData)), error => console.log(error))
  }

  const getLocation = () => {
    Geolocation.getCurrentPosition((info) => {
      setLatitude(info.coords.latitude)
      setLongitude(info.coords.longitude)
      setKiblat(bearing( info.coords.latitude, info.coords.longitude ).toString().substr(0, 3))
    })

    Geolocation.watchPosition(res => console.log(res), err => setModal(true))
  }

  const _degree = magnetometer => {
    return magnetometer - 90 >= 0
      ? magnetometer - 90
      : magnetometer + 271;
  };

  const _angle = magnetometer => {
    let angle = 0
    if(magnetometer) {
      let { x, y } = magnetometer
      if(Math.atan2(y, x) >= 0) {
        angle = Math.atan2(y, x) * (180 / Math.PI)
      } else {
        angle = (Math.atan2(y, x) + 2 * Math.PI) * (180 / Math.PI)
      }
    }
    return Math.round(LPF.next(angle))
  }

  function bearing(startLat, startLng) {
    let latitudeKabah = 21.422621703141026; ///// titik latitude kabah
    let longitudeKabah = 39.826225545252306; ///// titik longitude kabah
    startLat = toRadians(startLat);
    startLng = toRadians(startLng);
    destLat = toRadians(latitudeKabah);
    destLng = toRadians(longitudeKabah);
  
    y = Math.sin(destLng - startLng) * Math.cos(destLat);
    x = Math.cos(startLat) * Math.sin(destLat) - Math.sin(startLat) * Math.cos(destLat) * Math.cos(destLng - startLng);
    brng = Math.atan2(y, x);
    brng = toDegrees(brng);
    v = brng = brng + 360;
  
    fraction = modf(brng + 360.0, brng);
    brng += fraction;
  
    if (brng > 360) {
      brng -= 360;
    }
    return brng;
  }
  
  // Converts from degrees to radians.
  function toRadians(degrees) {
    return (degrees * Math.PI) / 180;
  }
  
  // Converts from radians to degrees.
  function toDegrees(radians) {
    return (radians * 180) / Math.PI;
  }
  
  function modf(orig, ipart) {
    return orig - Math.floor(orig);
  }
  
  const _direction = degree => {
    if (degree >= 22.5 && degree < 67.5) {
      return "NE";
    } else if (degree >= 67.5 && degree < 112.5) {
      return "E";
    } else if (degree >= 112.5 && degree < 157.5) {
      return "SE";
    } else if (degree >= 157.5 && degree < 202.5) {
      return "S";
    } else if (degree >= 202.5 && degree < 247.5) {
      return "SW";
    } else if (degree >= 247.5 && degree < 292.5) {
      return "W";
    } else if (degree >= 292.5 && degree < 337.5) {
      return "NW";
    } else {
      return "N";
    }
  }

  const IsModal = () => {
    return(
        <Modal animationType="fade" transparent={true} visible={modal}>
            <TouchableWithoutFeedback onPress={() => setModal(false)}>
                <View style={style.backBtn} />
            </TouchableWithoutFeedback>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={style.modalContainer}>
                    <TouchableOpacity onPress={() => setModal(false)} style={style.closeBtn}>
                        <Text style={{ fontFamily: 'Comfortaa-Bold', color: '#F05454', fontSize: 19 }}>X</Text>
                    </TouchableOpacity>
                    <View style={{marginHorizontal: 20, marginTop: 20}}>
                        <Text style={style.ket}>PERMISSIONS DENIED,</Text>
                        <Text style={style.ket}>Beberapa fitur di aplikasi ini membutuhkan akses lokasi, Untuk pengalaman yang lebih baik harap aktifkan gps di perangkat anda.</Text>
                        <Text style={style.ket}>Terimakasih.</Text>
                    </View>
                </View>
            </View>
        </Modal>
    )
  }

  return (
    <View style={style.container}>
      <View style={style.containerHeader}>
        <View style={style.info}>
          <View style={style.containerContent}>
            <Text style={style.text}>ka'bah</Text>
            <Text style={[style.text, { marginTop: 5 }]}>{(_degree(degree) > bearing(latitude, longitude) ? 360 + bearing(latitude, longitude) - _degree(degree): bearing(latitude, longitude) - _degree(degree)).toFixed(0)}°</Text>
          </View>
          <View style={style.containerContent}>
            <Text style={style.text}>Arah</Text>
            <Text style={[style.text, { marginTop: 5 }]}>{_direction(_degree(degree))}</Text>
          </View>
        </View>
        <Text style={[style.text, { marginTop: 10, fontWeight: '400', fontSize: 15 }]}>Arah kiblat berada di {kiblat}° dari arah utara</Text>
      </View>
      <Image style={style.pointer} source={require('../../assets/images/compass_pointer.png')} />
      <View style={style.compassContainer}>
        <Image style={[style.bg, { transform: [{ rotate: 360 - degree + "deg" }] }]} source={require('../../assets/images/compass_bg.png')} />
        <View style={{ height: width - 80, position: 'absolute', width: width - 80, alignItems: 'center', borderRadius: (width - 80) / 2, transform: [{ rotate: bearing(latitude, longitude) - _degree(degree) + "deg" }] }}>
          <Image source={require('../../assets/images/kaaba.png')} style={{ height: 30, width: 30, position: 'absolute', top: -25 }} />
        </View>
        {latitude !== "0" ? <Text style={style.degree}>{_degree(degree)}°</Text> :
        <TouchableNativeFeedback onPress={() => getLocation()}>
          <View style={style.refreshBtn}>
            <Text style={{ color: '#06283D' }}>Refresh</Text>
          </View>
        </TouchableNativeFeedback>}
      </View>
      {IsModal()}
    </View>
  )
}

const style = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#06283D', justifyContent: 'center', alignItems: 'center' },
    title: { color: "#fff", fontSize: height / 26, fontWeight: "bold", fontFamily: 'Quicksand-Regular' },
    pointer: { height: height/26, marginTop: 30, marginBottom: 30 },
    bg: { height: width - 80, justifyContent: "center", alignItems: "center", resizeMode: "contain"},
    compassContainer: { justifyContent: 'center', alignItems: 'center' },
    degree: { color: "#fff", fontSize: height / 27, width: width, position: "absolute", textAlign: "center", fontFamily: 'Quicksand-Regular' },
    containerHeader: { padding: 10, backgroundColor: '#FFF', borderRadius: 5, position: 'absolute', top: 20, right: 20, left: 20, alignItems:  'center', elevation: 3 },
    info: { flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: '#425F57', borderBottomWidth: 0.5, paddingBottom: 10 },
    containerContent: { justifyContent: 'center', alignItems: 'center', width: '50%' },
    text: { color: "#425F57", textAlign: "justify", fontSize: 17, fontWeight: '500', fontFamily: 'Quicksand-Regular' },
    backBtn: { position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, backgroundColor: '#00000070' },
    modalContainer: { width: '85%', backgroundColor: '#FFF', borderRadius: 10 },
    closeBtn: { height: 30, width: 30, justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-end' },
    ket: { fontFamily: 'Quicksand-Regular', color: '#2C3333', lineHeight: 25, textAlign: 'justify', marginBottom: 20 },
    refreshBtn: { height: 35, width: 100, borderRadius: 5, backgroundColor: '#FFF', justifyContent: 'center', alignItems: 'center', position: 'absolute' }
})