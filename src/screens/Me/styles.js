import {StyleSheet} from 'react-native';
import {colors, fonts, metrics} from "../../config/styles";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    header: {
        backgroundColor: colors.white,
        height: metrics.headerHeight,
        paddingHorizontal: metrics.mediumPadding,
        borderBottomWidth: 1,
        borderColor: colors.lighter,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    icon: {
        color: colors.primary,
    },

    info: {
        flexDirection: 'row',
        paddingLeft: metrics.mediumPadding,
        paddingRight: metrics.basePadding,
        paddingTop: metrics.mediumPadding,
        paddingBottom: metrics.mediumPadding,
    },

    outter: {
        width: 82,
        height: 82,
        borderRadius: 82 / 2,
        alignItems: 'center',
        justifyContent: 'center',
    },

    inner: {
        width: 80,
        height: 80,
        borderRadius: 80 / 2,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    avatar: {
        width: 76,
        height: 76,
        borderRadius: 76 / 2,
    },

    outterPlus: {
        position: 'absolute',
        bottom: -2,
        right: -2,
        zIndex: 1,
        width: 26,
        height: 26,
        borderRadius: 26 / 2,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
    },

    outterIcon: {
        color: '#69a1ea',
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    dados: {
        flex: 1,
    },

    statistics: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: metrics.basePadding,
    },

    statisticsInfo: {
        flex: 1,
        alignItems: 'center',
    },

    numbers: {
        fontWeight: '400',
        fontSize: fonts.big,
    },

    description: {
        fontWeight: '100',
        fontSize: fonts.small,
        color: colors.light,
    },

    touchable: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: metrics.smallPadding,
        margin: metrics.basePadding,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
    },

    button: {
        fontWeight: '500',
        color: colors.darker,
        fontSize: fonts.regular,
    },

    bio: {
        paddingLeft: metrics.mediumPadding,
        paddingRight: metrics.mediumPadding,
    },

    nameUser: {
        fontWeight: '400',
        fontSize: fonts.regular,
        paddingBottom: 3,
    },

    bioDescriptions: {
        fontWeight: '100',
        fontSize: fonts.regular,
        paddingBottom: metrics.smallPadding,
        lineHeight: 18,
    },

    translate: {
        fontWeight: '500',
        fontSize: 10,
        paddingTop: metrics.basePadding,
        paddingBottom: metrics.mediumPadding,
        textTransform: 'uppercase',
    },

    tabs: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: metrics.basePadding,
        borderWidth: 1,
        borderColor: colors.lighter,
    },

});

export default styles;
