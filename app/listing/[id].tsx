import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import listingData from "@/constants/destinations.json";
import { ListingType } from "@/types/listingTypes";
import { Dimensions } from "react-native";
import { Stack } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { colors } from "@/constants/colors";

const { width } = Dimensions.get("window");
const IMG_HEIGHT = 300;

const ListingDetails = () => {
  const { id } = useLocalSearchParams();
  const listing: ListingType = (listingData as ListingType[]).find(
    (listing) => listing.id === id
  );

  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {}}
              style={{
                backgroundColor: "rgba(255,255, 255, 0.5)",
                borderRadius: 10,
                padding: 4,
              }}
            >
              <View
                style={{
                  backgroundColor: colors.white,
                  padding: 6,
                  borderRadius: 10,
                }}
              >
                <Feather name="arrow-left" size={20} />
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <View>
        <Image source={{ uri: listing.image }} style={styles.image} />
        <Text>Hello everyone</Text>
      </View>
    </>
  );
};

export default ListingDetails;

const styles = StyleSheet.create({
  image: {},
});
