import {StyleSheet} from 'react-native';
import {colors, fonts, metrics} from "../../../config/styles";

const styles = StyleSheet.create({
    container: {
        paddingLeft: metrics.mediumPadding,
        paddingRight: metrics.mediumPadding,
        paddingTop: metrics.mediumPadding,
        borderBottomWidth: 0.5,
        borderBottomColor: colors.lighter,
    },

    item: {
        flexDirection: 'row',
        paddingBottom: metrics.mediumPadding,
    },

    title: {
        fontSize: fonts.big,
        fontWeight: '400',
        paddingBottom: metrics.doubleBasePadding,
    },

    middle: {
        flex: 2,
        paddingLeft: metrics.basePadding,
        paddingRight: metrics.basePadding,
    },

    avatar: {
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
    },

    user: {
        fontWeight: '400',
        fontSize: 14,
    },

    description: {
        fontWeight: '100',
        color: colors.dark,
        fontSize: 14,
    },

    time: {
        color: colors.light,
    },

    action: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },

    touchable: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#69a1ea',
        paddingLeft: metrics.doubleBasePadding,
        paddingRight: metrics.doubleBasePadding,
        paddingTop: metrics.smallPadding,
        paddingBottom: metrics.smallPadding,
    },

    touchableFollowing: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: '#ccc',
        borderRadius: 5,
        backgroundColor: '#fff',
        paddingLeft: metrics.basePadding,
        paddingRight: metrics.basePadding,
        paddingTop: metrics.smallPadding,
        paddingBottom: metrics.smallPadding,
    },

    button: {
        fontWeight: '600',
        color: colors.white,
    },

    buttonFollowing: {
        fontWeight: '600',
        color: colors.regular,
    },

    liked: {
        width: 50,
        height: 50,
    },
});

export default styles;
