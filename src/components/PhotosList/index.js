import {View} from "react-native";
import React, {Component} from "react";
import Photo from "./Photo";
import styles from './styles';

export default class PhotoList extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Photo uri='https://instagram.fbsb8-2.fna.fbcdn.net/vp/3f294c9f27655b47e5cd0757e8351d14/5D62DD48/t51.2885-15/sh0.08/e35/s640x640/26865920_491869361207541_4453276612254760960_n.jpg?_nc_ht=instagram.fbsb8-2.fna.fbcdn.net' />
                <Photo uri='https://instagram.fbsb8-2.fna.fbcdn.net/vp/04024aee97752bfca17518e6fc0716b2/5D60C892/t51.2885-15/e35/19534860_1909578589281021_1004308691203129344_n.jpg?_nc_ht=instagram.fbsb8-2.fna.fbcdn.net' />
                <Photo uri='https://instagram.fbsb8-2.fna.fbcdn.net/vp/5ae58510f31646761b75441dc0039a91/5D7A4DAC/t51.2885-15/sh0.08/e35/s640x640/17818821_746545588848623_6618222940150300672_n.jpg?_nc_ht=instagram.fbsb8-2.fna.fbcdn.net' />
                <Photo uri='https://instagram.fbsb8-2.fna.fbcdn.net/vp/5336f27424ecdab86213ff03a5a93fd7/5D7841C0/t51.2885-15/sh0.08/e35/s640x640/16122662_1283889968372525_179370062052851712_n.jpg?_nc_ht=instagram.fbsb8-2.fna.fbcdn.net' />
                <Photo uri='https://instagram.fbsb8-2.fna.fbcdn.net/vp/3e81377742ac1353f4b3103362094dcf/5D7F7C51/t51.2885-15/sh0.08/e35/p640x640/12724985_1083691271682118_613662930_n.jpg?_nc_ht=instagram.fbsb8-2.fna.fbcdn.net' />
                <Photo uri='https://instagram.fbsb8-2.fna.fbcdn.net/vp/5e53ddf6f447cfea2ccd3fbdb1e01c75/5D6EDDB2/t51.2885-15/sh0.08/e35/p640x640/10011172_878271218994801_1029203171_n.jpg?_nc_ht=instagram.fbsb8-2.fna.fbcdn.net' />
                <Photo uri='https://instagram.fbsb8-2.fna.fbcdn.net/vp/d12760e630b0c4833cb95cac36925b34/5D6CDA63/t51.2885-15/sh0.08/e35/p640x640/10817771_1704912009787117_1643069756_n.jpg?_nc_ht=instagram.fbsb8-2.fna.fbcdn.net' />
                <Photo uri='https://instagram.fbsb8-2.fna.fbcdn.net/vp/303918a8e7c0b6f5386d5346fbe909f2/5D59C3AB/t51.2885-15/e35/10011364_115618978815127_1562016522_n.jpg?_nc_ht=instagram.fbsb8-2.fna.fbcdn.net' />
                <Photo uri='https://instagram.fbsb8-2.fna.fbcdn.net/vp/8a6d04d61aa6509326ff427f6d7412f5/5D6B22A0/t51.2885-15/sh0.08/e35/s640x640/11376253_408483546015095_174864194_n.jpg?_nc_ht=instagram.fbsb8-2.fna.fbcdn.net' />
            </View>
        )
    }
}
