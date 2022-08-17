import React from "react";
import { StyleSheet, Image, Dimensions, Text, View } from "react-native";

import topo from "../../assets/cebolinha.png";
import logo from "../../assets/logo.png";
import Texto from "../componentes/texto"
export default function Cesta() {
  return (
    <>
      <Image source={topo} style={estilos.topo} />
      <Text style={estilos.titulo}>Detalhes da cesta</Text>
      <View style={estilos.cesta}>
        <Texto style={estilos.nome}>Cesta de verduras</Texto>
        <View style={estilos.divLogo}>
          <Image style={estilos.imgLogo} source={logo} />
          <Texto style={estilos.nomeFazenda}>Jenny Jack Farm</Texto>
        </View>

        <Texto style={estilos.descricao}>
          Uma cesta com prudtos celecionados cuidadosamente da fazenda direto
          para sua cozinha
        </Texto>
        <Texto style={estilos.preco}>R$ 40,00 </Texto>
      </View>
    </>
  );
}
const width = Dimensions.get("screen").width;
const estilos = StyleSheet.create({
  topo: {
    width: "100%",
    height: (578 / 768) * width,
  },
  titulo: {
    textAlign: "center",
    width: "100%",
    position: "absolute",
    marginTop: 40,
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
  nome: {
    fontSize: 26,
    lineHeight: 42,
    color: "#464646",
    fontWeight:"bold"
   
  },
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 26,
    
  },
  nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft:12
  },
  descricao: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26,
  },
  preco: {
    color: "#2a9f25",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
  divLogo: {
    flexDirection: "row",
    alignItems: "center",
  },
  imgLogo: {
    height: 32,
    width:32,
    paddingVertical:12,
    borderRadius:4

  },
});
