import React from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./MainNavigation";
import DrawerNavigation from "./DrawerNavigation";

const RootNavigation = () => {
  return (
    <NavigationContainer>
      {/* <MainNavigation /> */}
      <DrawerNavigation />
    </NavigationContainer>
  );
};

export default RootNavigation;
