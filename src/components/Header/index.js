import React from 'react';
import {View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import styles from './styles';
import images from './../../config/images';

const Header = () => (
    <View style={styles.container}>
        <Icon name="camera" size={24} style={styles.icon}/>
        <View>
            <Image
                source={images.logo}
                style={styles.image}/>
        </View>
        <Icon name="paper-plane" size={24} style={styles.icon}/>
    </View>
);

export default Header;