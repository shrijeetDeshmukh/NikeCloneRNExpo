import { NavigationContainer } from "@react-navigation/native";
import ProductScreen from "./screens/productsScreen";
import ProductDetailScreen from "./screens/productDetailsScreen";
import ShoppingCart from "./screens/shoppingCart";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity,Text } from "react-native";
import {FontAwesome5} from '@expo/vector-icons';
import { useSelector } from "react-redux";
import { selectedCartItems } from "./store/cartSlice";

const Navigation =()=>{
    const Stack=createNativeStackNavigator();
    const cartItemCount=useSelector(selectedCartItems)
return(
    <NavigationContainer>
        <Stack.Navigator screenOptions={{contentStyle:{backgroundColor:'white'}}}>
            <Stack.Screen name="Nike Products" component={ProductScreen} options={({navigation})=>({headerRight:()=><TouchableOpacity onPress={()=>navigation.navigate('cart')} style={{flexDirection:'row'}}><FontAwesome5 size={25} name="shopping-cart" /><Text style={{marginLeft:6,fontWeight:'500',marginBottom:1}}>{cartItemCount}</Text></TouchableOpacity>})}/>
            <Stack.Screen name="productdetail" component={ProductDetailScreen} options={{presentation:'modal'}}/>
            <Stack.Screen name="cart" component={ShoppingCart} />
            </Stack.Navigator>
    </NavigationContainer>
)
}

export default Navigation;