import {Image, View} from "react-native";
import React from "react";
import styles from './styles';

const Photo = ({uri}) => (
    <View style={styles.container}>
        <Image
            style={styles.photo}
            source={{uri: uri}}
        />
    </View>
);

export default Photo;


