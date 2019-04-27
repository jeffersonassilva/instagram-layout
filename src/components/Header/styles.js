import {StyleSheet} from 'react-native';
import {metrics, colors} from '../../styles';

const styles = StyleSheet.create({
    container: {
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

    image: {
        width: 100,
        height: 28,
    },
});

export default styles;