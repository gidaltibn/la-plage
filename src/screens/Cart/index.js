import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import envelope from '../../assets/icons/envelope.png';
import bag from '../../assets/icons/bag.png';
import bagPlus from '../../assets/icons/bag-plus.png';
import heart from '../../assets/icons/heart.png';
import heartFill from '../../assets/icons/heart-fill.png';
import list from '../../assets/icons/list.png';
import person from '../../assets/icons/person.png';
import search from '../../assets/icons/search.png';
import logo from '../../assets/icons/logo.png';
import house from '../../assets/icons/house.png';
import praia from '../../assets/icons/praia.jpg';
import CounterInput from "react-native-counter-input";

/*
ESQUEMAS DE CORES
QUASE BRANCO #F2EBDC
BEGE         #FDB981
LARANJA      #D95C14
MARROM       #BF784E
LARANJA+     #D94B18
*/

export default function Cart() {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);

    const produtos = [
        { produtoId: '0', nome: 'Peça 1', preco: 'R$ 189,00' },
        { produtoId: '1', nome: 'Peça 2', preco: 'R$ 169,00' },
        { produtoId: '2', nome: 'Peça 3', preco: 'R$ 159,00' },
        { produtoId: '3', nome: 'Peça 4', preco: 'R$ 199,00' },
        { produtoId: '4', nome: 'Peça 5', preco: 'R$ 179,00' },
        { produtoId: '5', nome: 'Peça 6', preco: 'R$ 139,00' },
        { produtoId: '6', nome: 'Peça 7', preco: 'R$ 149,00' },
        { produtoId: '7', nome: 'Peça 8', preco: 'R$ 199,00' },
        { produtoId: '8', nome: 'Peça 9', preco: 'R$ 159,00' },
    ];

    const [checked, setChecked] = React.useState({});

    const handleCheck = (produtoId) => {
        setChecked((prevState) => {
            const newState = { ...prevState };
            newState[produtoId] = !newState[produtoId];
            return newState;
        });
    };

    const logado = false;

    return (
        <View style={styles.container}>
            <View style={styles.cabecalho}>
                <TouchableOpacity style={styles.houseContainer} onPress={() => navigation.navigate('Home')}><Image resizeMode='contain' source={house} style={styles.houseIcone} /></TouchableOpacity>
                <View style={styles.logoContainer}><Image resizeMode='contain' source={logo} style={styles.logoIcone} /></View>
                <TouchableOpacity style={styles.favoritosContainer}><Image resizeMode='contain' source={heart} style={styles.favoritoIcone} /></TouchableOpacity>
            </View>
            <View style={styles.descricaoContainer}>

                <View style={styles.produtosCart}>
                    <FlatList
                        data={produtos}
                        keyExtractor={item => item.produtoId}
                        renderItem={({ item }) => {

                            let check1 = true
                            return (
                                <View style={styles.itemCartContainer}>
                                    <Image source={praia} style={styles.imagemCartContainer} />
                                    <View style={styles.infoProdutoCartContainer}>
                                        <Text style={styles.nomeProdutoText}>{item.nome}</Text>
                                        <Text style={styles.categoriaProdutoText}>Hot Pants</Text>
                                        <Text style={styles.precoProdutoText}>{item.preco}</Text>
                                    </View>
                                    <View style={styles.selctorQtdCartContainer}>
                                        <Checkbox
                                            status={checked[item.produtoId] ? 'checked' : 'unchecked'}
                                            onPress={() => handleCheck(item.produtoId)}
                                        />
                                    </View>

                                    <CounterInput
                                        onChange={(counter) => {
                                            console.log("onChange Counter:", counter);
                                        }}
                                        increaseButtonBackgroundColor={'#FDB981'}
                                        min={0}
                                    />
                                </View>
                            );
                        }}
                    />
                </View>
                <View style={styles.rodapeContainer}>
                    <View style={styles.precoTotalContainer}>
                        <Text style={styles.total}>Total</Text>
                        <Text style={styles.precoTotal}>R$560,56</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('ListaEnderecos')} style={styles.comprarButton}><Text style={styles.comprarText}>Pagar Agora</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingTop: '2%',
        paddingBottom: '2%',
    },
    cabecalho: {
        width: "100%",
        height: "6%",
        alignItems: "center",
        flexDirection: 'row',
        paddingHorizontal: '2%',
        justifyContent: 'space-between'
    },
    houseContainer: {
        width: "8%",
        height: "35%",
    },
    houseIcone: {
        width: "100%",
        height: "100%",
        tintColor: '#FDB981',
    },
    perfilContainer: {
        width: "8%",
        height: "35%",
        marginRight: '30%',
    },
    perfilIcone: {
        width: "100%",
        height: "100%",
        tintColor: '#FDB981',
    },
    logoContainer: {
        width: "25%",
        height: "100%",
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    logoIcone: {
        width: "100%",
        height: "100%",
        tintColor: '#FDB981',
    },
    favoritosContainer: {
        width: "8%",
        height: "35%",
    },
    favoritoIcone: {
        width: "100%",
        height: "100%",
        tintColor: '#FDB981',
    },
    carrinhoContainer: {
        width: "8%",
        height: "35%",
    },
    bagIcone: {
        width: "100%",
        height: "100%",
        tintColor: '#FDB981',
    },
    conteudo: {
        flex: 1,
        width: "100%",
        alignItems: 'center',
    },
    barraDestaques: {
        width: "90%",
        height: "20%",
        alignItems: "center",
        alignSelf: 'center',
        paddingHorizontal: '2%',
        borderRadius: 15,
    },
    imagemDestaque: {
        width: "100%",
        height: "100%",
        borderRadius: 15,
    },
    texto: {
        fontSize: Dimensions.get('window').width / 20,
        alignSelf: 'center',
    },
    containerConteudo: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemBotao: {
        marginRight: 5,
        width: Dimensions.get('window').width / 2 - 30,
        margin: 5, // Espaçamento entre os itens
        marginHorizontal: "3%", // Espaçamento entre os itens
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
    },
    item: {
        width: "100%", // Defina a largura com base no tamanho da tela e no espaço que deseja entre os itens
        height: Dimensions.get('window').height / 2 - 150, // Defina a altura com base na largura para manter um quadrado
        backgroundColor: '#E0E0E0',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        elevation: 5,
    },
    descricaoContainer: {
        flex: 1,
        padding: '5%',
    },
    produtosCart: {
        width: '100%',
        height: '89%',
    },
    itemCartContainer: {
        flex: 1,
        padding: '3%',
        backgroundColor: '#F5F5F5',
        borderRadius: 15,
        marginBottom: '3%',
        elevation: 5,
        marginHorizontal: '3%',
        flexDirection: 'row',
        marginTop: '2%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagemCartContainer: {
        width: '25%',
        height: 100,
        borderRadius: 15,
        marginRight: '4%',
    },
    infoProdutoCartContainer: {
        width: '30%',
        height: 100,
        marginRight: '4%',
        justifyContent: 'center',
    },
    nomeProdutoText: {
        fontSize: Dimensions.get('window').width / 25,
        fontWeight: '500',
    },
    categoriaProdutoText: {
        fontSize: Dimensions.get('window').width / 30,
        color: '#A0A0A0',
        fontWeight: '500',
    },
    precoProdutoText: {
        fontWeight: 'bold',
        fontSize: Dimensions.get('window').width / 20,
    },
    selctorQtdCartContainer: {
        width: '15%',
        height: 100,
        justifyContent: 'center',
    },
    rodapeContainer: {
        width: '100%',
        height: '15%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    comprarButton: {
        width: '50%',
        height: '80%',
        backgroundColor: '#FDB981',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    comprarText: {
        fontSize: Dimensions.get('window').width / 20,
        color: 'white',
        fontWeight: '500',
    },
    precoTotal: {
        fontSize: Dimensions.get('window').width / 20,
        fontWeight: 'bold',
    },
    precoTotalContainer: {
        width: '50%',
        height: '100%',
        justifyContent: 'center',
    },
    total: {
        fontSize: Dimensions.get('window').width / 25,
        fontWeight: 'bold',
        color: 'grey',
    },

});
