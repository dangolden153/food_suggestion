import { StatusBar } from "expo-status-bar";
import React, { useLayoutEffect, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-elements/dist/buttons/Button";
import { Divider, ListItem } from "react-native-elements";
import { Image } from "react-native-elements/dist/image/Image";
import { Ionicons } from "@expo/vector-icons";
import { BtnText } from "../components/Button";
import { mealData } from "../components/data";
import { useDispatch, useSelector } from "react-redux";
import { foodType } from "../reducer/foodReducer/food_type";
import EmptyCupoard from "../components/EmptyCupoard";

const Cupboard = ({ navigation }) => {
  const { cupboard, foodRecipes } = useSelector((state) => state);
  // console.log(cupboard);
  const dispatch = useDispatch();

  const renderMealMenu = (item) => {
    const { mealName, description, img } = item;
    return (
      <View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.menuStyle}
        >
          <Image
            source={img}
            style={{ height: 100, width: 100, borderRadius: 20 }}
          />
          <View style={styles.right_flex}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 5,
              }}
            >
              <Text
                style={{ color: "#E5E5E5", fontSize: 20, fontWeight: "bold" }}
              >
                {mealName}
              </Text>
              <TouchableOpacity activeOpacity={0.5}>
                <Ionicons name="close" size={30} color="#dddddd" />
              </TouchableOpacity>
            </View>

            <Text
              numberOfLines={1}
              style={{
                color: "#dddddd",
                fontSize: 16,
                width: 200,
                overflow: "hidden",
              }}
            >
              {description}
            </Text>

            <View style={styles.iconBtn}>
              <Ionicons name="heart-outline" size={30} color="white" />
              <TouchableOpacity>
                <BtnText
                  title="kitchen"
                  // onPress={() => navigation.navigate("food details")}
                  onPress={() =>
                    dispatch({
                      type: foodType.FOOD_DATA,
                      payload: { description, mealName, id, img },
                    })
                  }
                />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <Divider style={{ marginVertical: 13 }} />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {cupboard.length > 0 ? (
        <FlatList
          style={{ padding: 20, flex: 1 }}
          data={cupboard}
          renderItem={({ item }) => {
            return renderMealMenu(item);
          }}
          keyExtractor={(item) => `${item.id}`}
        />
      ) : (
        <EmptyCupoard />
      )}

      {/* <EmptyCupoard /> */}
    </View>
  );
};

export default Cupboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A21",
  },
  menuStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 10,
  },

  right_flex: {},

  iconBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  btn: {
    color: "#F64B29",
    borderColor: "#F64B29",
  },
});
