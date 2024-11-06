import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import female from "@/assets/images/female.png";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/constants/colors";

const Page = () => {
  return (
    <Stack.Screen
      options={{
        headerTransparent: true,
        headerTitle: "",
        headerLeft: () => (
          <TouchableOpacity onPress={() => {}} style={{ marginLeft: 20 }}>
            <Image
              source={female}
              style={{ width: 40, height: 40, borderRadius: 10 }}
            />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity
            onPress={() => {}}
            style={{
              marginRight: 20,
              backgroundColor: colors.white,
              padding: 10,
              borderRadius: 10,
              shadowColor: "#171717",
              shadowOffset: {
                width: 2,
                height: 4,
              },
              shadowOpacity: 0.2,
              shadowRadius: 3,
            }}
          >
            <Ionicons name="notifications" size={20} color={colors.black} />
          </TouchableOpacity>
        ),
      }}
    />
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
