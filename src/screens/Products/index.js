import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import envelope from '../../assets/icons/envelope.png';
import bag from '../../assets/icons/bag.png';
import bagPlus from '../../assets/icons/bag-plus.png';
import heart from '../../assets/icons/heart.png';
import heartFill from '../../assets/icons/heart-fill.png';

export default function Products(params) {
    console.log(params.route.params);
    const nome = params.route.params.nome;
    const preco = params.route.params.preco;
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.fotosContainer}></View>
            <View style={styles.iconesContainer}>
                <TouchableOpacity style={styles.favoritarIconeContainer}><Image resizeMode='contain' source={heart} style={styles.favoritoIcone}/></TouchableOpacity>
                <TouchableOpacity style={styles.carrinhoIconeContainer}><Image resizeMode='contain' source={bag} style={styles.bagIcone}/></TouchableOpacity>
            </View>
            <View style={styles.descricaoContainer}>
                <View style={styles.tituloContainer}>
                    <Text style={styles.titulo}>{nome}</Text>
                    <Text style={styles.preco}>{preco}</Text>
                </View>
                <View style={styles.detalhesContainer}>
                    <Text style={styles.detalhe}>
                        Lorem ipsum mollis enim ad suspendisse consectetur nam commodo platea, cursus hendrerit maecenas auctor magna mattis est nulla neque lectus, donec conubia dolor aenean hac sit taciti magna.
                    </Text>
                </View>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.comprarButton}><Text style={styles.comprarText}>Comprar</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.addCarrinhoButton}><Image resizeMode='contain' source={bagPlus} style={styles.bagPlusIcone}/></TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    fotosContainer: {
        width: '100%',
        height: '60%',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        backgroundColor: '#FDB981',
        elevation: 20,
    },
    iconesContainer: {
        width: '100%',
        height: '5%',
        position: 'absolute',
        marginTop: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: '5%',
        paddingRight: '5%',
        alignItems: 'center',
    },
    favoritarIconeContainer: {
        height: '80%',
        width: '9%',
        backgroundColor: '#F0F0F0',
        borderRadius: 500,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },
    favoritoIcone:{
        width: "65%",
        height: "65%",
        tintColor: '#FDB981', 
    },
    carrinhoIconeContainer: {
        height: '80%',
        width: '9%',
        backgroundColor: '#F0F0F0',
        borderRadius: 500,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },
    bagIcone: {
        width: "65%",
        height: "65%",
        tintColor: '#FDB981',
    },
    descricaoContainer: {
        flex: 1,
        padding: '5%',
    },
    tituloContainer: {
        width: '100%',
        height: '20%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    titulo: {
        fontSize: Dimensions.get('window').width / 20,
        fontWeight: 'bold',
    },
    subtitulo: {},
    preco: {
        fontSize: Dimensions.get('window').width / 20,
        fontWeight: 'bold',
    },
    detalhesContainer: {
        width: '100%',
        height: '50%',
        justifyContent: 'center'
    },
    detalhe: {
        fontSize: Dimensions.get('window').width / 25,
        color: '#5F5F5F'
    },
    buttonsContainer: {
        width: '100%',
        height: '30%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    comprarButton: {
        width: '60%',
        height: '90%',
        backgroundColor: '#FDB981',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    comprarText:{
        fontSize: Dimensions.get('window').width / 20,
        color: 'white',
        fontWeight: '500',
    },
    addCarrinhoButton: {
        width: '20%',
        height: '83%',
        backgroundColor: '#E0E0E0',
        borderRadius: 500,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bagPlusIcone: {
        width: "35%",
        height: "35%",
        tintColor: '#FDB981',
    },
});
