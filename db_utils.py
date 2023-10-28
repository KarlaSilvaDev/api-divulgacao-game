from flask import render_template
import sqlite3


def gerar_id_personagens():
    conn = sqlite3.connect("database.db")
    cursor = conn.cursor()
    cursor.execute("SELECT seq  FROM sqlite_sequence WHERE name='personagens'")
    next_id = cursor.fetchone()[0]
    return next_id + 1

# CREATE - CRIAR


def adicionar_personagem(nome, classe, forca, destreza, inteligencia, idade, habilidade, historia, imagem):
    try:
        conn = sqlite3.connect("database.db")
        cursor = conn.cursor()
        sql_insert = "INSERT INTO personagens (nome, classe, forca, destreza, inteligencia, idade, habilidade, historia, imagem) values (?,?,?,?,?,?,?,?,?)"
        cursor.execute(sql_insert, (nome, classe, forca, destreza,
                       inteligencia, idade, habilidade, historia, imagem))
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
        cursor.execute(sql_select, (id, ))
        id, nome, classe, forca, destreza, inteligencia, idade, habilidade, historia, imagem = cursor.fetchone()
        conn.close()
        return id, nome, classe, forca, destreza, inteligencia, idade, habilidade, historia, imagem
    except:
        return False

# atualizar personagem
def atualizar_personagem(id: int, nome, classe, forca, destreza, inteligencia, idade, habilidade, historia, imagem):  # UPDATE - ATUALIZAR
    try:
        # tentar atualizar
        conn = sqlite3.connect("database.db")
        cursor = conn.cursor()
        sql_update = "UPDATE personagens SET nome = ?, classe = ?, forca = ?, destreza = ?, inteligencia = ?, idade = ?, habilidade = ?, historia = ?, imagem = ? WHERE id = ?"
        cursor.execute(sql_update, (nome, classe, forca, destreza,
                       inteligencia, idade, habilidade, historia, imagem, id))
        conn.commit()
        conn.close()
        return True
    except Exception as ex:
        print(ex)
        return False

# excluir personagem
def remover_personagem(id: int):
    try:
        # tentar atualizar
        conn = sqlite3.connect("database.db")
        cursor = conn.cursor()
        sql_delete = "DELETE FROM personagens WHERE id = ?"
        cursor.execute(sql_delete, (id, ))
        conn.commit()
        conn.close()
        return True
    except Exception as ex:
        print(ex)
        return False

# retorna todos os personagens
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
