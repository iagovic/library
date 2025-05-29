import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CartItem = ({ item, onIncrease, onDecrease, onRemove }) => {
  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.quantity}>Quantidade: {item.quantity}</Text>
        <Text style={styles.price}>Preço: R$ {item.price}</Text>
      </View>
      <View style={styles.actionsContainer}>
        <Button title="+" onPress={() => onIncrease(item.id)} />
        <Button title="-" onPress={() => onDecrease(item.id)} />
        <Button title="Remover" onPress={() => onRemove(item.id)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems: 'center',
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantity: {
    fontSize: 16,
    color: '#555',
  },
  price: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 120,
  },
});

export default CartItem;
