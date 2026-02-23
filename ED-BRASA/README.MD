# Resumo — Estrutura de Dados

## O que é
Conjunto de formas organizadas de armazenar e gerir dados na memória para permitir operações eficientes (inserção, remoção, busca, iteração).

## Objetivos da disciplina
- Entender estruturas abstratas de dados (ADTs).
- Comparar desempenho (complexidade).
- Implementar e aplicar estruturas em algoritmos reais.
- Resolver problemas com estruturas adequadas.

## Principais estruturas
- Arrays/vetores
- Listas ligadas (simples, duplas, circular)
- Pilha (stack)
- Fila (queue) e fila dupla (deque)
- Tabela hash (hash table)
- Árvores (árvore binária, BST, AVL, Red‑Black, B-tree, trie)
- Heap (min/max)
- Grafos (representação: lista de adjacência, matriz de adjacência)

## Operações comuns
- Inserir, remover, buscar, atualizar, percorrer/iterar
- Ordenação e busca: quicksort, mergesort, heapsort, busca binária
- Grafos: BFS, DFS, Dijkstra, Bellman‑Ford, A*

## Complexidade (resumo típico, ordem de grandeza)
- Array: acesso O(1), inserir/remover O(n)
- Lista ligada: acesso O(n), inserir/remover O(1) (com ponteiro)
- Pilha/Fila: push/pop O(1)
- Hash table: busca/inserção média O(1), pior O(n) (colisões)
- BST balanceada: busca/inserção O(log n)
- Heap: inserir O(log n), extrair max/min O(log n)
- Grafos (BFS/DFS): O(V + E)

## Boas práticas
- Escolha a estrutura que minimize operações mais críticas.
- Considere custo de memória e complexidade amortizada.
- Sempre analisar casos médio/pior.
- Escrever testes e medir desempenho com dados reais.

## Dicas de estudo
- Implementar cada estrutura do zero.
- Resolver problemas em plataformas de prática (ex.: SPOJ, URI, LeetCode).
- Visualizar operações (animações) para entender comportamento.

## Recursos recomendados
- Cursos online (Coursera, edX, Alura)
- Sites de exercícios: LeetCode, HackerRank
- Livros introdutórios sobre algoritmos e estruturas de dados

(Resumo compacto para README; pode expandir por tópico conforme necessidade.)