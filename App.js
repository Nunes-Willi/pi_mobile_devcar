import * as React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Filmes from './screens/Filmes';
import CardOfertas from './screens/CardOfertas';

function Home() {
  return (
    <ScrollView style={{ flex: 1}}>
      <Filmes />
      <View style={styles.cardOrf}>
      <CardOfertas/>
      <CardOfertas/>
      <CardOfertas/>
      <CardOfertas/>
      </View>
    </ScrollView>
  );
}

function Search() {
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
        name="search"
        component={Search}
        options={{
          tabBarLabel: 'pesquisar',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={size} />
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
  // const [ofertas, setOfertas] = React.useState([
  //   {
  //     id: 1,
  //     carimg: "https://quatrorodas.abril.com.br/wp-content/uploads/2021/04/Novo-Mini-Cooper-S-2021-2.jpg?quality=70&strip=info",
  //     carro: "mini cooper",
  //     modelo: "Gol",
  //     ano: "2006",
  //     preco: "300000",      
  //   },
  //   {
  //     id: 2,
  //     carimg: "https://quatrorodas.abril.com.br/wp-content/uploads/2021/04/Novo-Mini-Cooper-S-2021-2.jpg?quality=70&strip=info",
  //     carro: "mini cooper",
  //     modelo: "Gol",
  //     ano: "2006",
  //     preco: "300000",      
  //   },
  //   {
  //     id: 3,
  //     carimg: "https://quatrorodas.abril.com.br/wp-content/uploads/2021/04/Novo-Mini-Cooper-S-2021-2.jpg?quality=70&strip=info",
  //     carro: "mini cooper",
  //     modelo: "Gol",
  //     ano: "2006",
  //     preco: "300000",
  //   },
  // ]);

  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  cardOrf: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
})
