# 🟢 **Projeto: Chat em Tempo Real (Estilo WhatsApp/Telegram)**

---

## 📌 **Descrição (O que almejo construir)**

Um chat em tempo real inspirado no WhatsApp e Telegram, desenvolvido com foco em mensagens instantâneas, grupos e listas de amigos. O projeto usa **Node.js**, **Sequelize**, **MySQL** e **WebSocket** para garantir alta performance e escalabilidade, por enquanto apenas o backend está sendo desenvolvido.

---

## 🛠 **Tecnologias Utilizadas**

### Backend:

- **Node.js** + **Express**
- **Sequelize** (ORM) + **MySQL**
- **WebSocket** (Socket.io)
- **Redis** (Cache e filas)
- **Docker** + **Nginx**

### Infraestrutura:

- **Docker Compose** (para orquestração de containers)

## Funcionalidades Principais

- **Mensagens em tempo real**: Enviar e receber mensagens instantaneamente.
- **Grupos**: Criar grupos e interagir com outros usuários.
- **Lista de amigos**: Adicionar amigos e conversar diretamente.
- **Autenticação via número de telefone (OTP)**: Confirmação via Firebase ou Twilio.

## Como Rodar o Projeto

### 1. Clonar o Repositório && Instalar dependências.

```bash
 git clone https://github.com/seu-usuario/uaidizap.git
 cd uaidizap/backend
 npm install
```

### 2. Configurar as Variáveis de Ambiente.

Renomeie o arquivo `env.example` para `.env` na pasta backend e preencha com as configurações necessárias:

```bash
# Banco de Dados
DB_USER=root
DB_PASSWORD=yourpassword
DB_HOST=localhost
DB_NAME=your_database
DB_DIALECT=mysql
DB_PORT=3306

# Redis
REDIS_HOST=redishost
REDIS_PORT=6379
REDIS_PASSWORD=yoursecret

# Backend
JWT_SECRET= yoursecret
PORT= 3000

# Docker User
UID=1000
GID=1000
```

### 3. Subir os contêineres do Docker.

```bash
docker-compose up --env-file ./.env --build -d
```

### 4. Entre no contêiner (chat-backend) e instale as dependências.

```bash
docker exec -it chat-backend bash
npm install
```

Digite `exit` depois de instalar as dependências.

Ou abra outro terminal (se preferir), para seguir o próximo passo.

### 5. Verifique se o Docker tem acesso ao banco de dados

```bash
docker exec -it chat-db mysql -u root -p
```

Digite a senha que está em seu `.env` .

Depois verifique se o banco existe e se as tabelas foram criadas.

```sql
USE chat_app_db;
SHOW TABLES;
```

### 6. Rode as migrations.

```bash
docker exec -it chat-backend bash
npm run migrate
```

### 7. Inicie o Servidor Backend.

```bash
npm run dev
```

## **📌 Estrutura do Banco de Dados (UaiDizap)**

### **1️⃣ Tabela `users` (Usuários)**

| Campo | Tipo | Chave | Descrição |
| --- | --- | --- | --- |
| id | INT (PK, AI) | 🔑 PK | Identificador único do usuário |
| full_name | STRING |  | Nome completo |
| username | STRING (unique) | 🔑 Unique | Nome de usuário |
| email | STRING (unique) | 🔑 Unique | E-mail do usuário |
| phone_number | STRING (unique) | 🔑 Unique | Número de telefone |
| password_hash | STRING |  | Senha criptografada |
| profile_picture | STRING |  | URL da foto de perfil |
| createdAt | TIMESTAMP |  | Data de criação |
| updatedAt | TIMESTAMP |  | Última atualização |

---

### **2️⃣ Tabela `chats` (Conversas, incluindo chats privados e grupos)**

| Campo | Tipo | Chave | Descrição |
| --- | --- | --- | --- |
| id | INT (PK, AI) | 🔑 PK | Identificador único do chat |
| type | ENUM('private', 'group') |  | Tipo de chat (privado ou grupo) |
| createdAt | TIMESTAMP |  | Data de criação |
| updatedAt | TIMESTAMP |  | Última atualização |

---

### **3️⃣ Tabela `chat_members` (Relaciona usuários aos chats)**

| Campo | Tipo | Chave | Descrição |
| --- | --- | --- | --- |
| chat_id | INT | 🔑 FK | Relaciona com `chats(id)` |
| user_id | INT | 🔑 FK | Relaciona com `users(id)` |

---

### **4️⃣ Tabela `messages` (Mensagens enviadas)**

| Campo | Tipo | Chave | Descrição |
| --- | --- | --- | --- |
| id | INT (PK, AI) | 🔑 PK | Identificador único da mensagem |
| chat_id | INT | 🔑 FK | Relaciona com `chats(id)` |
| sender_id | INT | 🔑 FK | Usuário que enviou a mensagem |
| content | TEXT |  | Conteúdo da mensagem |
| createdAt | TIMESTAMP |  | Data de envio |

## Contribuição

Sinta-se à vontade para contribuir! Abra uma issue ou envie um pull request.

## Licença

Este projeto está sob a [Licença MIT](./LICENSE).

© 2025 Murillo Moura. Todos os direitos reservados.

Você pode usar, copiar, modificar e distribuir este projeto, desde que mantenha o aviso de copyright original.