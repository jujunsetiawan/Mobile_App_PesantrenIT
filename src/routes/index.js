import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import SplashScreen from "../pages/SplashScreen"
import DrawerContent from "./Drawer"
import Compass from "../pages/compass"
import Sholat from "../pages/sholat"

const Stack = createNativeStackNavigator()

export default function Routes() {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="Main" component={DrawerContent} />
                <Stack.Screen name="Compass" component={Compass} />
                <Stack.Screen name="Sholat" component={Sholat} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}