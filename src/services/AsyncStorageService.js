import AsyncStorage from '@react-native-async-storage/async-storage';

// Função para salvar dados no AsyncStorage
export const saveData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
    console.log(`${key} salvo com sucesso.`);
  } catch (error) {
    console.error(`Erro ao salvar ${key}:`, error);
  }
};

// Função para ler dados do AsyncStorage
export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    }
    return null; // Retorna null se não encontrar os dados
  } catch (error) {
    console.error(`Erro ao ler ${key}:`, error);
    return null;
  }
};

// Função para remover dados do AsyncStorage
export const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    console.log(`${key} removido com sucesso.`);
  } catch (error) {
    console.error(`Erro ao remover ${key}:`, error);
  }
};

// Função para limpar todo o AsyncStorage (em caso de reset ou logout, por exemplo)
export const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
    console.log('AsyncStorage limpo com sucesso.');
  } catch (error) {
    console.error('Erro ao limpar AsyncStorage:', error);
  }
};
