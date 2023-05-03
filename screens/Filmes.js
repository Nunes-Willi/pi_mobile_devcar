import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

const ItemCarousel = (props) => {
  return (
    <View style={styles.slide}>
        <Image
          source={{uri: props.item.img}}
          style={styles.image}
        />
        <Text style={styles.text}>{props.item.carro}</Text>
      </View>
  )
}


const Carousel = () => {
  const ofertas = [
    {
      id: 1,
      img: "https://quatrorodas.abril.com.br/wp-content/uploads/2021/04/Novo-Mini-Cooper-S-2021-2.jpg?quality=70&strip=info",
      carro: "mini cooper",
      modelo: "Gol",
      ano: "2006",
      preco: "300000",
    },

    {
      id: 2,
      carro: "Impala",
      img: "https://static.wikia.nocookie.net/supernaturalbrasil/images/9/95/Tumblr_m0yd0fkkxv1rqeevno7_r1_500.png/revision/latest?cb=20130104232809&path-prefix=pt-br",
      modelo: "Gol",
      ano: "1996",
      preco: "91000000",
    },

    {
      id: 3,
      carro: "Camionete",
      img: "https://jornaldobairroalto.com.br/wp-content/uploads/2022/06/camionete-caminhonete-qual-certo.jpg",
      modelo: "fiat",
      ano: "2016",
      preco: "40600",
    },
  ]
  return (
    <Swiper style={styles.wrapper} autoplay>
      {
        ofertas.map(oferta => <ItemCarousel item={oferta}  key={oferta.id}/>)
      }
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '60%',
    resizeMode: 'cover',
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
});

export default Carousel;
