import React, {Component} from 'react';
import {SafeAreaView, Text, View} from "react-native";
import styles from "./styles";

class ActivitiesScreen extends Component {
    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={styles.container}>
                    <View style={styles.search}>
                        <Text>Activities</Text>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

export default ActivitiesScreen;
