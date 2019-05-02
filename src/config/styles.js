import {Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');

const colors = {
    primary: '#444',
    darker: '#111',
    dark: '#333',
    regular: '#666',
    light: '#C0C0C0',
    lighter: '#eee',
    white: '#FFF',
    transparent: 'rgba(0, 0, 0, 0)',
};

const fonts = {
    bigger: 24,
    big: 16,
    regular: 14,
    small: 12,
    smaller: 11,
};

const metrics = {
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
        ios: {headerHeight: 44, headerPadding: 20},
        android: {headerHeight: 44, headerPadding: 0},
    }),
    tabBarHeight: 50,
};

export {colors, fonts, metrics};