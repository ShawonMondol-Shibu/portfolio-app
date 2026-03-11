import React, { useEffect, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Animated,
  Easing,
  Linking,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import tw from "twrnc";
import { profile } from "@/lib/profile";

const getContactIconName = (
  label: string
): keyof typeof Ionicons.glyphMap => {
  const lower = label.toLowerCase();
  if (lower.includes("phone")) return "call-outline";
  if (lower.includes("email")) return "mail-outline";
  if (lower.includes("location")) return "location-outline";
  if (lower.includes("facebook")) return "logo-facebook";
  if (lower.includes("linkedin")) return "logo-linkedin";
  return "chatbubble-ellipses-outline";
};

export default function Contact() {
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

  const handlePress = (href: string) => {
    Linking.openURL(href).catch(() => {
      // Silently fail if the link can’t be opened
    });
  };

  return (
    <SafeAreaView style={tw`bg-black flex-1`}>
      <ScrollView
        contentContainerStyle={tw`px-5 pt-6 pb-10`}
        keyboardShouldPersistTaps="handled"
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
          <Text style={tw`text-yellow-500 text-xs font-medium`}>
            GET IN TOUCH
          </Text>
          <View style={tw`flex-row items-center gap-2`}>
            <Ionicons name="paper-plane-outline" size={18} color="#facc15" />
            <Text style={tw`text-2xl font-bold text-white`}>
              Ready to bring your ideas to life?
            </Text>
          </View>
          <Text style={tw`text-gray-300`}>
            Ready to bring your ideas to life? Let&apos;s discuss your next
            project.
          </Text>

          <View style={tw`gap-3 mt-2`}>
            {profile.contactItems.map((item) => (
              <TouchableOpacity
                key={item.label}
                activeOpacity={0.8}
                onPress={() => handlePress(item.href)}
                style={tw`bg-zinc-900/80 border border-zinc-800 rounded-2xl px-4 py-3`}
              >
                <View style={tw`flex-row items-center gap-3`}>
                  <View
                    style={tw`w-9 h-9 rounded-full bg-yellow-500/10 items-center justify-center`}
                  >
                    <Ionicons
                      name={getContactIconName(item.label)}
                      size={18}
                      color="#facc15"
                    />
                  </View>
                  <View style={tw`flex-1`}>
                    <Text style={tw`text-gray-400 text-xs mb-1`}>
                      {item.label}
                    </Text>
                    <Text style={tw`text-white font-medium`}>
                      {item.value}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>

          <View style={tw`mt-4 gap-3`}>
            <Text style={tw`text-white font-semibold`}>
              Let&apos;s Work Together
            </Text>
            <Text style={tw`text-gray-400 text-sm`}>
              I&apos;m always interested in new opportunities and exciting
              projects. Feel free to reach out if you&apos;d like to
              collaborate!
            </Text>

            <View style={tw`gap-3 mt-2`}>
              <TextInput
                placeholder="Name"
                placeholderTextColor="#71717a"
                style={tw`bg-zinc-900/80 border border-zinc-800 rounded-xl px-4 py-3 text-white`}
              />
              <TextInput
                placeholder="Email"
                placeholderTextColor="#71717a"
                keyboardType="email-address"
                style={tw`bg-zinc-900/80 border border-zinc-800 rounded-xl px-4 py-3 text-white`}
              />
              <TextInput
                placeholder="Message"
                placeholderTextColor="#71717a"
                multiline
                numberOfLines={4}
                style={[
                  tw`bg-zinc-900/80 border border-zinc-800 rounded-xl px-4 py-3 text-white h-28`,
                  { textAlignVertical: "top" },
                ]}
              />
              <TouchableOpacity
                activeOpacity={0.85}
                style={tw`mt-1 bg-yellow-500 rounded-full py-3 items-center justify-center flex-row gap-2`}
              >
                <Ionicons name="send-outline" size={18} color="#000" />
                <Text style={tw`text-black font-semibold`}>Send Message</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
}

