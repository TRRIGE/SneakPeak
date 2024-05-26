import { Text, View } from "react-native";
import { Tabs, Redirect } from "expo-router";

import { icons } from "../../constants";

const Tabslayout = () => {
  const TabIcon = ({ icon, color, focused, name }) => {
    <View>
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
    </View>;
  };

  return (
    <>
      <Tabs>
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />;
            },
          }}
        />
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />;
            },
          }}
        />
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />;
            },
          }}
        />
        <Tabs.Screen
          name="bookmark"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />;
            },
          }}
        />
      </Tabs>
    </>
  );
};

export default Tabslayout;
