import { StatusBar } from "expo-status-bar";
import React, { useLayoutEffect, useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, TextInput } from "react-native";
import { Button } from "react-native-elements/dist/buttons/Button";
import { Divider, SearchBar } from "react-native-elements";
import { Image } from "react-native-elements/dist/image/Image";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector, connect } from "react-redux";
import { foodType } from "../reducer/foodReducer/food_type";
import { AddFoodToCupboard } from "../reducer/foodReducer/food_action";
import { useNavigation } from "@react-navigation/native";
const mealData = [
  {
    id: 1,
    mealName: "Salad",
    description: "react native elements dist image",
    img: require("../images/food_1.jpg"),
  },
  {
    id: 2,
    mealName: "Fried rice",
    description:
      "In this video, you will learn React Native and AWS Amplify from scratch by building a cross-platform (ios and android), full-stack Tinder clone. This project is a great way to get your foot in the door with hybrid, cross-platform mobile development with React Native and AWS Amplify. This is a beginner-friendly tutorial, and all the steps and concepts will be explained in detail. Tinder clone. This project is a great way to get your foot in the door with hybrid, cross-platform mobile development with React Native and AWS Amplify. This is a beginner-friendly tutorial, and all the steps and concepts will be explained in detail. door with hybrid, cross-platform mobile development with React Native and AWS Amplify. This is a beginner-friendly tutorial, and all the steps and concepts will be explained in detail. Tinder clone. This project is a great way to get your foot in the door with hybrid, cross-platform mobile development with React Native and AWS Amplify. This is a beginner-friendly tutorial, and all the steps and concepts will be explained in detail.",
    img: require("../images/food_2.jpg"),
  },
  {
    id: 3,
    mealName: "Vegetable",
    description:
      "learn React Native and AWS Amplify from scratch by building a cross-platform (ios and android), full-stack Tinder clone. This project is a great way to get your foot in the door with hybrid, cross-platform mobile development with React Native and AWS Amplify. This is a beginner-friendly tutorial, and all the steps and concepts will be explained in detail. Tinder clone. This project is a great way to get your foot in the door with hybrid, cross-platform mobile development with React Native and AWS Amplify. This is a beginner-friendly tutorial, and all the steps and concepts will be explained in detail. door with hybrid, cross-platform mobile development with React Native and AWS Amplify. This is a beginner-friendly tutorial, and all the steps and concepts will be explained in detail. Tinder clone. This project is a great way to get your foot in the door with hybrid, cross-platform mobile development with React Native and AWS Amplify. This is a beginner-friendly tutorial, and all the steps and concepts will be explained in detail react native elements dist image",
    img: require("../images/food_3.jpg"),
  },
  {
    id: 4,
    mealName: "Bread",
    description: "react native elements dist image",
    img: require("../images/food_4.jpg"),
  },
  {
    id: 5,
    mealName: "Fried rice",
    description: "react native elements dist image",
    img: require("../images/food_5.jpg"),
  },
  {
    id: 6,
    mealName: "Vegetable",
    description: "react native elements dist image",
    img: require("../images/food_6.jpg"),
  },
  {
    id: 7,
    mealName: "Bread",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollit quisquam ipsa itaque, quas posLorem ipsum dolor sit, amet consectetur adipisicing elit. Mollit quisquam ipsa itaque, quas posLorem ipsum dolor sit, amet consectetur adipisicing elit. Mollit quisquam ipsa itaque, quas possimus voluptates? Vitae facilis omnisin, distinctio iusto ex dolor nostrum modi totam temporibus ut quosipsam facere natus beatae amet officia odio aliquid, est pariaturasperiores? Quasi corporis molestiae doloribus explicabo vitaeprovident autem suscipit nisi.",
    img: require("../images/food_1.jpg"),
  },
];

const Brunch = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [searchBAar, setSearchBar] = useState(false);
  // const navigation = useNavigation();
  const openSearchBAar = () => setSearchBar(true);
  const closeSearchBAar = () => setSearchBar(false);
  const { cupboard } = useSelector((state) => state);
  // console.log(cupboard);

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: "#F64B29" },
      headerTitleStyle: { color: "white" },
      headerTintColor: "white",
      title: "Brunch",
      headerRight: () => (
        <View
          style={{
            width: 100,
            paddingRight: 15,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity activeOpacity={0.5}>
            <Ionicons
              onPress={openSearchBAar}
              name="search"
              size={30}
              color="white"
            />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.5}>
            <Ionicons
              onPress={() => navigation.navigate("cupboard")}
              name="menu"
              size={30}
              color="white"
            />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {searchBAar ? (
        <View style={styles.inputContainer}>
          <TouchableOpacity activeOpacity={0.5}>
            <Ionicons
              onPress={closeSearchBAar}
              name="close"
              size={30}
              color="white"
            />
          </TouchableOpacity>

          <TextInput
            type="text"
            placeholder="Search"
            value={search}
            onChange={(text) => setSearch(text)}
            style={styles.input}
            placeholderTextColor={"grey"}
          />
        </View>
      ) : null}

      {/* /////////// maped items */}
      <FlatList
        style={{ padding: 20 }}
        data={mealData}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item: { img, mealName, description, id }, item }) => (
          <View style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.menuStyle}>
              <Image
                source={img}
                style={{ height: 80, width: 80, borderRadius: 20 }}
              />
              <View style={styles.right_flex}>
                <Text style={{ color: "white", fontSize: 20 }}>{mealName}</Text>
                <Text
                  numberOfLines={1}
                  style={{ color: "white", fontSize: 16, width: 230 }}
                >
                  {description}
                </Text>

                <Button
                  title="kitchen"
                  titleStyle={{ fontSize: 13 }}
                  containerStyle={styles.btnText}
                  onPress={() => {
                    /* 1. Navigate to the Details route with params */
                    navigation.navigate("MealContent", {
                      item,
                    });
                  }}
                />
              </View>
            </ScrollView>
            <Divider style={{ marginVertical: 10 }} />
          </View>
        )}
      />
    </View>
  );
};

const mapDispatchToProps = (Dispatch) => ({
  addFood: (item) => Dispatch(AddFoodToCupboard(item)),
});

export default connect(null, mapDispatchToProps)(Brunch);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A21",
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  menuStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    width: "100%",
  },

  right_flex: {
    width: "60%",
  },

  inputContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 10,
    justifyContent: "center",
  },
  input: {
    backgroundColor: "white",
    width: "80%",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
    fontSize: 17,
    marginLeft: 15,
  },

  btnText: {
    borderWidth: 1,
    borderColor: "#F64B29",
    borderRadius: 10,
    width: 75,
    alignSelf: "flex-end",
    marginTop: 10,
  },
});
