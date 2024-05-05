import { View, Text, Image } from "react-native";
import React from "react";

const HomeScreen = () => {
  return (
    <View className="flex- mx-auto">
      <Image
        className="mx-auto p-10"
        source={require("../../assets/images.jpeg")}
      />
    </View>
  );
};

export default HomeScreen;
