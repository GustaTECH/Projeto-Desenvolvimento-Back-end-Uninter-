# Projeto Multidisciplinar - Back-end SGHSS (Módulo de Agendamento)

Olá, este é o repositório do meu projeto.

Aqui está o código-fonte do módulo Back-end que desenvolvi para o Sistema de Gestão Hospitalar e de Serviços de Saúde (SGHSS). Escolhi focar no **Agendamento de Consultas** porque é uma funcionalidade central e me permitiu aplicar as regras de negócio mais importantes, como garantir que um médico não possa ter duas consultas no mesmo horário.

A ideia foi criar uma API RESTful simples, mas bem estruturada, para mostrar que eu consigo pegar um requisito e transformá-lo em código funcional.

## Aluno
*   **Nome:** [Gustavo Farias de Santana]
*   **RU:** [4528863]

## Minhas Escolhas Técnicas
Para este projeto, optei por ferramentas que me permitissem focar na lógica do Back-end sem muita complicação de infraestrutura:

*   **Linguagem:** Node.js (porque é rápido e moderno).
*   **Framework:** Express.js (para criar a API REST de forma direta).
*   **Banco de Dados:** SQLite (escolhi ele por ser *serverless* e fácil de configurar, sem precisar de um servidor de banco de dados externo).

## Como Colocar a API para Rodar

Se você quiser testar a API na sua máquina, é só seguir estes passos.

1.  **Pré-requisitos:** Você só precisa ter o Node.js e o npm instalados.
2.  **Instalar as Dependências:** Abra o terminal na pasta do projeto e rode:
    ```bash
    npm install
    ```
3.  **Iniciar o Servidor:**
    ```bash
    node index.js
    ```
    A API vai subir e estará acessível em `http://localhost:3000`.

## Endpoints Principais

Aqui estão os caminhos que a API oferece. Usei o Postman para testar!

| Método | Rota | Descrição |
| :--- | :--- | :--- |
| `POST` | `/pacientes` | Cadastra um novo paciente. |
| `GET` | `/pacientes` | Lista todos os pacientes cadastrados. |
| `DELETE` | `/pacientes/:id` | Exclui um paciente pelo ID. |
| `POST` | `/medicos` | Cadastra um novo médico. |
| `POST` | `/consultas` | Agenda uma nova consulta (com a validação de horário). |
| `GET` | `/consultas/medico/:medicoId` | Lista as consultas de um médico específico. |

## Estrutura do Código
Para manter o código limpo e organizado, usei uma arquitetura em camadas (separando responsabilidades):
*   `src/routes`: Define as URLs.
*   `src/controllers`: Recebe a requisição e chama a lógica.
*   `src/services`: Onde estão as regras de negócio;
*   `src/repositories`: Acesso direto ao banco de dados.