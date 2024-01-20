import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar,
  StyleSheet,
  Button,
  Dimensions,
  Modal,
} from "react-native";

import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home";
import Player from "../Screens/Player";
import Playlist from "../Screens/Playlist";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  // const [showDrawer, setShowDrawer] = useState(false);

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        // tabBarShowLabel: false,
        tabBarLabelStyle: { fontSize: 15, marginBottom: 5 },
        tabBarInactiveTintColor: "black",
        tabBarActiveTintColor: "#ff6666",
        tabBarStyle: {
          height: 55,
          position: "absolute",
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Songs"
        component={Home}
        options={{
          tabBarLabel: "Songs",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="headset" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Player"
        component={Player}
        options={{
          tabBarLabel: "Player",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="compact-disc" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Playlist"
        component={Playlist}
        options={{
          tabBarLabel: "Playlist",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="library-music" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
