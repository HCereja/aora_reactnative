import { TouchableOpacity, Text } from "react-native";
import React from "react";
import { opacity } from "react-native-reanimated/lib/typescript/Colors";
import { StatusBar } from "expo-status-bar";

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}: any) => {
  return (
    <TouchableOpacity
      className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles}
      ${isLoading ? "opacity-50" : ""}`}
      disabled={isLoading}
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
        {title}
      </Text>
      <StatusBar backgroundColor="#161622" style="light" />
    </TouchableOpacity>
  );
};

export default CustomButton;
