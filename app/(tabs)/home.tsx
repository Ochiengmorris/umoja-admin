import EventList from "@/components/EventList";
import { COLORS, MARGIN } from "@/constants/sizes";
import { useUser } from "@clerk/clerk-expo";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const { user } = useUser();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}

      <View
        style={{
          // backgroundColor: COLORS.black + "1,
          paddingVertical: MARGIN.medium,
          paddingHorizontal: MARGIN.medium,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: MARGIN.small * 2,
          }}
        >
          <Image
            source={{
              // uri: "https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVuJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
              uri: user?.imageUrl ?? "",
            }}
            style={{ width: 70, height: 70, borderRadius: 15 }}
          />
          <View style={{}}>
            <Text
              style={{
                color: COLORS.grey,
                fontSize: 16,
                fontWeight: "400",
                fontFamily: "PoppinsRegular",
              }}
            >
              Good Morning,
            </Text>
            <Text
              style={{
                color: COLORS.primary,
                fontSize: 34,
                fontFamily: "PoppinsBold",
                textTransform: "capitalize",
              }}
            >
              {user?.username ?? user?.firstName ?? ""}
            </Text>
          </View>
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            backgroundColor: COLORS.white,
            borderRadius: 10,
            paddingHorizontal: 10,
            paddingVertical: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FontAwesome name="bell" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View
        style={{
          marginTop: MARGIN.medium * 2,
          flex: 1,
          backgroundColor: COLORS.lightBlue + "",
          borderTopEndRadius: 25,
          borderTopStartRadius: 25,
        }}
      >
        {/* section title */}
        <View
          style={{
            paddingHorizontal: MARGIN.medium,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: MARGIN.large,
          }}
        >
          <Text
            style={{
              color: COLORS.black,
              fontSize: 24,
              fontFamily: "PoppinsMedium",
            }}
          >
            My Events
          </Text>

          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: MARGIN.small,
              backgroundColor: COLORS.primary,
              borderRadius: 10,
              paddingHorizontal: 15,
              paddingVertical: 13,
            }}
            onPress={() => router.push("/(event)/create-event")}
          >
            <FontAwesome name="plus" size={14} color="#fff" />
            <Text
              style={{
                color: COLORS.white,
                fontSize: 14,
                fontFamily: "PoppinsMedium",
              }}
            >
              Create Event
            </Text>
          </TouchableOpacity>
        </View>

        <EventList />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
});
