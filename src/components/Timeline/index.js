import React, {Component} from 'react';
import styles from './styles';
import {View} from 'react-native';
import Post from "../Post";

export default class Timeline extends Component {
    state = {
        posts: [
            {
                id: 1,
                name: 'werner22brigitte',
                localization: 'Venice, Italy',
                profile: require('../../images/werner22brigitte.jpg'),
                multipleImages: false,
                image: require('../../images/timeline_1.jpg'),
                description: 'It\'s time to explore Venice!',
                likes: 2696,
                time: '5 hours ago',
            },
            {
                id: 2,
                name: 'kookay',
                localization: 'Greece',
                profile: require('../../images/kookay.jpg'),
                multipleImages: false,
                image: require('../../images/timeline_2.jpg'),
                description: '#travel #vacation',
                likes: 102,
                time: 'FEBRUARY 16',
            },
            {
                id: 3,
                name: 'macadam13',
                localization: null,
                profile: require('../../images/macadam13.jpg'),
                multipleImages: true,
                images: [
                    {
                        image: require('../../images/timeline_3_1.jpg'),
                    },
                    {
                        image: require('../../images/timeline_3_2.jpg'),
                    },
                ],
                description: 'Mademoiselle',
                likes: 384,
                time: 'DECEMBER 13, 2018',
            }
        ],
    };

    render() {
        return (
            <View style={styles.container}>
                {this.state.posts.map(post => <Post key={post.id} post={post}/>)}
            </View>
        );
    }
}