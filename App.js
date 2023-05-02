import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Filmes from './screens/Filmes';

import CardOfertas from './screens/CardOfertas';

function Home() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Filmes />
    </View>
  );
}

function favorite() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text></Text>
    </View>
  );
}

function Profile() {
  return (
    <View styel={{flex:1, justifyContent:'center',alignItems:'center'}}>
      <Text></Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="DevCar"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="favorite"
        component={favorite}
        options={{
          tabBarLabel: 'favorite',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="star" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const [ofertas, setOferta] = React.useState([
    {
      id: 1,
      carro: "mini cooper",
      modelo: "Gol",
      ano: "2006",
      preco: "300000",
    },

    {
      id: 2,
      carro: "Impala",
      modelo: "Gol",
      ano: "1996",
      preco: "91000000",
    },

    {
      id: 3,
      carro: "Camionet",
      modelo: "fiat",
      ano: "2016",
      preco: "40600",
    },
  ])

  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
