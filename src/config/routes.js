import {createStackNavigator, createBottomTabNavigator} from "react-navigation";
import React from 'react';
import {Image, StyleSheet, View} from "react-native";
import images from "./images";
import {colors} from "./styles";
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from "react-native-vector-icons/Ionicons";
import IconFeather from "react-native-vector-icons/Feather";
import IconFontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {Activities, Camera, Home, Me, Search, Profile} from './screens';

const AppNavigator = createStackNavigator(
    {
        Home: Home,
        Profile: Profile,
    }
);

const TabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: AppNavigator,
            navigationOptions: {
                tabBarIcon: ({focused}) => {
                    return (
                        focused ? <IconMaterial name="home" style={{fontSize: 28}}/> :
                            <IconMaterial name="home-outline" style={{fontSize: 28}}/>
                    )
                }
            },
        },
        Search: {
            screen: Search,
            navigationOptions: {
                tabBarIcon: ({focused}) => {
                    return (
                        focused ? <IconFontAwesome5 name="search" style={{fontSize: 24}}/> :
                            <Icon name="ios-search" style={{fontSize: 28}}/>
                    )
                }
            },
        },
        Camera: {
            screen: Camera,
            navigationOptions: {
                tabBarIcon: (
                    <IconFeather name="plus-square" style={{fontSize: 26}}/>
                )
            },
        },
        Activities: {
            screen: Activities,
            navigationOptions: {
                tabBarIcon: ({focused}) => {
                    return (
                        focused ? <Icon name="ios-heart" style={{fontSize: 26}}/> :
                            <Icon name="ios-heart-empty" style={{fontSize: 26}}/>
                    )
                }
            },
        },
        Me: {
            screen: Me,
            navigationOptions: {
                tabBarIcon: ({focused}) => {
                    return (
                        focused ?
                            <View style={styles.inner}>
                                <View style={styles.outter}>
                                    <Image style={styles.avatar} source={images.me}/>
                                </View>
                            </View>
                            : <Image style={styles.avatar} source={images.me}/>
                    )
                }
            },
        }
    },
    {
        tabBarOptions: {
            showLabel: false,
            showIcon: true,
            tintColor: colors.dark,
            activeTintColor: '#dc3170',
            inactiveTintColor: colors.dark,
            style: {
                backgroundColor: colors.white,
                borderTopWidth: 1,
                borderTopColor: '#ddd',
                height: 44,
            },
            tabBarSelectedItemStyle: {
                borderBottomWidth: 2,
                borderTopColor: '#dc3170',
                color: colors.light,
            }
        }
    },
    {
        initialRouteName: "Home",
    }
);

const styles = StyleSheet.create({
    outter: {
        width: 27,
        height: 27,
        borderRadius: 27 / 2,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    inner: {
        width: 29,
        height: 29,
        borderRadius: 29 / 2,
        backgroundColor: colors.dark,
        alignItems: 'center',
        justifyContent: 'center',
    },

    avatar: {
        width: 23,
        height: 23,
        borderRadius: 23 / 2
    },
});

export default TabNavigator;
