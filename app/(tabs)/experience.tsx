import React, { useEffect, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Animated, Easing, ScrollView, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import tw from "twrnc";
import { profile } from "@/lib/profile";

export default function Experience() {
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
            EXPERIENCE
          </Text>
          <View style={tw`flex-row items-center gap-2 mb-2`}>
            <Ionicons name="briefcase-outline" size={18} color="#facc15" />
            <Text style={tw`text-2xl font-bold text-white`}>Experience</Text>
          </View>
          <Text style={tw`text-gray-300 mb-5`}>
            Professional experience and training in web development.
          </Text>

          <View style={tw`gap-4`}>
            {profile.experience.map((item) => (
              <View
                key={`${item.title}-${item.company}`}
                style={tw`bg-zinc-900/80 border border-zinc-800 rounded-2xl p-4`}
              >
                <Text style={tw`text-white font-semibold text-lg mb-1`}>
                  {item.title}
                </Text>
                <Text style={tw`text-yellow-500 text-sm mb-1`}>
                  {item.company}
                </Text>
                <Text style={tw`text-gray-300 text-sm mb-2`}>
                  {item.period}
                </Text>
                <Text style={tw`text-gray-300 text-sm mb-3`}>
                  {item.description}
                </Text>
                <View style={tw`flex-row flex-wrap gap-2`}>
                  {item.technologies.map((tech) => (
                    <View
                      key={tech}
                      style={tw`px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700 flex-row items-center gap-1`}
                    >
                      <Ionicons
                        name="pricetag-outline"
                        size={12}
                        color="#d4d4d8"
                      />
                      <Text style={tw`text-gray-200 text-xs`}>{tech}</Text>
                    </View>
                  ))}
                </View>
              </View>
            ))}
          </View>
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
}

