import React from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./MainNavigation";
import DrawerNavigation from "./DrawerNavigation";
import { useSelector } from "react-redux";
import AuthNavigation from "./AuthNavigation";

const RootNavigation = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <NavigationContainer>
      {/* <MainNavigation /> */}
      {isLoggedIn ? <DrawerNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default RootNavigation;
