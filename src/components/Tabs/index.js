import React, {Component} from 'react';
import {Image, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFeather from 'react-native-vector-icons/Feather';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import images from './../../config/images';
import {withNavigation} from 'react-navigation';

class Tabs extends Component {

    _navigateTo(pageName) {
        this.props.navigation.navigate(pageName);
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => {
                    this._navigateTo('Home')
                }}>
                    <IconMaterial name="home-variant" style={[styles.icon, styles.active]}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    this._navigateTo('Search')
                }}>
                    <Icon name="ios-search" style={styles.icon}/>
                </TouchableOpacity>

                <IconFeather name="plus-square" style={styles.icon}/>
                <Icon name="ios-heart-empty" style={styles.icon}/>

                <TouchableOpacity onPress={() => {
                    //this._navigateTo('Teste')
                }}>
                    <Image
                        style={styles.avatar}
                        source={images.me}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

export default withNavigation(Tabs);
