import React, { Component } from 'react';
import AnimatedList from './AnimatedList';
import Spinner from './Spinner';
import { View } from 'react-native';
import { Footer, FooterTab, Button, Text } from 'native-base';

export default class Home extends Component {
    state = {page:"spinner"};
    render() {
        return (
            <View style={{flex:1}}>
                <View style={{flex:1}}>
                    {this.state.page=="spinner" && <Spinner/>}
                    {this.state.page=="animatedlist" && <AnimatedList/>}
                </View>
                    <Footer>
                <FooterTab >
                    <Button onPress={()=>this.setState({page:"spinner"})} active = {this.state.page=="spinner"}>
                    <Text>Spinner</Text>
                    </Button>
                    <Button onPress={()=>this.setState({page:"animatedlist"})} active = {this.state.page=="animatedlist"}>
                    <Text>AnimatedList</Text>
                    </Button>
                </FooterTab>
                </Footer>

            </View>
        );
    }
}





