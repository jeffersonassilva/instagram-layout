import React, {Component} from "react";
import Header from "../../components/Header";
import {SafeAreaView, ScrollView, View} from "react-native";
import Stories from "../../components/Stories";
import Timeline from "../../components/Timeline";
import Tabs from "../../components/Tabs";

class HomeScreen extends Component {
    static navigationOptions = {
        headerTitle: <Header/>
    };

    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={{flex: 1, backgroundColor: '#F8F8FA'}}>
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

export default HomeScreen;