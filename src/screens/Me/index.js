import React, {Component} from 'react';
import {Image, SafeAreaView, Text, View, TouchableOpacity, ScrollView} from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import IconMaterial from "react-native-vector-icons/MaterialCommunityIcons";
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconEvil from 'react-native-vector-icons/EvilIcons';
import images from "../../config/images";

class MeScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <IconMaterial name="restore-clock" size={28} style={styles.icon}/>
                    <Text>jeffersonassilva</Text>
                    <Icon name="menu" size={24} style={styles.icon}/>
                </View>
                <ScrollView>
                    <View style={styles.info}>
                        <View style={styles.outter}>
                            <View style={styles.outterPlus}>
                                <IconAnt name="pluscircle" style={styles.outterIcon}/>
                            </View>
                            <View style={styles.inner}>
                                <Image
                                    style={styles.avatar}
                                    source={images.me}
                                />
                            </View>
                        </View>
                        <View style={styles.dados}>
                            <View style={styles.statistics}>
                                <View style={styles.statisticsInfo}>
                                    <Text style={styles.numbers}>67</Text>
                                    <Text style={styles.description}>publicações</Text>
                                </View>
                                <View style={styles.statisticsInfo}>
                                    <Text style={styles.numbers}>346</Text>
                                    <Text style={styles.description}>seguidores</Text>
                                </View>
                                <View style={styles.statisticsInfo}>
                                    <Text style={styles.numbers}>243</Text>
                                    <Text style={styles.description}>seguindo</Text>
                                </View>
                            </View>
                            <TouchableOpacity style={styles.touchable} onPress={this.handlPress}>
                                <Text style={styles.button}>Editar perfil</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.bio}>
                        <Text style={styles.nameUser}>Jefferson Alessandro</Text>
                        <Text style={styles.bioDescriptions}>A young christian, instrumentalist, in love for antiques,
                            woodworking, films, series and logical reasoning!!{"\n"} 📌 Federal District, Brazil</Text>
                        <Text style={styles.translate}>Ver tradução</Text>
                    </View>

                    <View style={styles.tabs}>
                        <IconMaterial name="grid-large" size={22} style={styles.icon}/>
                        <IconAnt name="laptop" size={22} style={styles.icon}/>
                        <IconEvil name="user" size={30} style={styles.icon}/>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

export default MeScreen;
