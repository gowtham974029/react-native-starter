import React, { Component } from 'react';
import { Text, Modal } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser, closeModal } from '../../actions';
import Spinner from './../../common/Spinner';
import { Container, Header, Content, Form, Item, Input, Button, Title, Body } from 'native-base';


class Login extends Component {
onEmailChange(text) {
    this.props.emailChanged(text);
}

onPasswordChange(text) {
    this.props.passwordChanged(text);
}
  login() {
     const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }
  loader() {
    if(this.props.loading) {
       return(<Spinner size="large"/>);
    }
   }
  closeModal() {
   this.props.closeModal()
  }
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Login</Title>
          </Body>
        </Header>
        <Content>
          <Form>
            <Item>
              <Input 
              placeholder="Username" 
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}
              />
            </Item>
            <Item last>
              <Input 
              placeholder="Password" 
              secureTextEntry
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
              />
            </Item>
          </Form>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
          <Button block style={styles.button} onPress={() => this.login()}>
            <Text>Login</Text>
          </Button>
        </Content>
        <Content>
          <Modal
            transparent
            visible={this.props.modalVisible}
            animationType={'fade'}
            onRequestClose={() => this.closeModal()}
          >
            <Body>
              {this.loader()}
            </Body>
          </Modal> 
        </Content>
      </Container>
    );
  }
}
const styles = {
    button: {
        margin: 15
    },
    errorTextStyle: {
      fontSize: 15,
      alignSelf: 'center',
      color: 'red',
      marginTop: 10
    }
};

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading, modalVisible } = auth;
  
    return { email, password, error, loading, modalVisible };
  };
  export default connect(mapStateToProps, {
    emailChanged, passwordChanged, loginUser, closeModal
  })(Login);