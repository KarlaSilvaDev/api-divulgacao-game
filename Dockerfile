FROM python:3.8

WORKDIR /

COPY . .

# Atualiza pip e setuptools
RUN pip install --upgrade pip setuptools

# Instala gettext para suporte a localização
RUN apt-get update && apt-get install -y gettext

# Instala as dependências de compilação e outras necessárias
RUN apt-get install -y \
    pkg-config \
    libsystemd-dev \
    libdbus-1-dev \
    libgirepository1.0-dev \
    librsync-dev \
    libcups2-dev

# Instala as dependências do Flask a partir do arquivo requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Define a variável de ambiente para indicar a execução em ambiente de produção
ENV FLASK_ENV=production

# Expõe a porta 5000 do contêiner
EXPOSE 5000

# Comando para executar o aplicativo Flask quando o contêiner for iniciado
CMD ["flask", "run", "--host=0.0.0.0"]
