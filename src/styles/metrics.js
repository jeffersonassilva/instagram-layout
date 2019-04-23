import {Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');

export default {
    smallPadding: 5,
    basePadding: 10,
    mediumPadding: 15,
    doubleBasePadding: 20,
    smallMargin: 5,
    baseMargin: 10,
    mediumMargin: 15,
    doubleBaseMargin: 20,
    screenWidth: width < height ? width : height,
    screenHeight: width < height ? height : width,
    baseRadius: 3,
    ...Platform.select({
        ios: {headerHeight: 64, headerPadding: 20},
        android: {headerHeight: 44, headerPadding: 0},
    }),
    tabBarHeight: 50,
};