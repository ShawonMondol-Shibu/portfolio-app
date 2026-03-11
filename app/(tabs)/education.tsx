import React, { useEffect, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Animated, Easing, ScrollView, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import tw from "twrnc";
import { profile } from "@/lib/profile";

export default function Education() {
  const fadeIn = useRef(new Animated.Value(0)).current;
  const translateUp = useRef(new Animated.Value(24)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeIn, {
        toValue: 1,
        duration: 500,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.timing(translateUp, {
        toValue: 0,
        duration: 500,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeIn, translateUp]);

  return (
    <SafeAreaView style={tw`bg-black flex-1`}>
      <ScrollView
        contentContainerStyle={tw`px-5 pt-6 pb-10`}
        showsVerticalScrollIndicator={false}
      >
        <Animated.View
          style={[
            tw`gap-4`,
            {
              opacity: fadeIn,
              transform: [{ translateY: translateUp }],
            },
          ]}
        >
          <Text style={tw`text-yellow-500 text-xs font-medium mb-2`}>
            EDUCATION
          </Text>
          <View style={tw`flex-row items-center gap-2 mb-2`}>
            <Ionicons name="school-outline" size={18} color="#facc15" />
            <Text style={tw`text-2xl font-bold text-white`}>Education</Text>
          </View>
          <Text style={tw`text-gray-300 mb-5`}>
            My academic journey and continuous learning in technology.
          </Text>

          <View style={tw`gap-4`}>
            {profile.education.map((item) => (
              <View
                key={`${item.degree}-${item.institution}`}
                style={tw`bg-zinc-900/80 border border-zinc-800 rounded-2xl p-4`}
              >
                <Text style={tw`text-white font-semibold text-lg mb-1`}>
                  {item.degree}
                </Text>
                <Text style={tw`text-yellow-500 text-sm mb-1`}>
                  {item.institution}
                </Text>
                <Text style={tw`text-gray-300 text-sm mb-2`}>
                  {item.period}
                </Text>
                <View style={tw`flex-row flex-wrap gap-2 mt-1`}>
                  {item.result && (
                    <View
                      style={tw`px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700`}
                    >
                      <Text style={tw`text-xs text-gray-200`}>
                        {item.result}
                      </Text>
                    </View>
                  )}
                  {item.board && (
                    <View
                      style={tw`px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700`}
                    >
                      <Text style={tw`text-xs text-gray-200`}>
                        Board: {item.board}
                      </Text>
                    </View>
                  )}
                </View>
              </View>
            ))}
          </View>
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
}

