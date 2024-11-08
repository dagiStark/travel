import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import { Stack } from "expo-router";
import female from "@/assets/images/female.png";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/constants/colors";
import { useHeaderHeight } from "@react-navigation/elements";
import CategoryButtons from "@/components/CategoryButtons";
import Listings from "@/components/Listings";
import listingData from "@/constants/destinations.json";
import groupData from "@/constants/group.json";
import GroupListings from "@/components/GroupListings";

const Page = () => {
  const headerHeight = useHeaderHeight();
  const [category, setCategory] = React.useState("All");

  const onCategoryChange = (category: string) => {
    console.log(category);
    setCategory(category);
  };

  return (
    <>
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
      <View style={[styles.container, { paddingTop: headerHeight }]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.headingTxt}>Explore the Beautiful world!</Text>
          <View style={styles.searchSectionWrapper}>
            <View style={styles.searchBar}>
              <Ionicons
                name="search"
                size={18}
                style={{ marginRight: 10 }}
                color={colors.black}
              />
              <TextInput placeholder="search..." />
            </View>
            <TouchableOpacity onPress={() => {}} style={styles.filterBtn}>
              <Ionicons name="options" size={28} color={colors.white} />
            </TouchableOpacity>
          </View>

          <CategoryButtons onCategoryChange={onCategoryChange} />
          <Listings listings={listingData} category={category} />
          <GroupListings listings={groupData} />
        </ScrollView>
      </View>
    </>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.bgColor,
  },
  headingTxt: {
    fontSize: 28,
    fontWeight: "800",
    color: colors.black,
    marginTop: 10,
  },
  searchSectionWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 10,
    shadowColor: "#171717",
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginRight: 10,
  },
  filterBtn: {
    backgroundColor: colors.primaryColor,
    padding: 10,
    borderRadius: 10,
    shadowColor: "#171717",
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
