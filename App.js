import * as React from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Filmes from "./screens/Filmes";
import CardOfertas from "./screens/CardOfertas";
import Series from "./screens/Series";

// function Home() {
//   return (
//     <ScrollView style={{ flex: 1 }}>
//       <Filmes />
//       <View style={styles.cardOrf}>
//         {ofers.map((ofer) => (
//           <CardOfertas ofer={ofer} key={ofer.id} />
//         ))}
//       </View>
//     </ScrollView>
//   );
// }

// function Search() {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text></Text>
//     </View>
//   );
// }

// function Profile() {
//   return (
//     <View styel={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text></Text>
//     </View>
//   );
// }

// const Tab = createBottomTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator
//       initialRouteName="Home"
//       screenOptions={{
//         tabBarActiveTintColor: "#e91e63",
//       }}
//     >
//       <Tab.Screen
//         name="DevCar"
//         component={Home}
//         options={{
//           tabBarLabel: "Home",
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="home" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="search"
//         component={Search}
//         options={{
//           tabBarLabel: "pesquisar",
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="magnify" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={Profile}
//         options={{
//           tabBarLabel: "Profile",
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="account" color={color} size={size} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

// export default function App() {
//   const [ofers, setOfers] = React.useState([
//     {
//       id: 1,
//       carimg:
//         "https://quatrorodas.abril.com.br/wp-content/uploads/2021/04/Novo-Mini-Cooper-S-2021-2.jpg?quality=70&strip=info",
//       carro: "mini cooper",
//       modelo: "Gol",
//       ano: "2006",
//       preco: "300000",
//     },

//     {
//       id: 2,
//       carimg:
//         "https://quatrorodas.abril.com.br/wp-content/uploads/2021/04/Novo-Mini-Cooper-S-2021-2.jpg?quality=70&strip=info",
//       carro: "mini cooper",
//       modelo: "Gol",
//       ano: "2006",
//       preco: "300000",
//     },

//     {
//       id: 3,
//       carimg:
//         "https://quatrorodas.abril.com.br/wp-content/uploads/2021/04/Novo-Mini-Cooper-S-2021-2.jpg?quality=70&strip=info",
//       carro: "mini cooper",
//       modelo: "Gol",
//       ano: "2006",
//       preco: "300000",
//     },
//   ]);

//   return (
//     <NavigationContainer>
//       <MyTabs />
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   cardOrf: {
//     flex: 1,
//     flexDirection: "row",
//     flexWrap: "wrap",
//     width: "100%",
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

export default function App() {
  const [ofers, setOfers] = React.useState([
    {
      id: 1,
      carimg:
        "https://quatrorodas.abril.com.br/wp-content/uploads/2021/04/Novo-Mini-Cooper-S-2021-2.jpg?quality=70&strip=info",
      carro: "mini cooper",
      modelo: "Gol",
      ano: "2006",
      preco: "300000",
    },

    {
      id: 2,
      carimg:
        "https://revistacarro.com.br/wp-content/uploads/2021/06/Fiat-Pulse_1.jpg",
      carro: "Fiat",
      modelo: "Uno",
      ano: "2010",
      preco: "25000",
    },

    {
      id: 3,
      carimg:
        "https://garagem360.com.br/wp-content/uploads/2023/03/Fiat-Strada.jpg",
      carro: "Toyota",
      modelo: "Corolla",
      ano: "2018",
      preco: "80000",
    },

    {
      id: 4,
      carimg:
        "https://www.andreveiculos.com.br/wp-content/uploads/2023/01/Porsche_Panamera_4_E-Hybrid_Preta_2021_01-1.jpg",
      carro: "Porshe",
      modelo: "Panamera",
      ano: "2021",
      preco: "689.000",
    },
  ]);

  const favoritarCar = (id) => {
    const index = ofers.findIndex((ofer) => ofer.id === id);
    const novaLista = [...ofers];
    novaLista.splice(index, 1);
    setOfers(novaLista);
  };

  function Home() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <Filmes />
        <View style={styles.cardOrf}>
          {ofers.map((ofer) => (
            <CardOfertas
              ofer={ofer}
              key={ofer.id}
              favoritarCar={() => favoritarCar(ofer.id)}
            />
          ))}
        </View>
      </ScrollView>
    );
  }

  function Search() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text></Text>
      </View>
    );
  }

  function Profile() {
    return (
      <ScrollView>
        <View
          styel={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Series />
          <Text></Text>
        </View>
      </ScrollView>
    );
  }

  const Tab = createBottomTabNavigator();

  function MyTabs() {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: "#e91e63",
        }}
      >
        <Tab.Screen
          name="DevCar"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="search"
          component={Search}
          options={{
            tabBarLabel: "pesquisar",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="magnify"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

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
});
