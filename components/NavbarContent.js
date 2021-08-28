import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import NavUserProfile from "./NavUserProfile";

const NavbarContent = (props) => {
  return (
    <View style={tw`flex-1`}>
      <NavUserProfile />
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <DrawerItem
        style={{ padding: 20 }}
        label="Logout"
        labelStyle={{ fontSize: 20, color: "black" }}
        icon={() => (
          <Icon name="logout" type="antdesign" size={28} color="#f64b29" />
        )}
      />
    </View>
  );
};

export default NavbarContent;

const styles = StyleSheet.create({});
