import { StyleSheet, Text, View } from "react-native";
import React from "react";

const BookMarks = () => {
  return (
    <View style={styles.container}>
      <Text>BookMarks</Text>
    </View>
  );
};

export default BookMarks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
