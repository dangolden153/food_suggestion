import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
// import HomeScreen from "../Screens/HomeScreen";
import NavbarContent from "./NavbarContent";
import NavUserProfile from "./NavUserProfile";
import Feeds from "./Feeds";
import Profile from "./Profile";
import Notification from "./Notification";
import MyPost from "./MyPost";
import CreatePost from "./CreatePost";
import Setting from "./Setting";
import { Icon } from "react-native-elements";
const Drawer = createDrawerNavigator();

const NavBar = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <NavbarContent {...props} />}
      screenOptions={{
        headerTitleAlign: "center",
        headerShown: false,
      }}
      drawerContentOptions={{
        labelStyle: { fontSize: 20, color: "black" },
        itemStyle: { paddingHorizontal: 20 },
      }}
    >
      <Drawer.Screen
        name="Feeds"
        component={Feeds}
        options={{
          title: "Feeds",
          drawerLabelStyle: { fontSize: 20, marginLeft: -10, color: "white" },
          drawerIcon: ({}) => (
            <Icon
              type="MaterialIcons"
              name="card-giftcard"
              size={30}
              color="#f7b02e"
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Profile",
          drawerIcon: () => (
            <Icon type="antdesign" name="user" size={30} color="#f64b29" />
          ),
        }}
      />

      <Drawer.Screen
        name="Notification"
        component={Notification}
        options={{
          title: "Notification",
          drawerIcon: () => (
            <Icon
              type="Ionicons"
              name="notifications"
              size={30}
              color="#f64b29"
            />
          ),
        }}
      />

      <Drawer.Screen
        name="MyPost"
        component={MyPost}
        options={{
          title: "Posts",
          drawerIcon: () => (
            <Icon
              type="materialicon"
              name="my-library-books"
              size={30}
              color="#f64b29"
            />
          ),
        }}
      />

      <Drawer.Screen
        name="CreatePost"
        component={CreatePost}
        options={{
          title: "Create Post",
          drawerIcon: () => (
            <Icon
              type="materialicon"
              name="my-library-add"
              size={30}
              color="#f64b29"
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Setting"
        component={Setting}
        options={{
          title: "Setting",
          drawerIcon: () => (
            <Icon type="ionicons" name="settings" color="#f64b29" size={30} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default NavBar;

const styles = StyleSheet.create({});
