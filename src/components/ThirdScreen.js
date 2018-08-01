import React, { Component } from 'react';
import { Container, Header, Title, Body, Icon } from 'native-base';

class ThirdScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Second Screen',
        // drawerIcon: ({ tintColor }) => (
        //     <Icon name='menu' />
        // ),
      };
    render() {
        return(
            <Container>
                <Header>
                <Body>
                    <Title>Second Screen</Title>
                </Body>
                </Header>
           </Container>
        );
    }
}
export default ThirdScreen;