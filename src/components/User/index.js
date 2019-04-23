import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';

const User = ({user: {image, name, hasStory}}) => (
    <View style={styles.container}>
        <View style={[
            styles.outter,
            hasStory ? styles[`outterUnread`] : {}
        ]}>
            <View style={styles.inner}>
                <Image
                    style={styles.avatar}
                    source={image}
                />
            </View>
        </View>
        <Text style={styles.name}>{name}</Text>
    </View>
);

export default User;