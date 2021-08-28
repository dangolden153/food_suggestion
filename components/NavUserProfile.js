import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Image } from "react-native-elements/dist/image/Image";
import tw from "tailwind-react-native-classnames";
import { Ionicons } from "@expo/vector-icons";
import pics from "../images/profile.jpg";

const NavUserProfile = () => {
  return (
    <SafeAreaView style={tw` bg-gray-200 py-10 items-center`}>
      <View style={styles.profile}>
        <View style={{ flexDirection: "column" }}>
          <Image
            rounded
            source={pics}
            style={{
              height: 150,
              width: 150,
              borderRadius: 100,
              marginBottom: 15,
            }}
          />

          <View style={tw`items-center`}>
            {/* user name */}
            <Text
              style={{
                color: "black",
                fontSize: 20,
                fontWeight: "bold",
                letterSpacing: 1,
                marginBottom: 9,
              }}
            >
              Dan Golden
            </Text>

            {/* follwers and following */}
            <View style={styles.followers_container}>
              <View style={tw`items-center `}>
                <Text style={{ color: "black", fontSize: 19 }}>1234</Text>
                <Text style={{ color: "black", fontSize: 18 }}>follwers</Text>
              </View>

              <View style={tw`items-center `}>
                <Text style={{ color: "black", fontSize: 19 }}>432</Text>
                <Text style={{ color: "black", fontSize: 18 }}>following</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NavUserProfile;

const styles = StyleSheet.create({
  followers_container: {
    flexDirection: "row",
    width: 150,
    justifyContent: "space-between",
  },
});
