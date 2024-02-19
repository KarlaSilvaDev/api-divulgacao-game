from flask import render_template
import sqlite3

# PERSONAGENS:


def gerar_id_personagens():
    conn = sqlite3.connect("database.db")
    cursor = conn.cursor()
    cursor.execute("SELECT seq  FROM sqlite_sequence WHERE name='personagens'")
    next_id = cursor.fetchone()[0]
    return next_id + 1


def adicionar_personagem(
    nome, ocupacao, forca, destreza, inteligencia, idade, habilidade, historia, imagem
):
    try:
        conn = sqlite3.connect("database.db")
        cursor = conn.cursor()
        sql_insert = "INSERT INTO personagens (nome, ocupacao, forca, destreza, inteligencia, idade, habilidade, historia, imagem) values (?,?,?,?,?,?,?,?,?)"
        cursor.execute(
            sql_insert,
            (
                nome,
                ocupacao,
                forca,
                destreza,
                inteligencia,
                idade,
                habilidade,
                historia,
                imagem,
            ),
        )
        id = cursor.lastrowid
        conn.commit()
        conn.close()
        return id
    except Exception as ex:
        print(ex)
        return 0


# retorna um único personagem
def retornar_personagem(id: int):
    try:
        if id == 0:
            return gerar_id_personagens(), "", "", "", "", "", "", "", "", ""
        conn = sqlite3.connect("database.db")
        cursor = conn.cursor()

        sql_select = "SELECT * FROM personagens WHERE id = ?"
        cursor.execute(sql_select, (id,))
        (
            id,
            nome,
            ocupacao,
            forca,
            destreza,
            inteligencia,
            idade,
            habilidade,
            historia,
            imagem,
        ) = cursor.fetchone()
        conn.close()

        return (
            id,
            nome,
            ocupacao,
            forca,
            destreza,
            inteligencia,
            idade,
            habilidade,
            historia,
            imagem,
        )
    except:
        return False


def editar_personagem(
    id: int,
    nome,
    ocupacao,
    forca,
    destreza,
    inteligencia,
    idade,
    habilidade,
    historia,
    imagem,
):
    try:
        conn = sqlite3.connect("database.db")
        cursor = conn.cursor()
        sql_update = "UPDATE personagens SET nome = ?, ocupacao = ?, forca = ?, destreza = ?, inteligencia = ?, idade = ?, habilidade = ?, historia = ?, imagem = ? WHERE id = ?"
        cursor.execute(
            sql_update,
            (
                nome,
                ocupacao,
                forca,
                destreza,
                inteligencia,
                idade,
                habilidade,
                historia,
                imagem,
                id,
            ),
        )
        conn.commit()
        conn.close()
        return True
    except Exception as ex:
        print(ex)
        return False


def remover_personagem(id: int):
    try:
        conn = sqlite3.connect("database.db")
        cursor = conn.cursor()
        sql_delete = "DELETE FROM personagens WHERE id = ?"
        cursor.execute(sql_delete, (id,))
        conn.commit()
        conn.close()
        return True
    except Exception as ex:
        print(ex)
        return False


def retornar_personagens():
    try:
        conn = sqlite3.connect("database.db")
        cursor = conn.cursor()
        sql_select = "SELECT * FROM personagens"
        cursor.execute(sql_select)
        personagens = cursor.fetchall()
        conn.close()
        return personagens
    except:
        return False


# USUÁRIOS


def gerar_id_usuarios():
    conn = sqlite3.connect("database.db")
    cursor = conn.cursor()
    cursor.execute("SELECT seq  FROM sqlite_sequence WHERE name='usuarios'")
    next_id = cursor.fetchone()[0]
    return next_id + 1


def adicionar_usuario(nome, login, email, senha):
    try:
        conn = sqlite3.connect("database.db")
        cursor = conn.cursor()
        sql_insert = "INSERT INTO usuarios (nome, login, email, senha) values (?,?,?,?)"
        cursor.execute(sql_insert, (nome, login, email, senha))
        id = cursor.lastrowid
        conn.commit()
        conn.close()
        return id
    except Exception as ex:
        print(ex)
        return 0


def retornar_usuario(id: int):
    try:
        if id == 0:
            return gerar_id_usuarios(), "", "", "", ""
        conn = sqlite3.connect("database.db")
        cursor = conn.cursor()

        sql_select = "SELECT * FROM usuarios WHERE id = ?"
        cursor.execute(sql_select, (id,))
        (id, nome, login, email, senha) = cursor.fetchone()
        conn.close()

        return (id, nome, login, email, senha)
    except:
        return False


def editar_usuario(id: int, nome, login, email, senha):
    try:
        conn = sqlite3.connect("database.db")
        cursor = conn.cursor()
        sql_update = (
            "UPDATE usuarios SET nome = ?, login = ?, email = ?, senha = ? WHERE id = ?"
        )
        cursor.execute(sql_update, (nome, login, email, senha, id))
        conn.commit()
        conn.close()
        return True
    except Exception as ex:
        print(ex)
        return False


def remover_usuario(id: int):
    try:
        conn = sqlite3.connect("database.db")
        cursor = conn.cursor()
        sql_delete = "DELETE FROM usuarios WHERE id = ?"
        cursor.execute(sql_delete, (id,))
        conn.commit()
        conn.close()
        return True
    except Exception as ex:
        print(ex)
        return False


def retornar_usuarios():
    try:
        conn = sqlite3.connect("database.db")
        cursor = conn.cursor()
        sql_select = "SELECT * FROM usuarios"
        cursor.execute(sql_select)
        usuarios = cursor.fetchall()
        conn.close()
        return usuarios
    except:
        return False


# HABILIDADES


def gerar_id_habilidades():
    conn = sqlite3.connect("database.db")
    cursor = conn.cursor()
    cursor.execute("SELECT seq  FROM sqlite_sequence WHERE name='habilidades'")
    next_id = cursor.fetchone()[0]
    return next_id + 1


def adicionar_habilidade(nome, descricao):
    try:
        conn = sqlite3.connect("database.db")
        cursor = conn.cursor()
        sql_insert = "INSERT INTO habilidades (nome, descricao) values (?,?)"
        cursor.execute(sql_insert, (nome, descricao))
        id = cursor.lastrowid
        conn.commit()
        conn.close()
        return id
    except Exception as ex:
        print(ex)
        return 0


def retornar_habilidade(id: int):
    try:
        if id == 0:
            return gerar_id_usuarios(), "", ""
        conn = sqlite3.connect("database.db")
        cursor = conn.cursor()

        sql_select = "SELECT * FROM habilidades WHERE id = ?"
        cursor.execute(sql_select, (id,))
        (id, nome, descricao) = cursor.fetchone()
        conn.close()

        return (id, nome, descricao)
    except:
        return False


def editar_habilidade(id: int, nome, descricao):
    try:
        conn = sqlite3.connect("database.db")
        cursor = conn.cursor()
        sql_update = "UPDATE habilidades SET nome = ?, descricao = ? WHERE id = ?"
        cursor.execute(sql_update, (nome, descricao, id))
        conn.commit()
        conn.close()
        return True
    except Exception as ex:
        print(ex)
        return False


def remover_habilidade(id: int):
    try:
        conn = sqlite3.connect("database.db")
        cursor = conn.cursor()
        sql_delete = "DELETE FROM habilidades WHERE id = ?"
        cursor.execute(sql_delete, (id,))
        conn.commit()
        conn.close()
        return True
    except Exception as ex:
        print(ex)
        return False


def retornar_habilidades():
    try:
        conn = sqlite3.connect("database.db")
        cursor = conn.cursor()
        sql_select = "SELECT * FROM habilidades"
        cursor.execute(sql_select)
        habilidades = cursor.fetchall()
        conn.close()
        return habilidades
    except:
        return False
