import React, {Component} from 'react';
import {Image, Text, View, ScrollView} from 'react-native';
import User from '../User';
import styles from './styles';
import Icon from 'react-native-vector-icons/AntDesign';

export default class Stories extends Component {
    state = {
        users: [
            {
                id: 1,
                image: require('../../images/fredguedes9.jpg'),
                name: 'fredguedes9',
                hasStory: true,
            },
            {
                id: 2,
                image: require('../../images/la.ise.jpg'),
                name: 'la.ise',
                hasStory: true,
            },
            {
                id: 3,
                image: require('../../images/karina.miko.jpg'),
                name: 'karina.miko',
                hasStory: false,
            },
            {
                id: 4,
                image: require('../../images/corinthians.jpg'),
                name: 'corinthians',
                hasStory: false,
            }
        ],
    };

    render() {
        return (
            <ScrollView horizontal={true} style={styles.container}>
                <View style={styles.myStory}>
                    <View style={styles.outterPlus}>
                        <Icon name="pluscircle" style={styles.icon}/>
                    </View>
                    <View style={styles.outter}>
                        <View style={styles.inner}>
                            <Image
                                style={styles.avatar}
                                source={require('../../images/jeffersonassilva.jpg')}
                            />
                        </View>
                    </View>
                    <Text style={styles.name}>Seu story</Text>
                </View>
                {this.state.users.map(user => <User key={user.id} user={user} />)}
            </ScrollView>
        );
    }
}