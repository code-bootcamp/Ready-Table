// <<<<<<< HEAD
// import React, { useState, useEffect } from "react";
// import {
//   SafeAreaView,
//   Text,
//   StyleSheet,
//   View,
//   FlatList,
//   TextInput
// } from "react-native";

// const App = () => {
//   const [search, setSearch] = useState("");
//   const [filteredDataSource, setFilteredDataSource] = useState([]);
//   const [masterDataSource, setMasterDataSource] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then(response => response.json())
//       .then(responseJson => {
//         setFilteredDataSource(responseJson);
//         setMasterDataSource(responseJson);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }, []);

//   const searchFilterFunction = text => {
//     // Check if searched text is not blank
//     if (text) {
//       // Inserted text is not blank
//       // Filter the masterDataSource
//       // Update FilteredDataSource
//       const newData = masterDataSource.filter(function (item) {
//         const itemData = item.title
//           ? item.title.toUpperCase()
//           : "".toUpperCase();
//         const textData = text.toUpperCase();
//         return itemData.indexOf(textData) > -1;
//       });
//       setFilteredDataSource(newData);
//       setSearch(text);
//     } else {
//       // Inserted text is blank
//       // Update FilteredDataSource with masterDataSource
//       setFilteredDataSource(masterDataSource);
//       setSearch(text);
//     }
//   };

//   const ItemView = ({ item }) => {
//     return (
//       // Flat List Item
//       <Text style={styles.itemStyle} onPress={() => getItem(item)}>
//         {item.id}
//         {"."}
//         {item.title.toUpperCase()}
//       </Text>
//     );
//   };

//   const ItemSeparatorView = () => {
//     return (
//       // Flat List Item Separator
//       <View
//         style={{
//           height: 0.5,
//           width: "100%",
//           backgroundColor: "#C8C8C8"
//         }}
//       />
//     );
//   };

//   const getItem = item => {
//     // Function for click on an item
//     alert("Id : " + item.id + " Title : " + item.title);
//   };

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <View style={styles.container}>
//         <TextInput
//           style={styles.textInputStyle}
//           onChangeText={text => searchFilterFunction(text)}
//           value={search}
//           underlineColorAndroid="transparent"
//           placeholder="Search Here"
//         />
//         <FlatList
//           data={filteredDataSource}
//           keyExtractor={(item, index) => index.toString()}
//           ItemSeparatorComponent={ItemSeparatorView}
//           renderItem={ItemView}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "white"
//   },
//   itemStyle: {
//     padding: 10
//   },
//   textInputStyle: {
//     height: 40,
//     borderWidth: 1,
//     paddingLeft: 20,
//     margin: 5,
//     borderColor: "#dd4124",
//     backgroundColor: "#FFFFFF"
//   }
// });

// export default App;
// =======
import React from "react";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  SearchPageView,
  Search,
  SeachIcon,
  SearchBar,
  SearchBarLine,
  FilterView1,
  Row,
  FilterWrapper,
  FilterFont,
  Row1,
  RestaurantList,
  RestaurantWrapper,
  Restaurant,
  RestaurantImage,
  RestaurantName
} from "./seatch.styles";

const SearchUI = props => {
  const navigation = useNavigation();
  return (
    <ScrollView
      onMomentumScrollBegin={props.onLoadMore}
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: "white" }}
    >
      <SearchPageView>
        <Search>
          <SeachIcon
            source={require("../../../../public/images/search02.png")}
          />
          <SearchBar onChangeText={props.onChangeSearch} />
        </Search>
        <SearchBarLine />

        <FilterView1>
          <Row>
            <FilterWrapper onPress={props.searchKoreaThema}>
              <FilterFont>한식</FilterFont>
            </FilterWrapper>

            <FilterWrapper onPress={props.searchWesternThema}>
              <FilterFont>양식</FilterFont>
            </FilterWrapper>

            <FilterWrapper onPress={props.searchFastFoodThema}>
              <FilterFont>패스트푸드</FilterFont>
            </FilterWrapper>
          </Row>
          <Row1>
            <FilterWrapper onPress={props.searchChinaThema}>
              <FilterFont>중식</FilterFont>
            </FilterWrapper>

            <FilterWrapper onPress={props.searchSnackThema}>
              <FilterFont>분식</FilterFont>
            </FilterWrapper>

            <FilterWrapper onPress={props.searchJapanThema}>
              <FilterFont>일식</FilterFont>
            </FilterWrapper>

            <FilterWrapper onPress={props.searchLunchBoxThema}>
              <FilterFont>도시락</FilterFont>
            </FilterWrapper>
          </Row1>
        </FilterView1>

        <RestaurantList>
          {props.dataRes?.map((el: any) => (
            <RestaurantWrapper
              key={el._id}
              onPress={() => {
                navigation.navigate("식당 상세보기", {
                  id: props.onPressDetail(el)
                });
              }}
            >
              {/* <Restaurant>
                <RestaurantImage
                  source={{
                    uri: el.images[0]
                  }}
                />
                <RestaurantName>
                  {String(el.name.split("#")[1]).length > 60
                    ? `${String(el.name.split("#")[1]).substr(0, 61)}...`
                    : el.name.split("#")}
                </RestaurantName>
              </Restaurant> */}
            </RestaurantWrapper>
          ))}

          {!props.dataRes &&
            props.data?.fetchUseditems.map((el: any) => (
              <RestaurantWrapper
                key={el._id}
                onPress={() => {
                  navigation.navigate("식당상세보기", {
                    id: props.onPressDetail(el)
                  });
                }}
              >
                <Restaurant>
                  <RestaurantImage
                    source={{
                      uri: el.images[0]
                    }}
                  />
                  <RestaurantName>
                    {String(el.name.split("#")[1]).length > 60
                      ? `${String(el.name.split("#")[1]).substr(0, 61)}...`
                      : el.name.split("#")[1]}
                  </RestaurantName>
                </Restaurant>
              </RestaurantWrapper>
            ))}
        </RestaurantList>
      </SearchPageView>
    </ScrollView>
  );
};

export default SearchUI;
