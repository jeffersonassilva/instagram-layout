import {StyleSheet} from 'react-native';
import {fonts, colors, metrics} from '../../config/styles';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        paddingLeft: metrics.smallPadding,
        paddingRight: metrics.smallPadding,
        paddingTop: metrics.basePadding,
        paddingBottom: metrics.basePadding,
        borderBottomWidth: 1,
        borderColor: colors.lighter,
    },

    myStory: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
    },

    outter: {
        width: 59,
        height: 59,
        borderRadius: 59 / 2,
        alignItems: 'center',
        justifyContent: 'center',
    },

    inner: {
        width: 56,
        height: 56,
        borderRadius: 56 / 2,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    avatar: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
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