import styled from "@emotion/native";
// import * as Font from "expo-font";

// const getFonts = () => {
//   return Font.loadAsync({
//     Bungee: require("../../../assets/fonts/Bungee-Regular.ttf")
//   });
// };

export const Wrapper = styled.View`
  flex: 1;
  align-content: center;
  justify-content: center;
  padding: 55px;
`;
export const LogoWrapper = styled.View`
  align-items: center;
  justify-content: center;
  padding: 0 50px 65px 50px;
`;
export const LogoText = styled.Text`
  /* font-family: "Bungee-Regular"; */
  font-size: 50px;
  width: 500px;
  height: 150px;
  padding-left: 100px;
`;

export const UserInput = styled.TextInput`
  height: 45px;
  padding: 10px;
  border-bottom-color: #bdbdbd;
  border-bottom-width: 1px;
  font-size: 12px;
`;

export const ButtonWrapper = styled.View`
  align-items: center;
  justify-content: center;
`;

export const LoginButtonWrapper = styled.TouchableOpacity`
  width: 97%;
  margin-top: 45px;
  margin-bottom: 10px;
  margin-left: 5px;
  background-color: #26eba6;
  height: 40px;
  border-radius: 10px;
  justify-content: center;
`;
export const LoginButton = styled.Text`
  color: white;
  line-height: 45px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;
export const SignUpWrapper = styled.View`
  padding-top: 20px;
  margin: auto;
`;

export const SignUp = styled.Text``;
