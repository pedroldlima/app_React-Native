import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../pages/Home/Home";
import Bombeiro from "../pages/Bombeiro/Bombeiro";

import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

function Routes() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: false,
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: '#DE3333',
                    borderTopWidth: 0,

                    height: 60,
                    padding: 10,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                },
                tabBarLabelStyle: {
                    fontSize: 15,
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color, size, focused}) => {
                        if(focused){
                        return <Ionicons name="home" size={size} color={color} />
                        }
                        return <Ionicons name="home-outline" size={size} color={color} />
                    }
                    
                }} 
            />
            <Tab.Screen
                name="Bombeiro"
                component={Bombeiro}
                options={{
                   
                    tabBarIcon: ({color, size, focused}) => {
                        if(focused){
                        return <Ionicons name="flame" size={size} color={color} />
                        }
                        return <Ionicons name="flame-outline" size={size} color={color}/>
                    }
                    
                }} 
            />
        </Tab.Navigator>
    )
}

export default Routes;