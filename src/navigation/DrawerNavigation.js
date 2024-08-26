import React from "react";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import MainNavigation from "./MainNavigation";
import { colors } from "../colors/colors";
import PostedSignals from "../screens/PostedSignals";
import { clearUserData } from "../utils/LogoutUser";

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} style={{}}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close menu"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem label="Logout" onPress={clearUserData} />
      {/* <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      /> */}
    </DrawerContentScrollView>
  );
}

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      // defaultStatus="open"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="Home screen" component={MainNavigation} />
      <Drawer.Screen name="Signals" component={PostedSignals} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
