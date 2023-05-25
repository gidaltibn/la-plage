import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput, Image } from 'react-native';
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
import praia from '../../assets/icons/praia.jpg';
import api from '../../services/api';

/*
ESQUEMAS DE CORES
QUASE BRANCO #F2EBDC
BEGE         #FDB981
LARANJA      #D95C14
MARROM       #BF784E
LARANJA+     #D94B18
*/

export default function Home() {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(true);
    const canBack = navigation.canGoBack;
    //const categorias = [
    //  {  }
    //];
    const [categorias, setCategorias] = useState([]);
    const [produtos, setProdutos] = useState([]);

    async function fetchCategorias() {
        const response = await api.post("categoria/lista-categorias", {})
            .catch(function (error) { console.log(error) });
        await setCategorias(response.data.content);
    }

    async function carregaProdutos() {
        const response = await api.post("produto/lista-produtos", {})
            .catch(function (error) { console.log(error) });
        await setProdutos(response.data.content);
    }

    useEffect(() => {
        fetchCategorias();
        carregaProdutos();
        setLoading(false);
    }, []);

    /*const produtos = [
        { id: '0', nome: 'Peça 1', preco: 'R$ 189,00' },
        { id: '1', nome: 'Peça 2', preco: 'R$ 169,00' },
        { id: '2', nome: 'Peça 3', preco: 'R$ 159,00' },
        { id: '3', nome: 'Peça 4', preco: 'R$ 199,00' },
        { id: '4', nome: 'Peça 5', preco: 'R$ 179,00' },
        { id: '5', nome: 'Peça 6', preco: 'R$ 139,00' },
        { id: '6', nome: 'Peça 7', preco: 'R$ 149,00' },
        { id: '7', nome: 'Peça 8', preco: 'R$ 199,00' },
        { id: '8', nome: 'Peça 9', preco: 'R$ 159,00' },
    ];*/

    if (loading) {
        return (
            <View>
                <Text>CARREGANDO</Text>
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                <View style={styles.cabecalho}>
                    <TouchableOpacity style={styles.notificacaoContainer}><Image resizeMode='contain' source={envelope} style={styles.notificacaoIcone} /></TouchableOpacity>
                    <TouchableOpacity style={styles.perfilContainer} onPress={() => navigation.navigate('Auth')}><Image resizeMode='contain' source={person} style={styles.perfilIcone} /></TouchableOpacity>
                    <View style={styles.logoContainer}><Image resizeMode='contain' source={logo} style={styles.logoIcone} /></View>
                    <TouchableOpacity style={styles.favoritosContainer}><Image resizeMode='contain' source={heart} style={styles.favoritoIcone} /></TouchableOpacity>
                    <TouchableOpacity style={styles.carrinhoContainer} onPress={() => navigation.navigate('Cart')}><Image resizeMode='contain' source={bag} style={styles.bagIcone} /></TouchableOpacity>
                </View>
                <View style={styles.busca}>
                    <TextInput style={styles.buscaInput} />
                    <TouchableOpacity style={styles.buscaIconeContainer}><Image resizeMode='contain' source={search} style={styles.bagIcone} /></TouchableOpacity>
                </View>
                <View style={styles.barraDestaques}>
                    <Image resizeMode='cover' source={praia} style={styles.imagemDestaque} />
                </View>
                <View style={styles.barraCategorias}>
                    
                    <FlatList
                        horizontal
                        data={categorias}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.categoriasContainer}>
                                    <TouchableOpacity style={styles.itemCategoria} onPress={() => { for (let i = 0; i < categorias.length; i++) { console.log(categorias[i].nome) } }} >
                                        <Text style={styles.textoCategoria}>{item.nome}</Text>
                                    </TouchableOpacity>
                                </View>
                            );
                        }}
                    />
                </View>
                <View style={styles.conteudo}>
                    <FlatList
                        data={produtos}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity style={styles.itemBotao} onPress={() => navigation.navigate('Products', item)} >
                                    <View style={styles.item}>

                                    </View>
                                    <Text style={styles.texto}>{item.nome}</Text>
                                </TouchableOpacity>
                            );
                        }}
                        numColumns={2}
                    />

                </View>
            </View>
        );
    }

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
    notificacaoContainer: {
        width: "8%",
        height: "35%",
    },
    notificacaoIcone: {
        width: "100%",
        height: "100%",
        tintColor: '#FDB981',
    },
    perfilContainer: {
        width: "8%",
        height: "35%",
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
        marginLeft: '20%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoIcone: {
        width: "100%",
        height: "100%",
        tintColor: '#FDB981',
    },
    favoritosContainer: {
        width: "8%",
        height: "35%",
        marginLeft: '16%',
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
    busca: {
        width: "100%",
        height: "6%",
        alignItems: "center",
        flexDirection: 'row',
        paddingHorizontal: '2%',
        justifyContent: 'center',
    },
    buscaInput: {
        width: "75%",
        height: "60%",
        backgroundColor: "#F0F0F0",
        borderRadius: 10,
        elevation: 5,
        paddingLeft: 10,
        paddingRight: 10,
    },
    buscaIconeContainer: {
        width: "8%",
        height: "50%",
        marginLeft: 10,
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
        fontSize: Dimensions.get('window').width / 23,
        alignSelf: 'center',
        textAlign: 'center',
    },
    barraCategorias: {
        width: "100%",
        height: "6%",
        flexDirection: 'row',
    },
    categoriasContainer: {
        flex: 1,
        marginRight: 10,
        marginLeft: 10,
        justifyContent: 'center',
    },
    textoCategoria: {
        fontSize: Dimensions.get('window').width / 25,
        marginHorizontal: 30,
        color: 'white',
    },
    itemCategoria: {
        height: "60%",
        width: '100%',
        backgroundColor: '#D95C14',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 24,
        elevation: 5,
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

});
