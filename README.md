# Formulário de Cadastro de Usuário

Este projeto implementa um formulário de cadastro de usuário em React com validação de campos e máscara de entrada.

## 🚀 Funcionalidades

- **Formulário completo** com todos os campos solicitados
- **Validação em tempo real** usando React Hook Form + Zod
- **Máscara de telefone** usando react-input-mask
- **Interface moderna** com Tailwind CSS
- **Feedback visual** para o usuário
- **Mensagem de confirmação** após o cadastro

## 📋 Campos do Formulário

- **Nome**: Validação de comprimento e caracteres permitidos
- **E-mail**: Validação de formato de e-mail
- **Telefone**: Máscara automática (99) 99999-9999
- **Senha**: Requisitos de segurança (mínimo 8 caracteres, maiúscula, minúscula, número)
- **Confirmar Senha**: Validação de correspondência

## 🛠️ Tecnologias Utilizadas

- **React 19** - Framework principal
- **TypeScript** - Tipagem estática
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de esquemas
- **Máscara nativa** - Implementação própria de máscara para telefone
- **Tailwind CSS** - Estilização
- **Vite** - Build tool

## 📦 Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd formulario-react
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
```

4. Abra [http://localhost:5173](http://localhost:5173) no seu navegador.

## 🏗️ Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera a build de produção
- `npm run preview` - Visualiza a build de produção
- `npm run lint` - Executa o linter

## 📁 Estrutura do Projeto

```
formulario-react/
├── src/
│   ├── components/
│   │   └── UserRegistrationForm.tsx  # Componente principal do formulário
│   ├── App.tsx                       # Componente raiz
│   ├── main.tsx                      # Ponto de entrada
│   └── index.css                     # Estilos globais
├── tailwind.config.js                # Configuração do Tailwind
├── postcss.config.js                 # Configuração do PostCSS
└── package.json                      # Dependências e scripts
```

## 🔧 Configuração das Bibliotecas

### React Hook Form + Zod
O formulário utiliza React Hook Form para gerenciamento de estado e Zod para validação de esquemas. A validação é executada em tempo real conforme o usuário digita.

### Máscara de Telefone
A máscara de telefone é implementada nativamente em JavaScript, aplicando automaticamente o formato brasileiro: `(11) 99999-9999`.

### Tailwind CSS
O projeto utiliza Tailwind CSS para estilização, proporcionando uma interface moderna e responsiva.

## 🎨 Interface do Usuário

- **Design responsivo** que funciona em diferentes tamanhos de tela
- **Feedback visual** para campos válidos/inválidos
- **Indicadores de progresso** durante o envio
- **Mensagem de sucesso** após o cadastro
- **Informações sobre requisitos** da senha

## 🔒 Validações Implementadas

### Nome
- Mínimo 2 caracteres
- Máximo 50 caracteres
- Apenas letras e espaços

### E-mail
- Formato válido de e-mail
- Campo obrigatório

### Telefone
- Formato brasileiro: (99) 99999-9999
- Mínimo 14 caracteres

### Senha
- Mínimo 8 caracteres
- Pelo menos uma letra maiúscula
- Pelo menos uma letra minúscula
- Pelo menos um número

### Confirmar Senha
- Deve corresponder à senha

## 🚀 Como Usar

1. Preencha todos os campos do formulário
2. As validações aparecem em tempo real
3. Clique em "Cadastrar Usuário"
4. Aguarde a confirmação de sucesso

## 🔮 Próximos Passos

Para integrar com uma API real, modifique a função `handleUserRegistration` no arquivo `App.tsx`:

```typescript
const handleUserRegistration = async (userData: UserData) => {
  const response = await fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
  
  if (!response.ok) {
    throw new Error('Erro ao cadastrar usuário');
  }
  
  return response.json();
};
```

## 📝 Licença

Este projeto está sob a licença MIT.
