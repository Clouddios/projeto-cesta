import React from "react";
import { Text, Image, StyleSheet, Dimensions, View } from 'react-native';

import topo from '../../assets/topo.png';
import logo from '../../assets/logo.png';

const width = Dimensions.get('screen').width;

export default function Cesta() {
    return <>
            <Image source={topo} style={estilos.topo} />
            <Text style={estilos.titulo}>Detalhe da Cesta</Text>

            <View style={estilos.cesta}>
                <View styles={estilos.fazenda}>
                    <Image source={logo} style={estilos.imgemFazenda} />
                    <Text style={estilos.nome}>Cesta de Verduras</Text>
                </View>
                <Text style={estilos.nomeFazenda}>Jenny Jack Farm</Text>
                <Text style={estilos.descricao}>Uma cesta diretamente da fazenda para sua mesa</Text>
                <Text style={estilos.preco}>R$ 40,00</Text>
            </View>
        </>
}

const estilos = StyleSheet.create({
    topo : {
        width: "100%",
        height: 578 / 768 * width
    },
    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16, 
        lineHeight: 26,
        color: "#fff",
        padding: 50
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    fazenda: {
        flexDirection: 'row', 
        paddingVertical: 12,
        marginLeft: 12
    },
    imgemFazenda: {
        width:32, 
        height:32,

    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26
    },
    nome: {
        fontSize:26,
        lineHeight:42,
        color:"#464646",
        fontWeight: "bold"
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    preco: {
        color: "#2a9f85", 
        fontWeight: "bold", 
        fontSize:26, 
        lineHeight: 42, 
        marginTop:8
    }
});