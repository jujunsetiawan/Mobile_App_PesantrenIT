import AsyncStorage from "@react-native-async-storage/async-storage"

export const storeData = async(value) => {
    await AsyncStorage.setItem('schedule', value)
}

export const getData = async() => {
    const value = await AsyncStorage.getItem('schedule')
    return JSON.parse(value)
}