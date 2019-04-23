import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import Stories from "./components/Stories";

export default class App extends Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#F8F8FA'}}>
                <Header/>
                <ScrollView>
                    <Stories/>
                    <View></View>
                </ScrollView>
                <Tabs/>
            </View>
        );
    }
}