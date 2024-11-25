# # Micro Frontend 2 - Dashboard

Este é o **Micro Frontend 2** da Dashboard, desenvolvido como parte de uma arquitetura de micro frontends, que permite a construção modular de interfaces em uma aplicação. Este micro frontend é responsável por uma seção específica da dashboard e é independente, podendo ser integrado com outros micro frontends.

## Tecnologias e Bibliotecas Utilizadas

- **React** - Biblioteca principal para a construção de interfaces de usuário.
- **TypeScript** - Superset do JavaScript que adiciona tipagem estática e facilita a manutenção do código.
- **Vite** - Ferramenta de build moderna que oferece uma experiência rápida e otimizada para desenvolvimento em projetos frontend.
- **Material UI** - Biblioteca de componentes React para design de interfaces consistentes e responsivas.
- **React Router** - Biblioteca para navegação entre páginas e controle de rotas.
- **Axios** - Cliente HTTP para fazer requisições à API.
- **Jest** - Framework de testes JavaScript usado para realizar testes automatizados no código.

## Funcionalidades

- **Navegação de micro frontend**: O micro frontend permite a navegação entre diferentes seções da dashboard como "Home", "Clientes" e "Produtos".
- **Responsividade**: A interface se adapta bem a dispositivos móveis e desktops.
- **Interface personalizada**: Utiliza o Material UI para garantir uma interface visualmente agradável e consistente.

## Instalação

Para instalar e rodar o projeto localmente, siga os passos abaixo:

### 1. Clone o repositório

```bash
git clone https://seu-repositorio-url.git
cd micro-frontend-2

2. Instale as dependências
bash
Copiar código
npm install
3. Execute o projeto em modo de desenvolvimento
bash
Copiar código
npm run dev
O projeto estará disponível em http://localhost:3000 ou na URL que o Vite fornecer no terminal.

4. Para rodar os testes
Este projeto usa o Jest para testes. Para rodar os testes, execute o seguinte comando:

bash
Copiar código
npm test
5. Criar uma versão de produção
Para gerar os arquivos de produção, execute:

bash
Copiar código
npm run build
Os arquivos de build serão gerados na pasta dist/.

Estrutura de Arquivos
src/: Contém todo o código-fonte do projeto, incluindo componentes React, lógica de navegação, API, etc.
tests/: Contém os testes automatizados do projeto.
vite.config.ts: Arquivo de configuração do Vite.
tsconfig.json: Configuração do TypeScript.
Scripts
dev: Inicia o servidor de desenvolvimento com Vite.
build: Executa a compilação do projeto e gera os arquivos de produção.
lint: Executa o ESLint para verificar e corrigir problemas de código.
preview: Executa o preview da versão de produção gerada após o build.
test: Executa os testes utilizando o Jest.
Dependências
Bibliotecas principais:
React - ^18.3.1
TypeScript - ~5.6.2
Material UI - ^6.1.8
React Router DOM - ^7.0.1
Axios - ^1.7.7
Jest - ^29.7.0
Dependências de desenvolvimento:
Vite - ^5.4.10
ESLint - ^9.13.0
Jest - ^29.7.0
@testing-library/react - ^16.0.1
@vitejs/plugin-react - ^4.3.3
@babel/preset-env - ^7.26.0
@babel/preset-react - ^7.25.9
Notas
Este projeto faz parte de uma arquitetura de Micro Frontends, onde cada parte da aplicação pode ser desenvolvida, testada e implantada independentemente.
Caso precise adicionar mais funcionalidades ou expandir a aplicação, siga as melhores práticas para manter o código modular e escalável.
Licença
Este projeto está licenciado sob a MIT License.

