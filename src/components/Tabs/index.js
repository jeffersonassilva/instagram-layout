import React, {Component} from 'react';
import {Image, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFeather from 'react-native-vector-icons/Feather';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import {withNavigation} from 'react-navigation';

class Tabs extends Component {

    _navigateTo(pageName) {
        this.props.navigation.navigate(pageName)
    }

    render() {
        return (
            <View style={styles.container}>
                <IconMaterial name="home-variant" style={[styles.icon, styles.active]}/>
                <Icon name="ios-search" style={styles.icon}/>
                <IconFeather name="plus-square" style={styles.icon}/>
                <Icon name="ios-heart-empty" style={styles.icon}/>
                <TouchableOpacity onPress={() => {
                    this._navigateTo('Teste')
                }}>
                    <Image
                        style={styles.avatar}
                        source={require('../../images/jeffersonassilva.jpg')}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

export default withNavigation(Tabs);