import * as React from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { useState } from "react";

const API_KEY = "e14c719335d31b0a"; //구글지도맵.. ID값

const MapContainer = () => {
  const [location, setLocation] = useState({
    latitude: 37.483706,
    longitude: 126.895664
  });

  // const locations = [["낭만부대찌개", 37.483706, 126.895664], []];

  return (
    <View style={styles.container}>
      {/* <script
        async
        src="https://maps.googleapis.com/maps/api/js?key=e14c719335d31b0a&callback=initMap"
      ></script> */}
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.009,
          longitudeDelta: 0.009
        }}
        key={API_KEY}
      >
        <Marker
          coordinate={{
            latitude: 37.484503,
            longitude: 126.8966
          }}
          title="은희네 해장국"
          description="제주식해장국: 10000원..."
        />
        <Marker
          coordinate={{
            latitude: 37.483812,
            longitude: 126.895612
          }}
          title="낭만부대찌개"
          description="부대찌개:7000 밥무한리필..."
        />
        <Marker
          coordinate={{
            latitude: 37.484059,
            longitude: 126.895708
          }}
          title="갓파스시 구로점"
          description="초밥무한리필: 19,900원..."
        />
        <Marker
          coordinate={{
            latitude: 37.485128,
            longitude: 126.894901
          }}
          title="도쿄스테이크 태평양물산점"
          description="스테이크: 9,900원..."
        />
        <Marker
          coordinate={{
            latitude: 37.484259,
            longitude: 126.893424
          }}
          title="롤링파스타 구로디지털단지"
          description="토마토파스타: 9,900원..."
        />

        <Marker
          coordinate={{
            latitude: 37.481502,
            longitude: 126.895005
          }}
          title="Happy Brunch"
          description="Best Brunch: 19,900원..."
        />
        <Marker
          coordinate={{
            latitude: 37.482799,
            longitude: 126.896728
          }}
          title="0153B SUSHI"
          description="모듬: 9,900원..."
        />

        <Marker
          coordinate={{
            latitude: 37.488425,
            longitude: 126.893702
          }}
          title="입춘"
          description="떡볶이:3000원, 모듬튀김: 3000원"
        />

        <Marker
          coordinate={{
            latitude: 37.486813,
            longitude: 126.894784
          }}
          title="입춘"
          description="떡볶이:3000원, 모듬튀김: 3000원"
        />

        <Marker
          coordinate={{
            latitude: 37.486182,
            longitude: 126.892554
          }}
          title="김성식 돈까스"
          description="등심돈까스:11000원, 안심돈까스: 13000원"
        />

        <Marker
          coordinate={{
            latitude: 37.485165,
            longitude: 126.898141
          }}
          title="꾸덕다욧"
          description="단백질샐러드:9000원, 시저샐러드: 7000원"
        />
      </MapView>
      <Text>ddd</Text>
    </View>
  );
};
export default MapContainer;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  }
});
