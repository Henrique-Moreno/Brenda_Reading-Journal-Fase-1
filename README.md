<body>
    <h1>Reading Journal - Projeto Fase 1</h1>
    <p>Este projeto é uma aplicação CRUD (Create, Read, Update, Delete) para gerenciar uma lista de livros, desenvolvida como parte da disciplina de Desenvolvimento de Sistemas Front-end do Curso de Graduação Online da PUCRS.</p>

<h2>📋 Requisitos do Projeto</h2>
    <p>O projeto consiste em uma aplicação React que permite:</p>
    <ul>
        <li>Cadastrar novos livros (Create).</li>
        <li>Listar os livros cadastrados (Read).</li>
        <li>Editar informações dos livros (Update).</li>
        <li>Excluir livros da lista (Delete).</li>
    </ul>

<h2>🚀 Como Executar o Projeto</h2>
    <p>Siga os passos abaixo para executar o projeto em sua máquina:</p>
    <ol>
        <li>
            <strong>Navegue até a pasta do projeto:</strong>
            <pre><code>cd Reading-Journal-Fase-1</code></pre>
        </li>
        <li>
            <strong>Instale as dependências:</strong>
            <pre><code>npm install</code></pre>
        </li>
        <li>
            <strong>Inicie o servidor de desenvolvimento:</strong>
            <pre><code>npm run dev</code></pre>
        </li>
        <li>
            <strong>Acesse o projeto no navegador:</strong>
            Abra o navegador e acesse <a href="http://localhost:5173" target="_blank">http://localhost:5173</a>.
        </li>
    </ol>

<h2>🧩 Componentes</h2>
    <p>O projeto é composto pelos seguintes componentes principais:</p>
    <ul>
        <li>
            <strong>NavBar:</strong> Componente de navegação com links para as páginas do projeto.
        </li>
        <li>
            <strong>BookForm:</strong> Formulário para cadastrar novos livros, com campos para título, autor, gênero e data de publicação. Este componente utiliza <code>props</code> para receber uma função que adiciona ou atualiza livros na lista.
        </li>
        <li>
            <strong>BookList:</strong> Lista de livros cadastrados, com opção de exclusão e edição. Este componente recebe a lista de livros e funções de exclusão/edição via <code>props</code>.
        </li>
    </ul>
    <p>
        <strong>Uso de Props:</strong> Os componentes <code>BookForm</code> e <code>BookList</code> são altamente reutilizáveis graças ao uso de <code>props</code>. Por exemplo:
        <ul>
            <li><code>BookForm</code> recebe uma função <code>onAddBook</code> ou <code>onEditBook</code> via props, que é chamada quando o formulário é submetido.</li>
            <li><code>BookList</code> recebe a lista de livros e funções de exclusão/edição via props, permitindo que a lógica de negócio seja gerenciada no componente pai.</li>
        </ul>
    </p>

<h2>📄 Páginas</h2>
    <p>O projeto possui as seguintes páginas:</p>
    <ul>
        <li>
            <strong>Home:</strong> Página inicial com uma mensagem de boas-vindas e uma breve descrição do projeto.
        </li>
        <li>
            <strong>Sobre:</strong> Página informativa que descreve o propósito do projeto e sua relação com a disciplina da PUCRS.
        </li>
        <li>
            <strong>Cadastrar:</strong> Página para cadastrar novos livros, utilizando o componente <code>BookForm</code>.
        </li>
        <li>
            <strong>Lista de Livros:</strong> Página que exibe a lista de livros cadastrados, com opção de exclusão e edição.
        </li>
    </ul>

<h2>🔧 Decisões de Desenvolvimento</h2>
    <p>Algumas decisões tomadas durante o desenvolvimento:</p>
    <ul>
        <li>
            <strong>Componentização:</strong> O projeto foi dividido em componentes reutilizáveis, como <code>NavBar</code>, <code>BookForm</code> e <code>BookList</code>.
        </li>
        <li>
            <strong>Estado Local:</strong> O estado da aplicação (lista de livros) foi gerenciado localmente usando o hook <code>useState</code>.
        </li>
        <li>
            <strong>Persistência de Dados:</strong> Para persistir os dados entre recarregamentos da página, foi utilizado o <code>localStorage</code>.
        </li>
    </ul>

<h2>📝 Licença</h2>
    <p>Este projeto é open-source e está sob a licença MIT. Sinta-se à vontade para utilizá-lo e modificá-lo conforme necessário.</p>
</body>
