import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";

export default function CardOfertas(props) {
  return (
    <View style={styles.card}>
    
      {/* <Image source= {{uri:props.catof.carimg}}/> */}
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
})