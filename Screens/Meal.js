import { StatusBar } from "expo-status-bar";
import React, { useLayoutEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  StyleSheet,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import pics from "../images/stream.png";
import {
  Ionicons,
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
const numberOfColums = 2;
const WIDTH = Dimensions.get("window").width;

const mealData = [
  {
    id: 1,
    mealName: "Breakfast",
    numOfMeal: "230",
    img: require("../images/food_1.jpg"),
    screen: "Breakfast",
  },
  {
    id: 2,
    mealName: "Lunch",
    numOfMeal: "230",
    img: require("../images/food_2.jpg"),
    screen: "Lunch",
  },
  {
    id: 3,
    mealName: "Dinner",
    numOfMeal: "230",
    img: require("../images/food_3.jpg"),
    screen: "Dinner",
  },
  {
    id: 4,
    mealName: "Brunch",
    numOfMeal: "230",
    img: require("../images/food_4.jpg"),
    screen: "Brunch",
  },
];

const Meal = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: "#dddddd" },

      title: "Select a Meal",
      headerTintStyle: { color: "black" },
      headerTintColor: "black",
    });
  }, [navigation]);

  //////  meal box comntainer

  const mealContent = (item) => {
    return (
      <View style={styles.mealContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate(item.screen)}
        >
          <View style={styles.mealStyles}>
            <Image
              source={item.img}
              style={{
                height: 100,
                borderRadius: 100,
                width: 100,
                position: "absolute",
                top: -20,
                marginBottom: 10,
              }}
            />

            <View
              style={{
                alignSelf: "flex-start",
                paddingLeft: 20,
                paddingTop: 50,
              }}
            >
              <Text style={{ padding: 10, fontSize: 16 }}>
                {item.numOfMeal}
              </Text>
              <View
                style={{
                  backgroundColor: "black",
                  height: 1,
                  width: 70,
                  marginBottom: 5,
                }}
              />
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Text style={{ fontSize: 20 }}>{item.mealName}</Text>
                <AntDesign
                  name="right"
                  size={25}
                  color="black"
                  style={{ marginRight: 20 }}
                />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {/* <Text>The perfect natural meal you want to try...</Text> */}
      <Image
        source={pics}
        style={{
          height: 150,
          width: 150,
          marginTop: 25,
          resizeMode: "contain",
        }}
      />

      <FlatList
        style={{ marginTop: 10 }}
        data={mealData}
        renderItem={({ item }) => {
          return mealContent(item);
        }}
        keyExtractor={(item) => `${item.id}`}
        numColumns={numberOfColums}
      />

      {/* <View style={styles.down_Nav}>
        <AntDesign
          name="setting"
          size={25}
          color="black"
          style={{ marginRight: 20 }}
        />
        <AntDesign
          name="switcher"
          size={25}
          color="black"
          style={{ marginRight: 20 }}
        />
        <FontAwesome5
          name="user-circle"
          size={25}
          color="black"
          style={{ marginRight: 20 }}
        />
        <MaterialCommunityIcons
          name="cupboard"
          size={25}
          color="black"
          style={{ marginRight: 20 }}
        />
      </View> */}
    </View>
  );
};

export default Meal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#1A1A21",
  },

  mealContainer: {
    width: "50%",
  },

  mealStyles: {
    flex: 1,
    backgroundColor: "#dddddd",
    alignItems: "center",
    justifyContent: "center",
    height: 180,
    marginTop: 30,
    marginBottom: 30,
    margin: 10,
    borderRadius: 20,
    position: "relative",
  },

  down_Nav: {
    height: 60,
    marginTop: 10,
    padding: 10,
    backgroundColor: "grey",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
});
