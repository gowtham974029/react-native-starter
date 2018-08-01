import React, { Component } from 'react';
import { Container, Header, Title, Body, Left } from 'native-base';
//import { Ionicons } from '@expo/vector-icons';

class SecondScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'First Screen',
        // drawerIcon: ({ tintColor }) => (
        //     <Icon name='menu' />
        // ),
      };
    render() {
        return(
            <Container>
                <Header>
                    <Body>
                        <Title>Home</Title>
                    </Body>
                </Header>
           </Container>
        );
    }
}
export default SecondScreen;