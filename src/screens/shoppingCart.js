import { View, Text, StyleSheet, FlatList, SafeAreaView, Pressable } from "react-native"

// import cart from "../data/cart";
import CartListItem from '../component/CartListItem';
import { useSelector } from "react-redux";
import { orderTotal, selectDeliveryPrice, selectedCartItems, sumSubTotal } from "../store/cartSlice";

const ShoppingCart = () => {
    const cart = useSelector(state => state.cart.items);
    const subtotalPrice = useSelector(sumSubTotal);
    const deliveryFee = useSelector(selectDeliveryPrice);
    const total = useSelector(orderTotal);
    const showPriceContainer=useSelector(selectedCartItems);
    console.log('showPriceContainer',showPriceContainer);
    const footerComponent = () => {
        return (
            showPriceContainer>0 ?
            (<View style={styles.totalscontainer}>
                <View style={styles.row}>
                    <Text style={styles.text}>
                        Subtotal
                    </Text>
                    <Text style={styles.text}>
                        {subtotalPrice} US $
                    </Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.text}>
                        Delivery
                    </Text>
                    <Text style={styles.text}>
                        {deliveryFee} US $
                    </Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.textbold}>
                        Total
                    </Text>
                    <Text style={styles.textbold}>
                        {total} US $
                    </Text>
                </View>
            </View>):null
        )
    }
    const checkout = () => {

    };
    return (
        <View style={{ height: "100%" }}>
            <FlatList style={{ marginBottom: 80 }} data={cart} renderItem={({ item }) => (
            <CartListItem cartItem={item} />)}
                ListFooterComponent={footerComponent}
            />
            <Pressable onPress={checkout} style={styles.cartBtn}>
                <Text style={styles.btnText}>Checkout</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    totalscontainer: {
        margin: 20,
        paddingTop: 10,
        borderColor: '#ddd',
        borderTopWidth: 1
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 18,
        color: 'gray'
    }
    , textbold: {
        fontWeight: '500'

    },
    cartBtn: {
        position: 'absolute',
        backgroundColor: 'black',
        bottom: 30,
        width: "90%",
        alignSelf: "center",
        padding: 20,
        borderRadius: 100,
        alignItems: 'center'
    },
    btnText: {
        color: 'white',
        fontWeight: '500',
        fontSize: 16
    }
})

export default ShoppingCart;