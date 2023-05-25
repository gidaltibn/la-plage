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

export default function ListaEnderecos() {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);

    const enderecos = [
        {
            enderecoId: '0', nome: 'Recebedor 1', endereco: 'Rua A',
            numero: '23', bairro: 'Pindaí', complemento: "Quadra 5",
            cidade: "São José de Ribamar", estado: "MA", cep: "65110000"
        },
        {
            enderecoId: '1', nome: 'Recebedor 2', endereco: 'Estrada da Maioba KM 4',
            numero: '5', bairro: 'Trizidela', complemento: "Bloco 9",
            cidade: "São José de Ribamar", estado: "MA", cep: "65110000"
        },
        {
            enderecoId: '2', nome: 'Recebedor 3', endereco: 'Rua 9',
            numero: '5', bairro: 'Primavera', complemento: "Quadra 20",
            cidade: "São Luís", estado: "MA", cep: "65052855"
        },
    ];

    const [checked, setChecked] = React.useState({});

    const handleCheck = (enderecoId) => {
        setChecked((prevState) => {
            const newState = { ...prevState };
            newState[enderecoId] = !newState[enderecoId];
            return newState;
        });
    };

    const logado = false;

    return (
        <View style={styles.container}>
            <View style={styles.cabecalho}>
                <TouchableOpacity style={styles.houseContainer} onPress={() => navigation.navigate('Home')}><Image resizeMode='contain' source={house} style={styles.houseIcone} /></TouchableOpacity>
                <View style={styles.logoContainer}><Image resizeMode='contain' source={logo} style={styles.logoIcone} /></View>
                <View style={styles.favoritosContainer}></View>
            </View>
            <View style={styles.descricaoContainer}>
                <Text>Escolha o endereço:</Text>
                <View style={styles.enderecosCart}>
                    <FlatList
                        data={enderecos}
                        keyExtractor={item => item.enderecoId}
                        renderItem={({ item }) => {

                            let check1 = true
                            return (
                                <View style={styles.itemCartContainer}>
                                    <View style={styles.infoEnderecoCartContainer}>
                                        <Text style={styles.nomeEnderecoText}>Recebedor: {item.nome}</Text>
                                        <Text style={styles.categoriaEnderecoText}>{item.endereco}</Text>
                                        <Text style={styles.categoriaEnderecoText}>{item.cep}</Text>
                                        <Text style={styles.enderecoEnderecoText}>{item.bairro}</Text>
                                    </View>
                                    <View style={styles.selctorQtdCartContainer}>
                                        <Checkbox
                                            status={checked[item.produtoId] ? 'checked' : 'unchecked'}
                                            onPress={() => handleCheck(item.produtoId)}
                                        />
                                    </View>
                                </View>
                            );
                        }}
                    />
                </View>
                <View style={styles.rodapeContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Pagamento')} style={styles.comprarButton}>
                        <Text style={styles.comprarText}>Avançar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Entrega')} style={styles.novoEnderecoButton}>
                        <Text style={styles.novoEnderecoText}>Novo Endereço</Text>
                    </TouchableOpacity>
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
    enderecosCart: {
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
    infoEnderecoCartContainer: {
        width: '80%',
        height: 100,
        justifyContent: 'center',
    },
    nomeEnderecoText: {
        fontSize: Dimensions.get('window').width / 25,
        fontWeight: '500',
    },
    categoriaEnderecoText: {
        fontSize: Dimensions.get('window').width / 30,
        color: '#A0A0A0',
        fontWeight: '500',
    },
    enderecoEnderecoText: {
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
        height: '10%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    comprarButton: {
        width: '50%',
        height: '80%',
        backgroundColor: '#FDB981',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    novoEnderecoButton: {
        width: '30%',
        height: '80%',
        backgroundColor: '#FDB981',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    comprarText: {
        fontSize: Dimensions.get('window').width / 20,
        color: 'white',
        fontWeight: '500',
    },
    novoEnderecoText: {
        fontSize: Dimensions.get('window').width / 28,
        color: 'white',
        fontWeight: '500',
    },
    enderecoTotal: {
        fontSize: Dimensions.get('window').width / 20,
        fontWeight: 'bold',
    },
    enderecoTotalContainer: {
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
