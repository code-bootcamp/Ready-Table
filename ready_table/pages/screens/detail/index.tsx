import React, { useState } from "react";
import DetailContainer from "../../../src/components/units/detail/detail.container";
import DetailHeader from "../../../src/components/units/detail/detail.header";
import { View, StyleSheet, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native-gesture-handler";
const DetailScreen = () => {
  const [detailing, setDetailing] = useState(true);

  const detail = () => setDetailing(true);
  const review = () => setDetailing(false);
  return (
    <View>
      <DetailHeader />
      <DetailContainer />
    </View>
  );
};

export default DetailScreen;
