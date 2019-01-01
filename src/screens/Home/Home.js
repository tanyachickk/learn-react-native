import React, { Component } from "react";
import ScreenWrapper from "../../components/ScreenWrapper";
import FormWrapper from "../../components/FormWrapper";
import Button from "../../components/Button";
import { Text } from "react-native";
import Store from "../../store";

class Home extends Component {
  static navigationOptions = {
    header: null
  };

  logout = () => {
    this.props.navigation.navigate("LoginStack");
  };

  render() {
    return (
      <ScreenWrapper>
        <FormWrapper>
          <Text>Home screen</Text>
          <Text>{Store.user.name}</Text>
          <Text>{Store.user.photoUrl}</Text>
          <Button text="Logout" onPress={this.logout} />
        </FormWrapper>
      </ScreenWrapper>
    );
  }
}

export default Home;
