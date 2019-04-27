import {StyleSheet} from 'react-native';
import {fonts, colors, metrics} from '../../styles';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
    },

    outter: {
        width: 59,
        height: 59,
        borderRadius: 59 / 2,
        backgroundColor: colors.lighter,
        alignItems: 'center',
        justifyContent: 'center',
    },

    outterUnread: {
        backgroundColor: '#dc3170',
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
});

export default styles;