import React, {Component} from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, ScrollView, View} from "react-native";
import styles from "./styles";
import images from "../../../config/images";

class ActivitiesMeScreen extends Component {
    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                <ScrollView>
                    <View style={styles.container}>
                        <Text style={styles.title}>Hoje</Text>
                        <View style={styles.item}>
                            <Image
                                style={styles.avatar}
                                source={{uri: 'https://instagram.fbsb8-2.fna.fbcdn.net/vp/46028832b8fe711e0f7948df5d64b22b/5D982C9D/t51.2885-19/s150x150/59923185_292326624977568_8343811053016055808_n.jpg?_nc_ht=instagram.fbsb8-2.fna.fbcdn.net'}}
                            />
                            <View style={styles.middle}>
                                <Text style={styles.user}>anacnlira</Text>
                                <Text style={styles.description}>começou a seguir você. <Text
                                    style={styles.time}>3h</Text></Text>
                            </View>
                            <View style={styles.action}>
                                <TouchableOpacity style={styles.touchable}>
                                    <Text style={styles.button}>Seguir</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.title}>Esta semana</Text>
                        <View style={styles.item}>
                            <Image
                                style={styles.avatar}
                                source={{uri: 'https://instagram.fbsb8-2.fna.fbcdn.net/vp/e6db9587796537566c6ba5540fbf72d4/5D789BC6/t51.2885-19/s150x150/25010671_1999490880320122_6905264800066961408_n.jpg?_nc_ht=instagram.fbsb8-2.fna.fbcdn.net'}}
                            />
                            <View style={styles.middle}>
                                <Text style={styles.user}>vieirandree</Text>
                                <Text style={styles.description}>começou a seguir você. <Text
                                    style={styles.time}>2d</Text></Text>
                            </View>
                            <View style={styles.action}>
                                <TouchableOpacity style={[styles.touchableFollowing]}>
                                    <Text style={styles.buttonFollowing}>Seguindo</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.item}>
                            <Image
                                style={styles.avatar}
                                source={{uri: 'https://instagram.fbsb8-2.fna.fbcdn.net/vp/86f5ee13af3c9f8fbdb8bf96875d9796/5D9E6863/t51.2885-19/s150x150/12531177_1118204684890213_1829397779_a.jpg?_nc_ht=instagram.fbsb8-2.fna.fbcdn.net'}}
                            />
                            <View style={styles.middle}>
                                <Text>
                                    <Text style={styles.user}>luhelene03</Text> <Text style={styles.description}>e</Text> <Text style={styles.user}>outras 58 pessoas</Text>
                                </Text>
                                <Text style={styles.description}>curtiram sua publicação. <Text
                                    style={styles.time}>5d</Text></Text>
                            </View>
                            <Image
                                style={styles.liked}
                                source={{uri: 'https://instagram.fbsb8-2.fna.fbcdn.net/vp/0e49a5cfc946cc11740782401bb162dd/5D8A6A48/t51.2885-15/sh0.08/e35/s640x640/26865920_491869361207541_4453276612254760960_n.jpg?_nc_ht=instagram.fbsb8-2.fna.fbcdn.net'}}
                            />
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

export default ActivitiesMeScreen;
