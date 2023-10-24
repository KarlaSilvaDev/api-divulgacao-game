from flask import render_template
from data import personagens, usuarios
from datetime import datetime


def gerar_id(dicionario: dict):
    lista_de_chaves = list(dicionario.keys())

    if lista_de_chaves:
        id = lista_de_chaves[-1] + 1
        print(id)
    else:
        id = 1

    return id


# CREATE - CRIAR
def adicionar_personagem(
    nome, classe, força, destreza, inteligência, idade, história, imagem
):
    personagens[gerar_id(personagens)] = {
        "nome": nome,
        "classe": classe,
        "força": força,
        "destreza": destreza,
        "inteligência": inteligência,
        "idade": idade,
        "história": história,
        "imagem": imagem,
    }


def adicionar_usuario(nome, login, email, senha):
    usuarios[gerar_id(usuarios)] = {
        "nome": nome,
        "login": login,
        "email": email,
        "senha": senha,
    }


def listar(dicionario: dict):  # READ - LER
    return dicionario


def detalhar_por_id(id: int, dicionario: dict):  # READ - LER
    if id in dicionario.keys():
        return dicionario[id]
    else:
        return {}


def atualizar(id: int, dicionario: dict, dados_editados: dict):  # UPDATE - ATUALIZAR
    dicionario[id].update(dados_editados)


def remover(id: int, dicionario: dict):  # DELETE - DELETAR
    del dicionario[id]


def tratar_iso_para_dmy(data: str):  # TRATAMENTO DE DATAS - DMY = DIA, MÊS E ANO
    if "-" in data:
        data = datetime.strptime(data, "%Y-%m-%d")
        return data.strftime("%d/%m/%Y")
    else:
        return data


def tratar_dmy_para_iso(data: str):  # TRATAMENTO DE DATAS - DMY = DIA, MÊS E ANO
    if "/" in data:
        data = datetime.strptime(data, "%d/%m/%Y")
        return data.strftime("%Y-%m-%d")
    else:
        return data
