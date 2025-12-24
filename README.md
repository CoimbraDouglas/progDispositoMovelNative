# 📱 Meu App — Navegação com Expo Router e React Native Paper #

Este projeto é um aplicativo simples desenvolvido com `Expo`, `React Native` e `React Native Paper`, usando `Expo Router` para navegação entre telas.

O objetivo é demonstrar:

Uso de layout global

Integração com menus superior e inferior

Navegação entre páginas

Renderização de lista com FlatList

Uso de componentes do React Native Paper

---

## 🚀 Tecnologias Utilizadas

Expo

Expo Router

React Native

React Native Paper

JavaScript (ES6+)

---

## 📁 Estrutura do Projeto

```
├── app/
│   ├── _layout.tsx       → Layout global (Top Menu + Slot + Bottom Menu)
│   ├── index.jsx         → Tela inicial
│   ├── telaA.jsx         → Tela A (simples)
│   ├── telaB.jsx         → Lista de contatos
│
├── component/
│   ├── BottonMenu.jsx    → Menu inferior fixo
│   └── topmenu.jsx       → Menu superior com dropdown
│
└── README.md
```

---

## 🧩 Explicando Cada Arquivo

1. _layout.tsx — Estrutura base do app

Este arquivo é carregado automaticamente pelo Expo Router e envolve todas as telas.

Ele contém:

TopDropMenu → menu superior

Slot → onde cada página é carregada

BottomMenu → menu inferior

PaperProvider → habilita os componentes do React Native Paper

```
<PaperProvider>
  <View style={styles.container}>
    <TopDropMenu />
    <Slot />
    <BottomMenu />
  </View>
</PaperProvider>
```

---

## 📌 Atenção:
Se o layout quebrar, provavelmente o erro está na importação do BottomMenu ou no uso incorreto do Slot.

2. index.jsx — Tela Inicial

Tela simples exibindo apenas um texto:

<Text>Essa é a tela do Index inicial.</Text>


É a tela carregada quando o app abre.

3. telaA.jsx — Tela A

Estrutura idêntica à tela inicial, mudando apenas o texto.

<Text>Essa é a Tela A.</Text>

4. telaB.jsx — Lista de Contatos

Aqui temos:

FlatList

Renderização de cartões

Alternância de cores entre os cards

Avatares via URL

Cada item contém:

Foto

Nome

Telefone

---

## 📌 Atenção importante

A propriedade avatar usa imagens de internet.
→ Certifique-se de estar com internet ativa ao testar.

A imagem do avatar está com tamanho 18x18, o que pode parecer pequeno.
Se quiser deixar maior, ajuste o estilo.

5. topmenu.jsx — Menu Superior Dropdown

Usa:

<Appbar.Header />

<Menu />

router.push() para navegação

<Menu.Item onPress={() => router.push('/telaA')} title="Tela A" />

---

## 📌 Cuidados

Caso o menu não abra, verifique se o estado visible está sendo atualizado.

Caso a navegação falhe, revise os caminhos das rotas (/telaA, /telaB, /).

## 📌 Pontos de Atenção Geral

1. Navegação com router.push()

Os caminhos precisam existir no diretório:

```
/app/telaA.jsx
/app/telaB.jsx
/app/index.jsx
```


2. Layout com menus fixos

O BottomMenu ocupa espaço extra.
Por isso, em telaB.jsx foi usado:

```
paddingBottom: 70
```

Sem isso, a lista ficaria escondida atrás do menu inferior.

3. Importações

Se ocorrer erro como "Component not found", revise:

Caminhos relativos

Extensões .jsx

Exportações default

4. React Native Paper

O app deve estar envolvido em:

<PaperProvider>

Caso contrário, os componentes não vão renderizar.

---

## ▶️ Como Rodar o Projeto

```
npm install
npm start
```

Ou:

```
npx expo start
```

Use o QR Code para abrir no Expo Go.

---

## 📘 Próximos Passos (Sugestões)

Implementar tema claro/escuro

Melhorar o avatar da lista

Criar rotas dinâmicas (ex.: contato detalhado)

Adicionar ícones no BottomMenu

Ajustar responsividade
