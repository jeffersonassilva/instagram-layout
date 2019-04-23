import {StyleSheet} from 'react-native';
import {metrics, colors} from '../../styles';
import fonts from "../../styles/fonts";

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        padding: metrics.basePadding,
        borderBottomWidth: 1,
        borderColor: colors.lighter,
    },

    myStory: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 75,
    },

    outter: {
        width: 55,
        height: 55,
        borderRadius: 55 / 2,
        alignItems: 'center',
        justifyContent: 'center',
    },

    inner: {
        width: 52,
        height: 52,
        borderRadius: 52 / 2,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    avatar: {
        width: 46,
        height: 46,
        borderRadius: 46 / 2,
    },

    name: {
        fontSize: fonts.smaller,
        color: colors.regular,
        textAlign: 'center',
        marginTop: metrics.smallMargin,
    },

    outterPlus: {
        position: 'absolute',
        bottom: 18,
        right: 8,
        zIndex: 1,
        width: 19,
        height: 19,
        borderRadius: 19 / 2,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
    },

    icon: {
        fontSize: fonts.regular,
        color: '#69a1ea',
    },
});

export default styles;