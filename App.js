import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import ProductScreen from './src/screens/productsScreen';
import products from './src/data/products';
import ProductDetailScreen from './src/screens/productDetailsScreen';
import ShoppingCart from './src/screens/shoppingCart';
import Navigation from './src/navigation';
import { Store } from './src/store';
import { Provider } from 'react-redux';

export default function App() {

  return (
    <Provider store={Store}>
      <View style={styles.container}>
        <Navigation />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

});
