import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import logo from '../../assets/icons/logo.png';
import house from '../../assets/icons/house.png';
import { MaskedTextInput } from 'react-native-mask-text';
import api from '../../services/api';

/*
ESQUEMAS DE CORES
QUASE BRANCO #F2EBDC
BEGE         #FDB981
LARANJA      #D95C14
MARROM       #BF784E
LARANJA+     #D94B18
*/

export default function Cadastro() {

    const [nome, setNome] = useState();
    const [cpf, setCpf] = useState();
    const [email, setEmail] = useState();
    const [celular, setCelular] = useState();
    const [senha, setSenha] = useState();

    const [visiblePass, setVisiblePass] = useState(true);

    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);

    const [repeteSenha, setRepeteSenha] = useState();



    const handleLogin = async () => {
        // Verificar se a senha fornecida pelo usuário corresponde à senha criptografada armazenada no banco de dados
        if (nome != null && cpf != null && email != null && celular != null && senha != null && repeteSenha != null) {
            if (senha === repeteSenha) {

                const response = await api.post("/usuario", {
                    nome: nome,
                    cpf: cpf,
                    email: email,
                    celular: celular,
                    password: senha
                });

                if (response.status === 200 || response.status === 201) {
                    Alert.alert("Bem-vindo(a), ", response.data.nome + "!", [{ text: 'OK', onPress: () => navigation.goBack() }]);
                } else if (response.status === 202){
                    Alert.alert("Eita, ", "Vimos que você já está cadastrado, tente recuperar sua senha caso não lembre!", [{ text: 'OK', onPress: () => navigation.goBack() }]);
                }
                else {
                    Alert.alert("Ah não! :´( ", "Infelizmente tivemos uma falha, mas tente novamente daqui a pouco!", [{ text: 'OK', onPress: () => navigation.goBack() }]);
                }
            } else {
                Alert.alert("As senhas não estão iguais!", "Corrige lá!");
            }
        } else {
            Alert.alert("Ei!", "Preenche todos os campos, please! :D");
        }

    };

    return (
        <View style={styles.container}>
            <View style={styles.cabecalho}>
                <TouchableOpacity style={styles.houseContainer} onPress={() => navigation.navigate('Home')}>
                    <Image resizeMode='contain' source={house} style={styles.houseIcone} />
                </TouchableOpacity>
                <View style={styles.logoContainer}>
                    <Image resizeMode='contain' source={logo} style={styles.logoIcone} />
                </View>
                <TouchableOpacity style={styles.favoritosContainer}>

                </TouchableOpacity>
            </View>
            <View style={styles.descricaoContainer}>
                <Text style={styles.enderecoTitulo}>Cadastro</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Nome*'
                    onChangeText={(text) => { setNome(text) }}
                />
                <MaskedTextInput
                    style={styles.textInput}
                    placeholder="CPF*"
                    mask="999.999.999-99"
                    keyboardType={"numeric"}
                    onChangeText={(text, rawText) => {
                        setCpf(rawText);
                    }}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder='E-mail*'
                    keyboardType="email-address"
                    onChangeText={(text) => { setEmail(text) }}
                />
                <MaskedTextInput
                    style={styles.textInput}
                    placeholder="Celular*"
                    mask="(99) 9 9999-9999"
                    keyboardType={'phone-pad'}
                    onChangeText={(text, rawText) => {
                        setCelular(rawText);
                    }}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder='Senha*'
                    onChangeText={(text) => setSenha(text)}
                    secureTextEntry={visiblePass}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder='Confirmar senha*'
                    onChangeText={(text) => setRepeteSenha(text)}
                    secureTextEntry={visiblePass}
                />
                <Text onPress={() => { setVisiblePass(!visiblePass) }}>Visualizar senha</Text>
            </View>
            <View style={styles.rodapeContainer}>
                <TouchableOpacity
                    style={styles.salvarButton}
                    onPress={() => {
                        handleLogin();
                    }}
                >
                    <Text style={styles.salvarText}>Salvar</Text>
                </TouchableOpacity>
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
    descricaoContainer: {
        flex: 1,
        padding: '5%',
    },
    enderecoTitulo: {
        fontSize: Dimensions.get('window').height / 30,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    textInput: {
        width: '85%',
        height: Dimensions.get('window').height / 20,
        backgroundColor: "#FFFFFF",
        marginTop: '3%',
        borderRadius: 10,
        alignSelf: 'center',
        paddingLeft: '6%',
        paddingRight: '5%',
        elevation: 5,
    },
    rodapeContainer: {
        width: '100%',
        height: '15%',
        alignItems: 'center',
    },
    salvarButton: {
        width: '50%',
        height: '80%',
        backgroundColor: '#FDB981',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    salvarText: {
        fontSize: Dimensions.get('window').width / 20,
        color: 'white',
        fontWeight: '500',
    },

});
