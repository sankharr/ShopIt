import { createAppContainer, createSwitchNavigator } from "react-navigation"
// import { createStackNavigator } from "react-navigation-stack"
import LoadingScreen from "./screens/LoadingScreen"
// import RegisterScreen from "./screens/RegisterScreen"
// import LoginScreen from "./screens/LoginScreen"

import * as firebase from "firebase"


const { createStackNavigator } = require("react-navigation-stack");
const { default: HomeScreen } = require("./screens/HomeScreen");
const { default: LoginScreen } = require("./screens/LoginScreen");
const { default: RegisterScreen } = require("./screens/RegisterScreen");

var firebaseConfig = {
  apiKey: "AIzaSyCt49bc1tFEDshgwq9OkK8b8Vh6Q60FXfY",
  authDomain: "shopit-41db7.firebaseapp.com",
  databaseURL: "https://shopit-41db7.firebaseio.com",
  projectId: "shopit-41db7",
  storageBucket: "shopit-41db7.appspot.com",
  messagingSenderId: "1038747243665",
  appId: "1:1038747243665:web:f23a1e2b8c7d6d057f1b30",
  measurementId: "G-KR0BZEGC5Q"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const AppStack = createStackNavigator({
  Home: HomeScreen
})

const AuthStack = createStackNavigator({
  Login : LoginScreen,
  Register : RegisterScreen
})

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading"
    }
  )
);