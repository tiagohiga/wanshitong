export interface Book {
  isbn: string;
  nomeLivro: string;
  idAutor: Author;
  idEditora: Publisher;
  qtdDisponivel: number;
}

export interface Author{
  nomeAutor: string
}

export interface Publisher{
  nomeEditora: string
}

export interface Genre{
  nomeGenero: string
}

export interface BookSave{
  isbn: string;
  nomeLivro: string;
  descricaoLivro: string;
  idAutor: string;
  idEditora: string;
  idGenero: string;
  qtdDisponivel: number;
  matriculaBibliotecario: string
}

export interface BookEdit{
  isbn: string;
  nomeLivro: string;
  descricaoLivro: string;
  qtdDisponivel: number;
  matriculaBibliotecario: string
}

export interface BookDetail{
  isbn: string;
  nomeLivro: string;
  descricaoLivro: string;
  idAutor: Author;
  idEditora: Publisher;
  idGenero: Genre;
  qtdDisponivel: number;
  matriculaBibliotecario: string
}
