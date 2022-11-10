import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import Menu from "../pages/drawer"
import Home from "../pages/home"
import Profile from "../pages/profile"
import Requirment from "../pages/requirtment"
import Contact from "../pages/contact"
import Academic from "../pages/academic"
import Achievement from "../pages/achievement"
import News from "../pages/news"

const Drawer = createDrawerNavigator()

export default function DrawerContent() {
    return(
        <Drawer.Navigator screenOptions={{ headerShown: false }} drawerContent={props => <Menu {...props} />} >
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Profile" component={Profile} />
            <Drawer.Screen name="Requirtment" component={Requirment} />
            <Drawer.Screen name="Contact US" component={Contact} />
            <Drawer.Screen name="Academic" component={Academic} />
            <Drawer.Screen name="Achievement" component={Achievement} />
            <Drawer.Screen name="News" component={News} />
        </Drawer.Navigator>
    )
}