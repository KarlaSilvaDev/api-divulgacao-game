from flask import Flask, render_template, request, redirect, url_for
import db_utils


app = Flask(__name__)


@app.route("/")
def home():
    return render_template("public/index.html")


@app.route("/historia")
def historia():
    return render_template("public/historia.html")


@app.route("/personagens")
def exibir_personagens():
    lista_personagens = db_utils.retornar_personagens()
    return render_template("public/personagens.html", personagens=lista_personagens)


# rota para atualizar, excluir e salvar um novo personagem
@app.route("/admin/personagem/<int:id>", methods=["GET", "POST"])
def editar_personagem(id):
    if request.method == "POST":
        if "excluir" in request.form:
            db_utils.remover_personagem(id)
            return redirect(url_for("home_admin"))
        elif "salvar" in request.form:
            id = request.form["id"]
            nome = request.form["nome"]
            classe = request.form["classe"]
            forca = request.form["forca"]
            destreza = request.form["id"]
            inteligencia = request.form["destreza"]
            idade = request.form["idade"]
            habilidade = request.form["habilidade"]
            historia = request.form["historia"]
            imagem = request.form["imagem"]
            dados_retornados = db_utils.retornar_personagem(id)
            if dados_retornados:
                db_utils.editar_personagem(id=id,  nome=nome, classe=classe, forca=forca, destreza=destreza,
                                              inteligencia=inteligencia, idade=idade, habilidade=habilidade, historia=historia, imagem=imagem)
            else:
                db_utils.adicionar_personagem(nome=nome, classe=classe, forca=forca, destreza=destreza, inteligencia=inteligencia, idade=idade, habilidade=habilidade, historia=historia, imagem=imagem)

            return redirect(url_for("exibir_personagens"))
    else:
        # Apenas retorna os dados de um personagem na página de cadastro
        id, nome, classe, forca, destreza, inteligencia, idade, habilidade, historia, imagem = db_utils.retornar_personagem(
            id)
        return render_template("/admin/editar-personagem.html", id=id, nome=nome, classe=classe, forca=forca, destreza=destreza, inteligencia=inteligencia, idade=idade, habilidade=habilidade, historia=historia, imagem=imagem)

    return redirect(url_for("home_admin"))


@app.route("/login")
def tela_login():
    return render_template("login.html")


# ADMIN: ROTA HOME - LISTAR PERSONAGENS
"""
    FUNÇÕES DA ROTA:
    1. Listar Personagens

    OPERAÇÕES CRUD:
    1. READ: renderiza a página com os dados de todos os personagens cadastrados
"""


@app.route("/admin")
def home_admin():
    lista_personagens = db_utils.retornar_personagens()
    return render_template("public/personagens.html", personagens=lista_personagens)


# ADMIN: ROTA EDITAR PERSONAGEM
"""
    FUNÇÕES DA ROTA:
    1. Abrir formulário de edição do personagem com os dados do personagem com id informado
    2. Deletar personagem
    3. Atualizar personagem

    OPERAÇÕES CRUD:
    1. DELETE: Se o método da requisição for POST e o formulário trouxer a mensagem "excluir", o personagem é removido do banco de dados
    2. UPDATE: Se o método da requisição for POST e o formulário trouxer a mensagem "salvar", o personagem é atualizado no banco de dados caso o id exista
    3. READ: Se o método da requisição for GET, ele abre o formulário de edição do personagem com as informações correspondentes ao id desse personagem
"""


# ADMIN: ROTA ADICIONAR PERSONAGEM
"""
    FUNÇÕES DA ROTA:
    1. Criar personagem
    2. Abrir formulário de cadastro de personagem
    
    OPERAÇÕES CRUD:
    1. DELETE: Se o método da requisição for POST e o formulário trouxer a mensagem "excluir", o personagem é removido do banco de dados
    2. UPDATE: Se o método da requisição for POST e o formulário trouxer a mensagem "salvar", o personagem é atualizado no banco de dados caso o id exista
    3. READ: Se o método da requisição for GET, ele abre o formulário de edição do personagem com as informações correspondentes ao id desse personagem
"""


""" @app.route("/admin/personagem", methods=["GET", "POST"])
def adicionar_personagem():
    if request.method == "POST":
        personagem = {
            chave: request.form[chave]
            for chave in [
                "nome",
                "classe",
                "força",
                "destreza",
                "inteligência",
                "idade",
                "história",
                "imagem",
            ]
        }

        db_utils.adicionar_personagem(**personagem)

        return redirect(url_for("home_admin"))
    else:
        return render_template(
            "admin/editar-personagem.html", id=db_utils.gerar_id(personagens)
        ) """


# ADMIN: ROTA HOME - LISTAR USUÁRIOS


@app.route("/admin/usuarios")
def home_usuario_admin():
    lista_usuarios = db_utils.listar(usuarios)
    return render_template("admin/listar-usuarios.html", usuarios=lista_usuarios)


# ADMIN: ROTA EDITAR USUÁRIO


@app.route("/admin/usuario/<int:id>", methods=["GET", "POST"])
def editar_usuario(id):
    if request.method == "POST":
        if "excluir" in request.form:
            db_utils.remover(id, usuarios)
            return redirect(url_for("home_usuario_admin"))
        elif "salvar" in request.form:
            usuario = {
                chave: request.form[chave]
                for chave in [
                    "nome",
                    "login",
                    "email",
                    "senha",
                ]
            }
            if id in usuarios.keys():
                db_utils.atualizar(id, usuarios, usuario)
    else:
        # Apenas retorna os dados de um personagem na página de cadastro
        usuario = db_utils.detalhar_por_id(id, usuarios)
        usuario["id"] = id
        return render_template("/admin/editar-usuario.html", **usuario)

    return redirect(url_for("home_usuario_admin"))


# ADMIN: ROTA ADICIONAR USUÁRIO


@app.route("/admin/usuario", methods=["GET", "POST"])
def adicionar_usuario():
    if request.method == "POST":
        personagem = {
            chave: request.form[chave] for chave in ["nome", "login", "email", "senha"]
        }

        db_utils.adicionar_usuario(**personagem)

        return redirect(url_for("home_usuario_admin"))
    else:
        return render_template(
            "admin/editar-usuario.html", id=db_utils.gerar_id(usuarios)
        )


app.run(debug=True)
