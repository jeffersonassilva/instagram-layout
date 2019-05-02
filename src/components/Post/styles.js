import {StyleSheet} from 'react-native';
import {colors, fonts, metrics} from '../../config/styles'

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        paddingBottom: metrics.doubleBasePadding,
    },

    info: {
        flexDirection: 'row',
        padding: metrics.basePadding,
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    profile: {
        width: 24,
        height: 24,
        borderRadius: 24 / 2,
    },

    texts: {
        flex: 1,
        paddingRight: metrics.basePadding,
        paddingLeft: metrics.basePadding,
    },

    name: {
        fontSize: fonts.small,
    },

    localization: {
        fontSize: fonts.smaller,
        color: colors.regular,
    },

    ellipsis: {
        fontSize: fonts.big,
    },

    photo: {
        flex: 1,
        width: null,
        height: metrics.screenWidth,
    },

    photos: {
        flex: 1,
        width: metrics.screenWidth,
        height: metrics.screenWidth,
    },

    actions: {
        flexDirection: 'row',
        paddingTop: metrics.basePadding,
        paddingBottom: metrics.basePadding,
        paddingLeft: metrics.smallPadding,
        paddingRight: metrics.basePadding,
        justifyContent: 'flex-start',
    },

    icon: {
        paddingRight: metrics.basePadding,
        fontSize: 28,
    },

    plane: {
        fontSize: 21,
        flex: 1,
    },

    bookmark: {
        fontSize: 23,
    },

    likes: {
        paddingLeft: metrics.basePadding,
        fontSize: fonts.small,
        fontWeight: '500',
    },

    comments: {
        flexDirection: 'row',
        paddingLeft: metrics.basePadding,
        paddingRight: metrics.basePadding,
        paddingTop: metrics.smallPadding,
    },

    commentUser: {
        paddingRight: metrics.smallPadding,
        fontSize: fonts.small,
        fontWeight: '500',
    },

    commentDesc: {
        fontSize: fonts.small,
        fontWeight: '100',
    },

    details: {
        flexDirection: 'row',
    },

    time: {
        paddingLeft: metrics.basePadding,
        paddingRight: metrics.basePadding,
        paddingTop: metrics.smallPadding,
        fontSize: 9,
        color: colors.light,
        textTransform: 'uppercase',
    },

    before: {
        fontSize: fonts.bigger,
        position: 'absolute',
        color: 'rgba(255, 255, 255, 0.5)',
        top: (metrics.screenWidth / 2) - 10,
        right: metrics.screenWidth - 30,
        zIndex: 1,
    },

    after: {
        fontSize: fonts.bigger,
        position: 'absolute',
        color: 'rgba(255, 255, 255, 0.5)',
        top: (metrics.screenWidth / 2) - 10,
        left: metrics.screenWidth - 30,
        zIndex: 1,
    },
});

export default styles;