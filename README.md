<body>
    <h1>Reading Journal - Projeto Fase 2</h1>
    <p>Este projeto é uma aplicação CRUD (Create, Read, Update, Delete) para gerenciar uma lista de livros, desenvolvida como parte da disciplina de Desenvolvimento de Sistemas Front-end do Curso de Graduação Online da PUCRS.</p>

<h2>📋 Requisitos do Projeto</h2>
    <p>O projeto consiste em uma aplicação React que permite:</p>
    <ul>
        <li>Cadastrar novos livros (Create).</li>
        <li>Listar os livros cadastrados (Read).</li>
        <li>Editar informações dos livros (Update).</li>
        <li>Excluir livros da lista (Delete).</li>
    </ul>

  <h2>🚀 Tecnologias Utilizadas</h2>
    <ul>
        <li><strong>React</strong> - Biblioteca principal para construção da interface</li>
        <li><strong>Bootstrap</strong> - Para estilização e componentes UI</li>
        <li><strong>Axios</strong> - Cliente HTTP para consumo da API</li>
        <li><strong>React Router DOM</strong> - Gerenciamento de rotas</li>
        <li><strong>Vitest</strong> - Framework para testes unitários</li>
    </ul>

<h2>🚀 Como Executar o Projeto</h2>
    <p>Siga os passos abaixo para executar o projeto em sua máquina:</p>
    <ol>
        <li>
            <strong>Navegue até a pasta do projeto:</strong>
            <pre><code>cd Brenda_Reading-Journal-Fase-1</code></pre>
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

<h2>🧪 Testes</h2>
    <p>Para executar os testes do projeto:</p>
    <pre><code>npm run test</code></pre>
    <p>Arquivos de teste implementados:</p>
    <ul>
        <li><code>BookList.test.jsx</code> - Testes do componente BookList</li>
        <li><code>NavBar.test.jsx</code> - Testes do componente NavBar</li>
        <li><code>Register.test.jsx</code> - Testes da página Register</li>
    </ul>

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
    <strong>Cadastrar:</strong> Página para cadastro de novos livros que implementa:
    <ul>
        <li>Integração com API via Axios (POST /books)</li>
        <li>Componente BookForm reutilizável para entrada de dados</li>
        <li>Tratamento completo de erros com try/catch</li>
        <li>Sistema de notificação Toast para feedback visual:
            <ul>
                <li>Toast de sucesso (verde) após cadastro bem-sucedido</li>
                <li>Toast de erro (vermelho) em caso de falha</li>
            </ul>
        </li>
        <li>Redirecionamento automático para /booklist após 3 segundos no sucesso</li>
        <li>Estado local gerenciado via useState para controle do Toast</li>
    </ul>
</li>
<li>
    <strong>Ver leituras:</strong> Página principal que implementa CRUD completo:
    <ul>
        <li>Operações API:
            <ul>
                <li>GET /books - Carrega a lista inicial de livros</li>
                <li>POST /books - Adiciona novos livros</li>
                <li>PUT /books/:id - Atualiza livros existentes</li>
                <li>DELETE /books/:id - Remove livros</li>
            </ul>
        </li>
        <li>Gerenciamento de estado complexo:
            <ul>
                <li>Estado para lista de livros (books)</li>
                <li>Estado para livro em edição (bookToEdit)</li>
                <li>Controle de notificações Toast</li>
            </ul>
        </li>
        <li>Funcionalidades avançadas:
            <ul>
                <li>Scroll automático para o formulário ao editar</li>
                <li>Formulário dual-mode (adição/edição)</li>
                <li>Atualização em tempo real da lista após mutações</li>
            </ul>
        </li>
    </ul>
</li>
    </ul>

<h2>🔧 Decisões de Desenvolvimento</h2>
<p>Algumas decisões tomadas durante o desenvolvimento:</p>
<ul>
    <li>
        <strong>Componentização:</strong>
        <ul>
            <li>Separação clara entre componentes apresentacionais (BookList) e containers (BookListPage)</li>
            <li>BookForm como componente controlado e reutilizável para criação e edição</li>
            <li>Isolamento da NavBar como componente independente</li>
        </ul>
    </li>
    <li>
        <strong>Gerenciamento de Estado:</strong>
        <ul>
            <li>Uso estratégico de useState para estado local em cada página</li>
            <li>Estado compartilhado via props entre componentes pais e filhos</li>
            <li>Gestão de estado de loading implícita através da renderização condicional</li>
        </ul>
    </li>
    <li>
        <strong>Integração com API:</strong>
        <ul>
            <li>Configuração centralizada do Axios com baseURL e headers padrão</li>
        </ul>
    </li>
    <li>
        <strong>Experiência do Usuário:</strong>
        <ul>
            <li>Implementação de Bootstrap Toasts para feedback visual das operações</li>
            <li>Redirecionamento automático após ações</li>
            <li>Scroll automático para o formulário durante edição</li>
            <li>Formulário dual-mode criação / edição</li>
        </ul>
    </li>
</ul>

<h2>📝 Licença</h2>
    <p>Este projeto é open-source e está sob a licença MIT. Sinta-se à vontade para utilizá-lo e modificá-lo conforme necessário.</p>
</body>
