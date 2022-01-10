import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import MapContainer from "../../../src/components/commons/map/Map";
import SearchContainer from "../../../src/components/units/search/search.container";

const SearchScreen = () => {
  const [searching, setSearching] = useState(true);

  const search = () => setSearching(true);
  const map = () => setSearching(false);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity onPress={search}>
          <Text
            style={{ ...styles.btnText, color: searching ? "tomato" : "black" }}
          >
            검색
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={map}>
          <Text
            style={{
              ...styles.btnText,
              color: !searching ? "tomato" : "black"
            }}
          >
            지도
          </Text>
        </TouchableOpacity>
      </View>
      {searching ? <SearchContainer /> : <MapContainer />}

      {/* */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 7
  },
  header: {
    justifyContent: "space-around",
    flexDirection: "row",
    marginTop: 10
  },
  btnText: {
    fontSize: 15,
    fontWeight: "600",
    color: "white"
  }
});

export default SearchScreen;
