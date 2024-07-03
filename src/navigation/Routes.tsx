import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import DetailScreen from 'src/screens/DetailScreen';
import ListScreen from 'src/screens/ListScreen';
import Settings from 'src/screens/Settings';
import {RootStackParamList} from 'src/types/navigationTypes';

const BottomTab = createMaterialBottomTabNavigator();

const Stack = createNativeStackNavigator<RootStackParamList>();

function ListStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ListScreen" component={ListScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} options={{}} />
    </Stack.Navigator>
  );
}

function Routes() {
  return (
    <BottomTab.Navigator
      initialRouteName="ListScreen"
      labeled={false}
      activeColor="#131074"
      activeIndicatorStyle={{backgroundColor: '#fff'}}
      inactiveColor="#bcbccc"
      barStyle={{backgroundColor: '#fff'}}>
      <BottomTab.Screen
        name="ListStack"
        component={ListStack}
        options={{
          tabBarIcon: ({color}) => <Icon name="bars" color={color} size={26} />,
          tabBarColor: 'white',
        }}
      />
      <BottomTab.Screen
        name="SettingsScreen"
        component={Settings}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => <Icon name="cog" color={color} size={26} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

export default Routes;
