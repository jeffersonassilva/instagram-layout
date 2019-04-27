import React from 'react';
import {ScrollView, View, Image, Text} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import IconEvil from 'react-native-vector-icons/EvilIcons';
import IconSimpleLine from 'react-native-vector-icons/SimpleLineIcons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

let setLocalization = (localization) => {
    return <Text style={styles.localization}>{localization}</Text>
};

const Post = ({post: {profile, name, localization, image, images, multipleImages, description, likes, time}}) => (
    <View style={styles.container}>
        <View style={styles.info}>
            <Image
                style={styles.profile}
                source={profile}
            />
            <View style={styles.texts}>
                <Text style={styles.name}>{name}</Text>
                {localization ? setLocalization(localization) : null}
            </View>
            <Icon name="ellipsis1" style={styles.ellipsis}/>
        </View>
        {multipleImages ?
            <ScrollView horizontal={true}>
                <Ionicons name="ios-arrow-dropleft-circle" style={styles.before}/>
                <Ionicons name="ios-arrow-dropright-circle" style={styles.after}/>
                <Image
                    style={styles.photos}
                    source={images[0].image}
                />
                <Image
                    style={styles.photos}
                    source={images[1].image}
                />
            </ScrollView>
        :
            <View>
                <Image
                    style={styles.photo}
                    source={image}
                />
            </View>
        }
        <View style={styles.actions}>
            <IconEvil name="heart" style={styles.icon}/>
            <IconEvil name="comment" style={styles.icon}/>
            <IconSimpleLine name="paper-plane" style={styles.plane}/>
            <IconFontAwesome name="bookmark-o" style={styles.bookmark}/>
        </View>
        <Text style={styles.likes}>
            {likes} curtidas
        </Text>
        <View style={styles.comments}>
            <Text style={styles.commentUser}>
                {name}
            </Text>
            <Text style={styles.commentDesc}>
                {description}
            </Text>
        </View>
        <View style={styles.details}>
            <Text style={styles.time}>{time}</Text>
        </View>
    </View>
);

export default Post;