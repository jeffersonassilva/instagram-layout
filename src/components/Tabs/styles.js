import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../config/styles';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        height: metrics.tabBarHeight,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: colors.lighter,
    },

    icon: {
        color: colors.dark,
        fontSize: 24,
    },

    active: {
        color: colors.darker,
    },

    main: {
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },

    mainIcon: {
        color: colors.white,
    },

    avatar: {
        width: 24,
        height: 24,
        borderRadius: 24 / 2,
    }
});

export default styles;