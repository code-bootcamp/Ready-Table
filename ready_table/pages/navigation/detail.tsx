// import React from "react";

// import { createStackNavigator } from "@react-navigation/stack";
// import { startAfter } from "firebase/database";
// import DetailContainer from "../../src/components/detail/detail.container";
// import ReviewList from "../../src/components/comment/review/list/ReviewList.container";
// import { Button } from "react-native";

// const Stack = createStackNavigator();

// const DetailNavigator = () => {
//   return (
//     <Stack.Navigator screenOptions={() => ({ headerShown: false })}>
//       <Stack.Screen
//         name="홈"
//         component={DetailContainer}
//         options={() => ({
//             headerTitle: props => <LogoTitle {...props} />,
//             headerRight: () => (
//               <Button
//                 onPress={() => alert('This is a button!')}
//                 title="Info"
//                 color="#fff" })}
//       />
//       <Stack.Screen
//         name="리뷰"
//         component={ReviewList}
//         options={() => ({ headerShown: true })}
//       />
//     </Stack.Navigator>
//   );
// };
