import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";

export default function Index() {
  return (
    <SafeAreaView style={tw`h-screen bg-black h-full px-5`}>
      <View style={tw`gap-5 `}>
        <Text
          style={tw` m-auto py-2 px-5 shadow-md text-sm font-medium bg-yellow-500/20 text-center rounded-full text-yellow-500 animate-bounce`}
        >
          Available for new projects
        </Text>
        <Image
          source={require("../../assets/images/shawon.webp")}
          alt="hero image"
          width={1000}
          height={1000}
          style={tw`w-40 h-40 m-auto rounded-full shadow-lg border-2 border p-2 bg-yellow-500/80 shadow-lg shadow-yellow-500`}
        />
      </View>

      <Text style={tw`text-3xl text-center font-bold text-yellow-500`}>
        Hello, I&apos;m Shawon Mondol Shibu
      </Text>

      <Text style={tw`text-white text-lg`}>
        Frontend developer passionate about creating beautiful, functional, and
        user-friendly web applications using the latest technologies and best
        practices.
      </Text>
    </SafeAreaView>
  );
}
