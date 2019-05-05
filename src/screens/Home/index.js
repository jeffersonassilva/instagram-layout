import React, {Component} from "react";
import Header from "../../components/Header";
import {SafeAreaView, ScrollView, View} from "react-native";
import Stories from "../../components/Stories";
import Timeline from "../../components/Timeline";

class HomeScreen extends Component {
    static navigationOptions = {
        headerTitle: <Header/>,
        headerBackTitle: null,
        animationEnabled: false,
    };

    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={{flex: 1, backgroundColor: '#F8F8FA'}}>
                    <ScrollView>
                        <Stories/>
                        <Timeline/>
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}

export default HomeScreen;
