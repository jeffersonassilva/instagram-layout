import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFeather from 'react-native-vector-icons/Feather';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

const Tabs = () => (
    <View style={styles.container}>
        <IconMaterial name="home-variant" style={[styles.icon, styles.active]}/>
        <Icon name="ios-search" style={styles.icon}/>
        <IconFeather name="plus-square" style={styles.icon}/>
        <Icon name="ios-heart-empty" style={styles.icon}/>
        <Icon name="ios-contact" style={styles.icon}/>
    </View>
);

export default Tabs;