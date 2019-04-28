import React, {Component} from 'react';
import {ScrollView, View, Image, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import IconEvil from 'react-native-vector-icons/EvilIcons';
import IconSimpleLine from 'react-native-vector-icons/SimpleLineIcons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {withNavigation} from 'react-navigation';

class Post extends Component {

    constructor(props) {
        super(props);
        post = this.props.post;
    }

    _navigateTo(pageName) {
        this.props.navigation.navigate(pageName)
    }

    setLocalization(localization) {
        return <Text style={styles.localization}>{localization}</Text>
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.info}>
                    <Image
                        style={styles.profile}
                        source={post.profile}
                    />
                    <View style={styles.texts}>
                        <TouchableOpacity onPress={() => {
                            this._navigateTo('Teste')
                        }}>
                            <Text style={styles.name}>{post.name}</Text>
                        </TouchableOpacity>
                        {post.localization ? this.setLocalization(post.localization) : null}
                    </View>
                    <Icon name="ellipsis1" style={styles.ellipsis}/>
                </View>
                {post.multipleImages ?
                    <ScrollView horizontal={true}>
                        <Ionicons name="ios-arrow-dropleft-circle" style={styles.before}/>
                        <Ionicons name="ios-arrow-dropright-circle" style={styles.after}/>
                        <Image
                            style={styles.photos}
                            source={post.images[0].image}
                        />
                        <Image
                            style={styles.photos}
                            source={post.images[1].image}
                        />
                    </ScrollView>
                    :
                    <View>
                        <Image
                            style={styles.photo}
                            source={post.image}
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
                    {post.likes} curtidas
                </Text>
                <View style={styles.comments}>
                    <Text style={styles.commentUser}>
                        {post.name}
                    </Text>
                    <Text style={styles.commentDesc}>
                        {post.description}
                    </Text>
                </View>
                <View style={styles.details}>
                    <Text style={styles.time}>{post.time}</Text>
                </View>
            </View>
        );
    }
}

export default withNavigation(Post);