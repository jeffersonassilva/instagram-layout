import React, {Component} from 'react';
import {Text, View} from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/AntDesign";
import IconSimpleLine from "react-native-vector-icons/SimpleLineIcons";
import {fonts} from "../../config/styles";

class ProfileScreen extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: navigation.getParam('name'),
            headerBackImage: (
                <IconSimpleLine name="arrow-left" style={styles.left}/>
            ),
            headerRight: (
                <Icon name="ellipsis1" style={styles.right}/>
            ),
            headerTitleStyle: {
                fontSize: fonts.regular,
            },
        };
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Profile</Text>
            </View>
        );
    }
}

export default ProfileScreen;
