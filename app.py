from flask import Flask, render_template, request, redirect, url_for
import db_utils
from data import personagens


app = Flask(__name__)


@app.route("/")
def home():
    return render_template("public/index.html")


@app.route("/historia")
def historia():
    return render_template("public/historia.html")


@app.route("/personagens")
def exibir_personagens():
    lista_personagens = db_utils.listar_personagens()
    return render_template("public/personagens.html", personagens=lista_personagens)


@app.route("/login")
def tela_login():
    return render_template("login.html")


# TODO: ROTA ESTÁ OK - TEM QUE LINKAR COM AS OUTRAS AINDA
# FUNÇÃO DA ROTA: Listar personagens
@app.route("/admin")
def home_admin():
    lista_personagens = db_utils.listar_personagens()
    return render_template(
        "admin/listar-personagens.html", personagens=lista_personagens
    )


# TODO: ROTA ESTÁ OK
# FUNÇÕES DA ROTA
"""
    1. DELETE: Se o método da requisição for POST e o formulário trouxer a mensagem "excluir", o personagem é removido do banco de dados
    2. UPDATE: Se o método da requisição for POST e o formulário trouxer a mensagem "salvar", o personagem é atualizado no banco de dados caso o id exista
    3. CREATE: Se o método da requisição for GET, ele abre o formulário de edição do personagem com as informações correspondentes ao id desse personagem
"""


@app.route("/admin/personagem/<int:id>", methods=["GET", "POST"])
def editar_personagem(id):
    if request.method == "POST":
        if "excluir" in request.form:
            db_utils.remover_personagem(id)
            return redirect(url_for("home_admin"))
        elif "salvar" in request.form:
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
            if id in personagens.keys():
                db_utils.atualizar_personagem(id, personagem)
    else:
        # Apenas retorna os dados de um personagem na página de cadastro
        personagem = db_utils.detalhar_personagem(id)
        personagem["id"] = id
        return render_template("/admin/editar-personagem.html", **personagem)

    return redirect(url_for("home_admin"))


@app.route("/admin/personagem", methods=["GET", "POST"])
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
        return render_template("admin/editar-personagem.html", id=db_utils.gerar_id())


app.run(debug=True)

# CREATE

# READ

# UPDATE

# DELETE
