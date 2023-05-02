import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";

export default function CardOfertas(props) {
  return (
    <View style={styles.card}>
      {/* <Image
        style={styles.car}
        source={{ uri: props.game.capa }}
        resizeMode="cover"
      />
      <Text style={{ color: "black" }}> {props.game.titulo} </Text>
      <Text style={{ color: "black" }}> Gênero: {props.game.genero} </Text>
      <Text style={{ fontSize: 12 }}> R$ {props.game.preco}</Text>
      <TouchableOpacity onPress={props.deletarGame} style={styles.botao}>
        <Text style={{ color: "black", fontWeight: "bold" }}>Deletar</Text>
      </TouchableOpacity> */}

      <Image />
      <Text>Marca do Carro</Text>
      <Text>Modelo e ano</Text>
      <Text>Preço</Text>

      <TouchableOpacity>
        <Text style={{fontSize: 10, color: "yellow", fontWeight: "bold"}}>
          Favoritar
        </Text>
      </TouchableOpacity>
    </View>
  );
}


// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: "red",
//     width: "45%",
//     height: 250,
//     borderRadius: 10,
//     margin: 15,
//     justifyContent: "center",
//     alignItems: "center",
//   },

//   car: {
//     resizeMode: "stretch",
//     width: "100%",
//     height: 180,
//   },
// });
