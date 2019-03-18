import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createMaterialTopTabNavigator
} from 'react-navigation';
import { Image } from 'react-native';

import { sharedNavigationOptions } from './config';
import BeersScreen from '../screens/AllBeers';
import CardScreen from '../screens/Card';
import EventsScreen from '../screens/AllEvents';
import HomeScreen from '../screens/Home';
import StoresScreen from '../screens/Stores';
import CardTab from '../components/CardTab';
import HistoryTab from '../components/HistoryTab';
import RewardsTab from '../components/RewardsTab';
import { colors, dimensions, h3, underline, shadow2 } from '../config/styles';

const TabScreens = createMaterialTopTabNavigator(
  {
    Card: CardTab,
    History: HistoryTab,
    Rewards: RewardsTab
  },
  {
    tabBarOptions: {
      activeTintColor: colors.black,
      inactiveTintColor: colors.neutralLight,
      indicatorStyle: {
        ...underline,
        borderBottomWidth: 3,
        backgroundColor: colors.brand,
        marginBottom: 10,
        marginLeft: 15,
        maxWidth: dimensions.fullWidth / 3 - 30,
        width: '100%'
      },
      labelStyle: {
        ...h3,
        marginTop: 0
      },
      style: {
        backgroundColor: 'white',
        ...shadow2,
        height: 50
      }
    }
  }
);

const HomeStack = createStackNavigator(
  {
    HomeScreen,
    CardScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
const BeersStack = createStackNavigator(
  {
    BeersScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
const EventsStack = createStackNavigator(
  {
    EventsScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
const StoresStack = createStackNavigator(
  {
    StoresScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
const CardStack = createStackNavigator(
  {
    CardScreen,
    TabScreens
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

export default createBottomTabNavigator(
  {
    Home: HomeStack,
    Card: CardStack,
    Beers: BeersStack,
    Events: EventsStack,
    Stores: StoresStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;

        let icon;
        if (routeName === 'Home') {
          icon = focused
            ? require('../assets/images/Navigation/home_icon_active.png')
            : require('../assets/images/Navigation/home_icon_inactive.png');
        } else if (routeName === 'Card') {
          icon = focused
            ? require('../assets/images/Navigation/card_icon_active.png')
            : require('../assets/images/Navigation/card_icon_inactive.png');
        }
        if (routeName === 'Beers') {
          icon = focused
            ? require('../assets/images/Navigation/beers_icon_active.png')
            : require('../assets/images/Navigation/beer_icon_inactive.png');
        } else if (routeName === 'Events') {
          icon = focused
            ? require('../assets/images/Navigation/events_icon_active.png')
            : require('../assets/images/Navigation/event_icon_inactive.png');
        } else if (routeName === 'Stores') {
          icon = focused
            ? require('../assets/images/Navigation/stores_icon_active.png')
            : require('../assets/images/Navigation/stores_icon_inactive.png');
        }
        return (
          <Image
            source={icon}
            style={{ maxWidth: 32, resizeMode: 'contain' }}
          />
        );
      }
    }),

    tabBarOptions: {
      activeTintColor: colors.brand,
      inactiveTintColor: colors.black,
      labelStyle: {
        fontSize: fonts.xxxs,
        fontFamily: fonts.primarySemi,
        lineHeight: 0
      },
      style: {
        backgroundColor: '#fff',
        height: 60,
        paddingTop: 5
      }
    }
  }
);
