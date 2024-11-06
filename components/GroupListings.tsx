import {
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import React from "react";
import { GroupType } from "@/types/groupTypes";
import { colors } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";

const GroupListings = ({ listings }: { listings: GroupType[] }) => {
  const renderItem: ListRenderItem<GroupType> = ({ item }) => {
    return (
      <View style={styles.item}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View>
          <Text style={styles.itemName}>{item.name}</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="star" size={20} color={colors.primaryColor} />
            <Text style={styles.itemRating}>{item.rating}</Text>
            <Text style={styles.itemReviews}>{item.reviews}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View>
      <Text style={styles.title}>Top Travel Groups</Text>
      <FlatList
        data={listings}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default GroupListings;

const styles = StyleSheet.create({
  item: {
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 10,
    marginRight: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    color: colors.black,
    marginBottom: 10,
    marginTop: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.black,
    marginBottom: 10,
  },
  itemRating: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.black,
    marginLeft: 5,
  },
  itemReviews: {
    fontSize: 14,
    fontWeight: "600",
    color: "#999",
    marginBottom: 10,
  },
});
