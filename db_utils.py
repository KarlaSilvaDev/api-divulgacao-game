from flask import render_template
from data import personagens
from datetime import datetime


def gerar_id():
    lista_de_chaves = list(personagens.keys())

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
    personagens[gerar_id()] = {
        "nome": nome,
        "classe": classe,
        "força": força,
        "destreza": destreza,
        "inteligência": inteligência,
        "idade": idade,
        "história": história,
        "imagem": imagem,
    }


def listar_personagens():  # READ - LER
    return personagens


def detalhar_personagem(id: int):  # READ - LER
    if id in personagens.keys():
        return personagens[id]
    else:
        return {}


def atualizar_personagem(id: int, dados_personagem: dict):  # UPDATE - ATUALIZAR
    personagens[id].update(dados_personagem)


def remover_personagem(id: int):  # DELETE - DELETAR
    del personagens[id]


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
