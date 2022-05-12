import { View, Text, StyleSheet, Alert } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
// import {
//   Ionicons,
//   MaterialIcons,
//   MaterialCommunityIcons,
// } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import { useColorScheme } from "react-native-appearance";
import { useDispatch } from "react-redux";
import Ionicons from 'react-native-vector-icons/Ionicons';

import AssetListsScreen from "./AssetListsScreen";
import FavoriteListScreen from "./FavoriteListScreen";
import AssetDetailsScreen from "./AssetDetailsScreen";

const Stack = createStackNavigator();

const AssetsNavigator = () => {
  const dispatch = useDispatch();
  const scheme = useColorScheme();

  return (
    <Stack.Navigator
      initialRouteName="Assets Lists"
      screenOptions={{
        headerTitleStyle: {
          fontSize: 40,
          
        },
        gestureEnabled: true,
        headerShown:false,
      }}
    >
      <Stack.Screen
        name="Asset Lists"
        component={AssetListsScreen}
        // initialParams={{ displaySearchBar: false }}
        options={({ route, navigation }) => ({
          headerTitleAlign: "center",
        //   headerShown:false
        })}
      />
      <Stack.Screen
        name="Favorite Assets"
        component={FavoriteListScreen}
        // options={({ route, navigation }) => ({
        //   title: "Favour",
        //   headerTitleAlign: "center",
        // })}
      />
      <Stack.Screen
        name="AssetDetails"
        component={AssetDetailsScreen}
        options={({ route, navigation }) => ({
            headerShown:false,
            // headerBackTitle:"back",
            // headerBackTitleVisible​: true,
          headerLeft: () => (
            <Ionicons
              name="ios-list-outline"
              size={32}
              color={scheme === "dark" ? "white" : "black"}
              style={{ marginLeft: 10 }}
              onPress={() => navigation.goBack()}
            />
          ),
          headerTitleAlign: "center",
        })}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    padding: 5,
    borderWidth: 1,
  },
  text: {
    color: "black",
    padding: 5,
  },
});

export default AssetsNavigator;
