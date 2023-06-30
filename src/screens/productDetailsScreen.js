import { View, StyleSheet, Image, FlatList, useWindowDimensions, SafeAreaView, Text, ScrollView, Pressable,TouchableOpacity } from "react-native"
import products from "../data/products"
import { useDispatch, useSelector } from "react-redux";
import { cartSlice } from "../store/cartSlice";

const ProductDetailScreen = () => {
    const getWidth = useWindowDimensions();
    const dispatch = useDispatch();
    const product = useSelector(state => state.products.selectedProduct);
    const addToCart = (item) => {
        //console.warn('Added', item);
        dispatch(cartSlice.actions.addCartItem({product:product}));
    }
    return (
        <View>
            {/* //Image corosal */}
            <ScrollView>
                <SafeAreaView>
                    <FlatList pagingEnabled horizontal data={product.images} showsHorizontalScrollIndicator={false} renderItem={({ item }) => (
                        <Image source={{ uri: item }} style={{ width: getWidth.width, aspectRatio: 1 }} />
                    )} />
                </SafeAreaView>
                <View style={{ padding: 20 }}>

                    {/* title */}
                    <Text style={style.name}>{product.name}</Text>

                    {/* price */}
                    <Text style={style.price}>$ {product.price}</Text>

                    {/* description */}
                    <Text style={style.decs}>{product.description}</Text>
                </View>
            </ScrollView>

            {/* add to cart */}
            <TouchableOpacity onPress={() => addToCart(product)} style={style.cartBtn}>
                <Text style={style.btnText}>Add to cart</Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create(({
    name: {
        fontSize: 34,
        fontWeight: "500",
        marginVertical: 10
    },
    price: {
        fontWeight: '500',
        fontSize: 16,
        letterSpacing: 1.5
    },
    decs: {
        marginVertical: 10,
        fontSize: 18,
        lineHeight: 30,
        fontWeight: '300'
    },
    cartBtn: {
        position: 'absolute',
        backgroundColor: 'black',
        bottom: 30,
        width: "90%",
        alignSelf: "center",
        padding: 20,
        borderRadius: 30,
        alignItems: 'center'
    },
    btnText: {
        color: 'white',
        fontWeight: '500',
        fontSize: 16
    }
}))

export default ProductDetailScreen;