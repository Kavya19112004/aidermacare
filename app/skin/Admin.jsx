
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";
import LogoutScreen from "./LogoutScreen";

const Tab = createBottomTabNavigator();

export default function Admin({ route }) {
  const { user } = route.params; // 👈 received from login

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#FF8A65",
          height: 60,
        },
        tabBarIcon: ({ color, size }) => {
          let icon;
          if (route.name === "Predict") icon = "home";
          if (route.name === "Profile") icon = "person";
          if (route.name === "Logout") icon = "log-out";
          return <Ionicons name={icon} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Predict"
        children={() => <HomeScreen user={user} />}
      />
      <Tab.Screen
        name="Profile"
        children={() => <ProfileScreen user={user} />}
      />
      <Tab.Screen name="Logout" component={LogoutScreen} />
    </Tab.Navigator>
  );
}
