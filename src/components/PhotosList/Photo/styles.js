import {StyleSheet} from 'react-native';
import {metrics} from "../../../config/styles";

const styles = StyleSheet.create({
    container: {
        marginBottom: 1,
        width: (metrics.screenWidth - 2) / 3,
        height: (metrics.screenWidth - 2) / 3,
    },

    photo: {
        width: '100%',
        height: '100%',
    },
});

export default styles;
