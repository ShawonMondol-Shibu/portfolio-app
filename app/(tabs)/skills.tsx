import React, { useEffect, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Animated, Easing, ScrollView, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import tw from "twrnc";
import { profile } from "@/lib/profile";

export default function Skills() {
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
            tw`gap-3`,
            {
              opacity: fadeIn,
              transform: [{ translateY: translateUp }],
            },
          ]}
        >
          <Text style={tw`text-yellow-500 text-xs font-medium mb-2`}>
            TECHNICAL SKILLS
          </Text>
          <View style={tw`flex-row items-center gap-2 mb-2`}>
            <Ionicons name="sparkles" size={18} color="#facc15" />
            <Text style={tw`text-2xl font-bold text-white`}>
              Technical Skills
            </Text>
          </View>
          <Text style={tw`text-gray-300 mb-5`}>
            Expertise in modern frontend technologies and frameworks for
            building exceptional web experiences.
          </Text>

          <View style={tw`gap-3`}>
            {profile.technicalSkills.map((skill) => (
              <View
                key={skill.name}
                style={tw`bg-zinc-900/80 border border-zinc-800 rounded-2xl p-4 flex-row gap-3`}
              >
                <View
                  style={tw`w-9 h-9 rounded-full bg-yellow-500/10 items-center justify-center`}
                >
                  <Ionicons name="checkmark-circle" size={20} color="#facc15" />
                </View>
                <View style={tw`flex-1`}>
                  <Text style={tw`text-white font-semibold mb-1`}>
                    {skill.name}
                  </Text>
                  <Text style={tw`text-gray-300 text-sm`}>
                    {skill.description}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
}