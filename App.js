import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import LoginScreen from "./src/screens/LoginScreen";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./src/Navigation/TabNavigation";

export default function App() {
  return (
    <ClerkProvider publishableKey="pk_test_Y2xlYXIta2lkLTM1LmNsZXJrLmFjY291bnRzLmRldiQ">
      <View className="flex-1 bg-white">
        <StatusBar style="auto" />
        <SignedIn>
          <NavigationContainer>
            <TabNavigation />
          </NavigationContainer>
        </SignedIn>
        <SignedOut>
          <LoginScreen />
        </SignedOut>
      </View>
    </ClerkProvider>
  );
}
