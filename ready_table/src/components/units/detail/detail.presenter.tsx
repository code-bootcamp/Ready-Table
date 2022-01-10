import React from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const DetailUI = props => {
  return (
    <ScrollView>
      <Text>{props.data?.fetchUseditem.name}</Text>
    </ScrollView>
  );
};

export default DetailUI;
