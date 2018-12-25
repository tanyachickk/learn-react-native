import React, { Component } from "react";
import ScreenWrapper from "../../components/ScreenWrapper";
import FormWrapper from "../../components/FormWrapper";
import { Text, Button } from "react-native";

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
          <Button title="Logout" onPress={this.logout} />
        </FormWrapper>
      </ScreenWrapper>
    );
  }
}

export default Home;