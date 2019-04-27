import React, {Component} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import Stories from "./components/Stories";
import Timeline from "./components/Timeline";

export default class App extends Component {
    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={{flex: 1, backgroundColor: '#F8F8FA'}}>
                    <Header/>
                    <ScrollView>
                        <Stories/>
                        <Timeline/>
                    </ScrollView>
                    <Tabs/>
                </View>
            </SafeAreaView>
        );
    }
}