import React, { useEffect, useRef } from "react";
import { Animated, Easing, Image, Linking, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import tw from "twrnc";
import { profile } from "@/lib/profile";

export default function Index() {
  const router = useRouter();
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

  const handleViewWork = () => {
    router.push("/projects");
  };

  const handleDownloadResume = () => {
    Linking.openURL(profile.resumeUrl).catch(() => {
      // ignore open errors
    });
  };

  return (
    <SafeAreaView style={tw`bg-black flex-1`}>
      <ScrollView
        contentContainerStyle={tw`px-5 pt-6 pb-10`}
        showsVerticalScrollIndicator={false}
      >
        <Animated.View
          style={[
            tw`gap-6`,
            {
              opacity: fadeIn,
              transform: [{ translateY: translateUp }],
            },
          ]}
        >
          <View style={tw`items-center gap-4`}>
          <Text
            style={tw`px-5 py-2 shadow-2xl shadow-yellow-500 text-xs font-semibold bg-yellow-500/20 text-center rounded-full text-yellow-500 uppercase tracking-widest`}
          >
            {profile.status}
          </Text>
          <Image
            source={require("../../assets/images/shawon.webp")}
            alt="Portrait"
            width={160}
            height={160}
            style={tw`w-40 h-40 rounded-full border-2 border-yellow-500/80 p-1 bg-yellow-500/10 shadow-2xl shadow-yellow-500`}
          />
        </View>

        <View style={tw`gap-2`}>
          <Text style={tw`text-3xl text-center font-bold text-white`}>
            Hi, I am{" "}
            <Text style={tw`text-yellow-500`}>{profile.name}</Text>
          </Text>
          <View style={tw`flex-row items-center justify-center gap-2`}>
            <Ionicons name="location-outline" size={16} color="#a1a1aa" />
            <Text style={tw`text-center text-zinc-300 text-base`}>
              {profile.role} · {profile.location}
            </Text>
          </View>
        </View>

        <Text style={tw`text-gray-300 text-base`}>
          {profile.heroTagline}
        </Text>

        <View style={tw`flex-row flex-wrap gap-2 mt-2`}>
          <View
            style={tw`px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700 flex-row items-center gap-2`}
          >
            <Ionicons name="time-outline" size={14} color="#e4e4e7" />
            <Text style={tw`text-xs text-gray-200`}>
              {profile.yearsOfExperience}+ years experience
            </Text>
          </View>
          <View
            style={tw`px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700 flex-row items-center gap-2`}
          >
            <Ionicons name="code-slash" size={14} color="#e4e4e7" />
            <Text style={tw`text-xs text-gray-200`}>Focused on frontend</Text>
          </View>
        </View>

        <View style={tw`flex-row gap-3 mt-4`}>
          <TouchableOpacity
            style={tw`flex-1 bg-yellow-500 rounded-full py-3 items-center justify-center`}
            activeOpacity={0.85}
            accessibilityRole="button"
            accessibilityLabel="View my work"
            onPress={handleViewWork}
          >
            <View style={tw`flex-row items-center gap-2`}>
              <Ionicons name="eye-outline" size={18} color="#000" />
              <Text style={tw`text-black font-semibold`}>View My Work</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`flex-1 border border-yellow-500 rounded-full py-3 items-center justify-center`}
            activeOpacity={0.85}
            accessibilityRole="button"
            accessibilityLabel="Download resume"
            onPress={handleDownloadResume}
          >
            <View style={tw`flex-row items-center gap-2`}>
              <Ionicons name="download-outline" size={18} color="#facc15" />
              <Text style={tw`text-yellow-500 font-semibold`}>
                Download Resume
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
}
