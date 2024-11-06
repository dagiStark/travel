import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useRef } from "react";
import { colors } from "@/constants/colors";
import { destinationCategories } from "@/constants/index";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CategoryButtons = () => {
  const itemRef = useRef(Array(destinationCategories.length).fill(null));
  const scrollRef = (useRef < ScrollView) | (null > null);
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleSelectCategory = (index) => {
    setActiveIndex(index);
    const selected = itemRef.current[index];
    selected?.measure((x) => {
      scrollRef.current?.scrollTo({
        x: x,
        y: 0,
        animated: true,
      });
    });
  };

  return (
    <View>
      <Text style={styles.title}>Categories</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 20,
          paddingVertical: 10,
          marginBottom: 10,
        }}
      >
        {destinationCategories.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={
              activeIndex === index
                ? styles.categoryBtnActive
                : styles.categoryBtn
            }
            onPress={() => handleSelectCategory(index)}
            ref={(el) => (itemRef.current[index] = el)}
          >
            <MaterialCommunityIcons
              name={item.iconName}
              size={20}
              color={activeIndex === index ? colors.white : colors.black}
            />
            <Text
              style={
                activeIndex === index
                  ? styles.categoryBtnTxtActive
                  : styles.categoryBtnTxt
              }
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default CategoryButtons;

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.black,
  },
  categoryBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: "#333333",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  categoryBtnTxt: {
    marginLeft: 5,
    color: colors.black,
  },
  categoryBtnTxtActive: {
    marginLeft: 5,
    color: colors.white,
  },
  categoryBtnActive: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primaryColor,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: "#333333",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
});
