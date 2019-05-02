import {createStackNavigator} from "react-navigation";
import HomeScreen from "../screens/Home";
import ProfileScreen from "../screens/Profile";

const AppNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        Teste: ProfileScreen
    },
    {
        initialRouteName: "Home"
    }
);

export default AppNavigator;