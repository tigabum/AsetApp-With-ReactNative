import React, { useEffect } from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Icon from 'react-native-ionicons'
// import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { useColorScheme } from "react-native-appearance";
import AssetsNavigator from "./screens/Asset-Screens/AssetsNavigator";
import FavoriteListScreen from "./screens/Asset-Screens/FavoriteListScreen";
import Ionicons from 'react-native-vector-icons/Ionicons';


const Navigation = () => {
  const Tab = createBottomTabNavigator();
  const scheme = useColorScheme();
  const iconColor = scheme === "dark" ? "white" : "gray";

  return (
    <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
      <Tab.Navigator initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size, padding}) => {
            let iconName;
            if(route.name === 'Asset Lists'){
              iconName = focused ? 'home' : 'home-outline';
            }else if(route.name === 'Favourite') {
              iconName = focused 
              ? 'star'
              : 'star-outline'
            }
              return <Ionicons name={iconName} size={size} color="black" style={{paddingBottom: padding}}/>
          },
      })}
      >
        <Tab.Screen
          name="Asset Lists"
          component={AssetsNavigator}
          options={{
              tabBarLabel: 'Home',
            // tabBarIcon: ({ color, size }) => (
            //     <MaterialCommunityIcons name="home" color="red" size={10} />
            //   ),        
          }}
        />
        <Tab.Screen
          name="Favourite"
          component={FavoriteListScreen}
          options={{
              tabBarLabel:"Favourite",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    width: "100%",
    height: "100%",
  },
  tabIcon: {
    marginTop: 5,
  },
});

export default Navigation;

