import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Quotes from './Quotes';

import AccountStack from './AccountStack';
import OrderStack from './OrderStack';
import HomeStack from './HomeStack';
import SearchStack from './SearchStack';

const Tab = createBottomTabNavigator();

const Drawer = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {height: 75},

        tabBarHideOnKeyboard: true,
      })}
      initialRouteName="Home">
      <Tab.Screen
        //  screenOptions={{ headerShown: false }}

        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <View style={{marginBottom: 48}}>
              <View
                style={[
                  styles.tabBarItem,
                  focused && styles.focusedTab,
                  styles.tabBarIcon,
                ]}>
                <Image
                  source={require('../assets/icon/home.png')}
                  style={{
                    tintColor: focused ? '#DA5466' : '#424242',
                    width: 24,
                    height: 24,
                  }}
                />
              </View>
            </View>
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? '#DA5466' : '#424242',
                fontSize: 10.57,
                fontWeight: '400',
                bottom: 22,
              }}>
              Home
            </Text>
          ),
        }}
      />
      <Tab.Screen
        //  screenOptions={{ headerShown: false }}
        name="Quotes"
        component={Quotes}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <View style={{marginBottom: 48}}>
              <View
                style={[
                  styles.tabBarItem,
                  focused && styles.focusedTab,
                  styles.tabBarIcon,
                ]}>
                <Image
                  source={require('../assets/icon/tag.png')}
                  style={{
                    tintColor: focused ? '#DA5466' : '#424242',
                    width: 24,
                    height: 24,
                    top: 2,
                  }}
                />
              </View>
            </View>
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? '#DA5466' : '#424242',
                fontSize: 10.57,
                fontWeight: '400',
                bottom: 22,
              }}>
              Quotes
            </Text>
          ),
        }}
      />
      <Tab.Screen
        //  screenOptions={{ headerShown: false }}
        name="Search"
        component={SearchStack}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <View style={{marginBottom: 48}}>
              <View
                style={[
                  styles.tabBarItem,
                  focused && styles.focusedTab,
                  styles.tabBarIcon,
                ]}>
                <Image
                  source={require('../assets/icon/search.png')}
                  style={{
                    tintColor: focused ? '#DA5466' : '#424242',
                    width: 24,
                    height: 24,
                    top: 2,
                  }}
                />
              </View>
            </View>
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? '#DA5466' : '#424242',
                fontSize: 10.57,
                fontWeight: '400',
                bottom: 22,
              }}>
              Search
            </Text>
          ),
        }}
      />
      <Tab.Screen
        //  screenOptions={{ headerShown: false }}
        name="Orders"
        component={OrderStack}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <View style={{marginBottom: 48}}>
              <View
                style={[
                  styles.tabBarItem,
                  focused && styles.focusedTab,
                  styles.tabBarIcon,
                ]}>
                <Image
                  source={require('../assets/icon/list.png')}
                  style={{
                    tintColor: focused ? '#DA5466' : '#424242',
                    width: 24,
                    height: 24,
                    top: 2,
                  }}
                />
              </View>
            </View>
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? '#DA5466' : '#424242',
                fontSize: 10.57,
                fontWeight: '400',
                bottom: 22,
              }}>
              Orders
            </Text>
          ),
        }}
      />
      <Tab.Screen
        //  screenOptions={{ headerShown: false }}

        name="Account"
        component={AccountStack}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <View style={{marginBottom: 48}}>
              <View
                style={[
                  styles.tabBarItem,
                  focused && styles.focusedTab,
                  styles.tabBarIcon,
                ]}>
                <Image
                  source={require('../assets/icon/user.png')}
                  style={{
                    tintColor: focused ? '#DA5466' : '#424242',
                    width: 24,
                    height: 24,
                    top: 2,
                  }}
                />
              </View>
            </View>
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? '#DA5466' : '#424242',
                fontSize: 10.57,
                fontWeight: '400',
                bottom: 22,
              }}>
              Account
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarItem: {
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1, // Add border to the upper side
    borderBottomWidth: 0, // Remove default border
    //borderColor: 'red', // Color of the border
    borderTopColor: 'white',
    width: 64.43,
    paddingVertical: 3,

    top: 10,
  },

  focusedTab: {
    borderTopColor: '#DA5466',
  },
  tabBarIcon: {
    paddingVertical: 10,
  },
});

export default Drawer;
