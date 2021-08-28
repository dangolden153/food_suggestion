import { StatusBar } from "expo-status-bar";
import React, { createContext, useContext, useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Context } from "./context";
import { Provider } from "react-redux";
import { createStore } from "redux";
import foodReducer from "./reducer/foodReducer/FoodReducer";

import Sign_up from "./Screens/SignUp";
import Sign_in from "./Screens/SignIn";
import CountryList from "./Screens/CountryList";
import Meal from "./Screens/Meal";
import Profile from "./Screens/Profile";
import Popular from "./Screens/PopularFood";
import ForgotPassword from "./Screens/ForgotPassword";
import Cupboard from "./Screens/Cupboard";
import Breakfast from "./Screens/Breakfast";
import Lunch from "./Screens/Lunch";
import Dinner from "./Screens/Dinner";
import Brunch from "./Screens/Brunch";
import FirstOnboardingScreen from "./Screens/FirstOnboardingScreen";
import SecondOnboardingScreen from "./Screens/SecondOnboardingScreen";
import ThirdOnboardingScreen from "./Screens/ThirdOnboardingScreen";
import MealContent from "./Screens/MealContent";
import NavBar from "./components/NavBar";
// import AsyncStorage from "@react-native-community/async-storage";

const store = createStore(foodReducer);

const Stack = createStackNavigator();

export default function App() {
  const [state, setState] = useState(1);
  const [isloggedIn, setIsloggedIn] = useState(null);

  // useEffect(async () => {
  //   const token = await AsyncStorage.getItem("token");
  //   console.log(token);
  //   if (token) {
  //     setIsloggedIn(true);
  //   } else {
  //     setIsloggedIn(false);
  //   }
  // }, [setIsloggedIn]);

  return (
    <Provider store={store}>
      <Context.Provider value={{ setState, state }}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Meal"
            screenOptions={{ headerTitleAlign: "center" }}
          >
            {/* <Stack.Screen name="signup" component={Sign_up} />
            <Stack.Screen name="signin" component={Sign_in} />
            <Stack.Screen name="country-list" component={CountryList} /> */}
            <Stack.Screen
              name="NavBar"
              component={NavBar}
              options={{ headerShown: false }}
            />

            <Stack.Screen name="meal" component={Meal} />
            <Stack.Screen name="Breakfast" component={Breakfast} />
            <Stack.Screen name="Lunch" component={Lunch} />
            <Stack.Screen name="Dinner" component={Dinner} />
            <Stack.Screen name="Brunch" component={Brunch} />
            <Stack.Screen name="cupboard" component={Cupboard} />

            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Popular" component={Popular} />
            <Stack.Screen
              name="FirstOnboardingScreen"
              component={FirstOnboardingScreen}
            />
            <Stack.Screen
              name="SecondOnboardingScreen"
              component={SecondOnboardingScreen}
            />
            <Stack.Screen
              name="ThirdOnboardingScreen"
              component={ThirdOnboardingScreen}
            />
            <Stack.Screen name="MealContent" component={MealContent} />
            {/* {isloggedIn ? (
              <>
                <Stack.Screen name="country-list" component={CountryList} />
                <Stack.Screen name="meal" component={Meal} />
                <Stack.Screen name="menu" component={Menu} />
                <Stack.Screen name="cupboard" component={Cupboard} />
                <Stack.Screen name="Details" component={FoodDetail} />

                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Popular" component={Popular} />
              </>
            ) : (
              <>
                <Stack.Screen name="signup" component={Sign_up} />
                <Stack.Screen name="signin" component={Sign_in} />
                <Stack.Screen
                  name="forgotPassword"
                  component={ForgotPassword}
                />
              </>
            )} */}
          </Stack.Navigator>
        </NavigationContainer>
      </Context.Provider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// builds that remain

// redux done _/
// Screens
// popular Meals  _/
// forgot Password _/
// cupboard  _/
// login  _/
// description  _/

// Component
// shotening the text  _/
// no post on the profile screen _/
// no favourite recipes _/
// add to cupboard functionality _/
//check how to style textInput color on stackoverflow _?

//  functionalities
// search .. check how to make use of search input feild
// remove food from the favourite list
// open up a search component screen
// display the number of favourite item picked
/// check how to use .env
