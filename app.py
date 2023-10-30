from flask import Flask, render_template, request, redirect, url_for
import db_utils


app = Flask(__name__)


@app.route("/")
def home():
    return render_template("public/index.html")


@app.route("/historia")
def historia():
    return render_template("public/historia.html")


@app.route("/personagens")  # OK
def exibir_personagens():
    lista_personagens = db_utils.retornar_personagens()
    return render_template("public/personagens.html", personagens=lista_personagens)


@app.route("/login")
def tela_login():
    return render_template("login.html")


# PERSONAGENS

@app.route("/admin")
def home_admin():
    lista_personagens = db_utils.retornar_personagens()
    return render_template(
        "admin/listar-personagens.html",
        personagens=lista_personagens,
    )


    # rota para atualizar, excluir e salvar um novo personagem
@app.route("/admin/personagem/<int:id>", methods=["GET", "POST"])
def editar_personagem(id):
    if request.method == "POST":
        if "excluir" in request.form:
            db_utils.remover_personagem(id)

        elif "salvar" in request.form:

            id = request.form["id"]
            nome = request.form["nome"]
            ocupacao = request.form["ocupacao"]
            forca = request.form["forca"]
            destreza = request.form["id"]
            inteligencia = request.form["destreza"]
            idade = request.form["idade"]
            habilidade = request.form["habilidade"]
            historia = request.form["historia"]
            imagem = request.form["imagem"]

            dados_retornados = db_utils.retornar_personagem(id)

            if dados_retornados:
                db_utils.editar_personagem( id=id, nome=nome, ocupacao=ocupacao, forca=forca, destreza=destreza, inteligencia=inteligencia, idade=idade, habilidade=habilidade, historia=historia, imagem=imagem)
            else:
                db_utils.adicionar_personagem(nome=nome, ocupacao=ocupacao, forca=forca, destreza=destreza,inteligencia=inteligencia, idade=idade, habilidade=habilidade, historia=historia, imagem=imagem)
    else:
        ( id, nome, ocupacao, forca, destreza, inteligencia, idade, habilidade, historia, imagem) = db_utils.retornar_personagem(id)
        
        return render_template("/admin/editar-personagem.html", id=id, nome=nome, ocupacao=ocupacao, forca=forca, destreza=destreza, inteligencia=inteligencia,idade=idade, habilidade=habilidade, historia=historia, imagem=imagem )

    return redirect(url_for("home_admin"))

# USUÁRIOS

@app.route("/admin/usuarios")
def home_usuario_admin():
    lista_usuarios = db_utils.retornar_usuarios()
    return render_template("admin/listar-usuarios.html", usuarios=lista_usuarios,) 



@app.route("/admin/usuario/<int:id>", methods=["GET", "POST"])
def editar_usuario(id):
    if request.method == "POST":
        if "excluir" in request.form:
            db_utils.remover_usuario(id)

        elif "salvar" in request.form:

            id = request.form["id"]
            nome = request.form["nome"]
            login = request.form["login"]
            email = request.form["email"]
            senha = request.form["senha"]

            dados_retornados = db_utils.retornar_usuario(id)

            if dados_retornados:
                db_utils.editar_usuario( id=id, nome=nome, login=login, email=email, senha=senha)
            else:
                db_utils.adicionar_usuario(nome=nome, login=login, email=email, senha=senha)
    else:
        (id, nome, login, email, senha) = db_utils.retornar_usuario(id)
        
        return render_template("/admin/editar-usuario.html", id=id, nome=nome, login=login, email=email, senha=senha)

    return redirect(url_for("home_usuario_admin"))


# HABILIDADES

@app.route("/admin/habilidades")
def home_habilidade_admin():
    lista_habilidades = db_utils.retornar_habilidades()
    return render_template("admin/listar-habilidades.html", habilidades=lista_habilidades) 



@app.route("/admin/habilidade/<int:id>", methods=["GET", "POST"])
def editar_habilidade(id):
    if request.method == "POST":
        if "excluir" in request.form:
            db_utils.remover_habilidade(id)

        elif "salvar" in request.form:

            id = request.form["id"]
            nome = request.form["nome"]
            descricao = request.form["descricao"]

            dados_retornados = db_utils.retornar_habilidade(id)

            if dados_retornados:
                db_utils.editar_habilidade( id=id, nome=nome, descricao=descricao)
            else:
                db_utils.adicionar_habilidade(nome=nome, descricao=descricao)
    else:
        (id, nome, descricao) = db_utils.retornar_habilidade(id)
        
        return render_template("/admin/editar-habilidade.html", id=id, nome=nome, descricao=descricao)

    return redirect(url_for("home_habilidade_admin"))





app.run(debug=True)
