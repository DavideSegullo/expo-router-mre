import { Tabs } from "expo-router";
import Head from "expo-router/head";

export default function RootLayout() {
  return (
    <>
      {/* <Head>
        <title>Expo Twitter</title>
        <meta
          name="description"
          content="A Twitter clone built with Expo Router"
        />
        <meta
          property="og:description"
          content="A Twitter clone built with Expo Router"
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="expo:handoff" content="true" />
        <meta property="expo:spotlight" content="true" />
      </Head> */}

      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: "rgb(29, 155, 240)",
        }}
      >
        <Tabs.Screen
          name="(index)"
          options={{
            title: "Home",
            /* tabBarIcon: makeIcon("home", "home-active"), */
          }}
        />
        <Tabs.Screen
          name="(search)"
          options={{
            title: "Search",
            /* tabBarIcon: makeIcon("explore", "explore-active"), */
          }}
        />
        <Tabs.Screen
          name="(profile)"
          options={{
            title: "Profile",
            /* tabBarIcon: makeIcon("profile", "profile-active"), */
          }}
        />
      </Tabs>
    </>
  );
}
