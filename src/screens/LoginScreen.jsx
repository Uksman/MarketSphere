import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useWarmUpBrowser } from "../../hooks/warmUpBrowser";
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";

WebBrowser.maybeCompleteAuthSession;

const LoginScreen = () => {
  // const deviceWidth = Dimensions.get("window").width;
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        //use SignIn or Signup for next steps
      }
    } catch (error) {
      console.error("Failed to start OAuth flow:", error);
    }
  }, []);

  console.log(onPress);
  return (
    <View className="flex-1">
      <Image
        source={require("../../assets/marketplace.jpg")}
        className="w-full h-[500px] object-cover"
      />
      <View className="p-3 mt-[-20px] bg-white rounded-t-3xl shadow-2xl">
        <Text className="text-3xl font-bold mt-6 text-center">
          MarketSphere
        </Text>
        <Text className="text-[18px] mt-4 text-center text-slate-400">
          Discover the future of buying and selling with MarketSphere, the
          ultimate community marketplace for sustainable trading.
        </Text>
        <TouchableOpacity
          onPress={onPress}
          className="bg-orange-500  rounded-full mt-20 p-3"
        >
          <Text className="text-lg text-center  text-white">Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
