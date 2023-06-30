import { FlatList, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import ProductDetailScreen from "./productDetailsScreen";
import { useDispatch, useSelector } from "react-redux";
import { productSlice } from "../store/productslice";

const ProductScreen = ({ navigation }) => {
    console.log('ss', navigation);
    const products=useSelector(state=>state.products.products);
   // console.log('prod---',products)

    const dispatch=useDispatch();

    const navigateProductDetail = (item) => {
        //dispatch
        console.log("Item id",item.id);
        dispatch(productSlice.actions.setSelectedProduct(item.id))
        navigation.navigate('productdetail');
    }

    return (
        <FlatList numColumns={2} data={products} renderItem={({ item }) => (
            <TouchableOpacity onPress={()=>navigateProductDetail(item)} style={styles.itemContainer}>
                <View >
                    <Image source={{ uri: item.image }} style={styles.Image} />
                </View>
            </TouchableOpacity>
        )} />
    );
}

const styles = StyleSheet.create(({
    Image: {
        width: '100%', aspectRatio: 1
    },
    itemContainer: {
        width: '50%',
        padding: 1
    }
}))

export default ProductScreen;