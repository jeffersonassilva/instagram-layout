import {StyleSheet} from 'react-native';
import {fonts, colors, metrics} from '../../styles';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 75,
    },

    outter: {
        width: 55,
        height: 55,
        borderRadius: 55 / 2,
        backgroundColor: colors.lighter,
        alignItems: 'center',
        justifyContent: 'center',
    },

    outterUnread: {
        backgroundColor: '#dc3170',
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
});

export default styles;