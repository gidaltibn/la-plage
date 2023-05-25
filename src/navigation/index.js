import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Auth from "../screens/Auth";
import Products from "../screens/Products";
import Cart from "../screens/Cart";
import VerificarLogin from "../screens/VerificarLogin";
import Checkout from "../screens/Checkout";
import Entrega from "../screens/Entrega";
import Pagamento from "../screens/Pagamento";
import ListaEnderecos from "../screens/ListaEnderecos";
import Cadastro from "../screens/Cadastro";

const Stack = createNativeStackNavigator();

export default function AppStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Auth"
                component={Auth}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Products"
                component={Products}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Cart"
                component={Cart}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="VerificarLogin"
                component={VerificarLogin}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Checkout"
                component={Checkout}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Entrega"
                component={Entrega}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Pagamento"
                component={Pagamento}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ListaEnderecos"
                component={ListaEnderecos}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Cadastro"
                component={Cadastro}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}