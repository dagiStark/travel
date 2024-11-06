import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";

const Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="compass" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Category"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="space-dashboard" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Search"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="search" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="BookMarks"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="bookmark" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
