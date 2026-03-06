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

        public Aluno(string _nome)
        {
            nome = _nome;
        }


        public String Nome;
        public Int Idade;

        public void Estagiar()
        {
            Console.WriteLine("Estagiando!");
        }

        Aluno AlunoSI = New Aluno();

        AlunoSI.RA = 20345;
        AlunoSI.Nome = "Danilo";
        AlunoSI.Estagiar();

        Aluno AlunoADS = new AlunoAds("Pedro");
    }

*Modificadores de Acesso*
- Public  - Acesso em todo o projeto
- Private - Acesso somente dentro da classe
- Internal
- Protected

---

## Construtor 2
    Public Aluno (Int_RA, String_Nome)
    {
        RA = _RA;
        Nome = _Nome;
    }

        Aluno AlunoPI = New Aluno(20, "José");

    Public Aluno()
    {

    }

---

