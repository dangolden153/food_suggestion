import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { useNavigation } from "@react-navigation/native";

const Setting = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Text>SafeAreaView</Text>
      <TouchableOpacity>
        <Icon
          onPress={() => navigation.toggleDrawer()}
          type="materialicon"
          name="my-library-books"
          size={30}
          color="blue"
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Setting;

const styles = StyleSheet.create({});
