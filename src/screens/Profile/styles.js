import {StyleSheet} from 'react-native';
import {fonts, metrics} from '../../config/styles'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8FA',
        padding: metrics.basePadding,
    },

    left: {
        fontSize: fonts.regular,
        paddingLeft: metrics.basePadding,
        paddingRight: metrics.basePadding,
    },

    right: {
        fontSize: fonts.big,
        paddingLeft: metrics.basePadding,
        paddingRight: metrics.basePadding,
    },
});

export default styles;
