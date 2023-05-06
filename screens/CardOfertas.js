import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";

export default function CardOfertas(props) {
  return (
    <View style={styles.card}>
      <Image
        style={styles.carro}
        source={{ uri: props.ofer.carimg }}
        resizeMode="cover"
      />

      <Text>{props.ofer.carro}</Text>
      <Text>{`${props.ofer.modelo} - ${props.ofer.ano}`}</Text>
      <Text>{`R$ ${props.ofer.preco}`}</Text>

      <TouchableOpacity onPress={props.favoritarCar}>
        <Text style={{ fontSize: 10, color: "yellow", fontWeight: "bold" }}>
          Favoritar
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "grey",
    width: "45%",
    height: 250,
    borderRadius: 10,
    margin: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  carro: {
    resizeMode: "stretch",
    width: "100%",
    height: 180,
  },
});
