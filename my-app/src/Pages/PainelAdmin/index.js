
import { useState, useEffect } from "react";
import "./painelAdmin.css";
import Header from "../../Components/Header";
import imagem from "../../assets/o-que-considerar-para-comprar-uma-fazenda.jpg";
import Produto from "../../Components/Produto";
import apiProdutos from "../../Services/serviceProdutos";



function PainelAdmin() {

    let id = window.location.search;
    id = id.replace('?', '');

    const [agricultor, setAgricultor] = useState([]);
    const [produtos, setProdutos] = useState([]);

    const [newProduto, setProduto] = useState({ nome: "", agricultorId: id, quantidade: "", valor: "", descricao: "" });


    const postnewProduto = () => {
        apiProdutos
            .post("", newProduto)
            .then((response) => { console.log("deu certo") })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }


    useEffect(() => {


        function loadAgricultor() {
            let url = `https://localhost:44362/api/pequenoAgricultor/agricultor/${id}`;
            fetch(url)
                .then((r) => r.json())
                .then((data) => {
                    setAgricultor(data);
                });
        }

        function loadProdutos() {
            let url = "https://localhost:44362/api/produto/produto";
            fetch(url)
                .then((r) => r.json())
                .then((data) => {
                    data.forEach(element => {
                        if (element.agricultorId == id) {
                            setProdutos([...produtos, element]);

                        }
                    });
                });
        }

        loadProdutos();
        loadAgricultor();
    }, []);



    // useEffect(() => {
    //     console.log(newProduto)
    // }, [newProduto]);

    return (
        <div className="body-admin">
            <Header />
            <div className="container conteudo">

                <div className="infos-agricultor">
                    <div className="perfil">

                        <div className="cabecalho">
                            <img src={imagem} className="foto-perfil" />
                            <div className="detalhes">
                                <h3>{agricultor.nome}</h3>
                                <img src="https://raw.githubusercontent.com/thxjao/Agrisus-Frontend/master/my-app/src/assets/rank.png" className="nota" />
                            </div>
                        </div>

                        <div className="informacoes-agricultor">
                            <div className="informacao-agricultor">
                                <span className="dados-agricultor">{agricultor.telefone}</span>
                            </div>
                            <div className="informacao-agricultor">
                                <span className="dados-agricultor">{agricultor.endereco}</span>
                            </div>
                            <div className="informacao-agricultor">
                                <span className="dados-agricultor">{agricultor.motivacao}</span>
                            </div>
                        </div>


                    </div>
                </div>
                <div className="criar-produto">

                    <div className="titulo">
                        <h5 className="titulo-cadastro">Cadastrar Produto</h5>
                    </div>
                    <div className="form">
                        <div className="linha">
                            <div className="classInput">
                                <label> Nome </label>
                                <input placeholder="Digite o nome do produto" value={newProduto.nome} onChange={(e) => setProduto((prevState => ({ ...prevState, nome: e.target.value })))}></input>
                            </div>

                            <div className="classInput">
                                <label> Descrição </label>
                                <input placeholder="Digite a descrição do seu produto" value={newProduto.descricao} onChange={(e) => setProduto((prevState => ({ ...prevState, descricao: e.target.value })))}></input>
                            </div>
                        </div>

                        <div className="linha">
                            <div className="classInput">
                                <label> Quantidade </label>
                                <input placeholder="Digite a quantidade disponível" type="text" value={newProduto.quantidade} onChange={(e) => setProduto((prevState => ({ ...prevState, quantidade: parseFloat(e.target.value) })))}></input>
                            </div>

                            <div className="classInput">
                                <label> Valor </label>
                                <input type="text" placeholder="Digite o valor do produro" value={newProduto.valor} onChange={(e) => setProduto((prevState => ({ ...prevState, valor: parseFloat(e.target.value) })))} ></input>
                            </div>
                        </div>
                    </div>

                    <div className="botao">
                        <button className="button-yellow" onClick={postnewProduto}>Cadastrar</button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default PainelAdmin;
