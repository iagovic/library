import React from 'react';
import { View, Text, Image, Button, StyleSheet, ScrollView } from 'react-native';
import { formatCurrency } from '../utils/formatCurrency'; // Importando a função de formatação de moeda

const ProductDetailScreen = ({ route, navigation }) => {
  const { product } = route.params;

  const addToCart = (product) => {
    // Lógica para adicionar o produto ao carrinho
    console.log('Produto adicionado ao carrinho:', product);
    navigation.navigate('Cart');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>Preço: {formatCurrency(product.price)}</Text>  {/* Usando a função de formatação */}
        <Button title="Adicionar ao Carrinho" onPress={() => addToCart(product)} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  detailsContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginBottom: 15,
    textAlign: 'center',
  },
  price: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default ProductDetailScreen;
