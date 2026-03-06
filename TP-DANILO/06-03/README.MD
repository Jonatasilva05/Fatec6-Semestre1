# PROGRAMAÇÃO ORIENTADA A OBJETO (Paradigma)

## Classe
Com a classe conseguimos gerar qualquer tipo de objeto
- Caracteristicas *(Propriedades)* -> R.A, IDADE, NOME
- Ações *(Métodos)* -> ESTAGIAR, FREQUENTAR AULA, FAZER PROVA

## Objeto
- Aluno SI
- Aluno ADS
- Aluno PI

---

# Exemplo de C#
Public Class Aluno 
{

    public int RA;


    public String Nome;
    public Int Idade;

    public void Estagiar()
    {
        Console.WriteLine("Estagiando!");
    }
}

*Modificadores de Acesso*
- Public  - Acesso em todo o projeto
- Private - Acesso somente dentro da classe
- Internal
- Protected