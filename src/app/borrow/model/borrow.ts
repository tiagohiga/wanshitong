export interface Borrow{
  idEmprestimo: number;
  usuario: UserData;
  statusEmprestimo: string;
  dataEmprestimo: string;
  prazoDevolucao: string;
}

export interface UserData{
  nomeUsuario: string;
  emailUsuario: string;
}

export interface BookIsbn{
  isbn: string;
  dataDevolucao: string
}

export interface BorrowDetail{
  id: number;
  nomeUsuario: string;
  bibliotecario: string;
  statusEmprestimo: string;
  dataEmprestimo: string;
  prazoDevolucao: string;
  livros: BookIsbn[]
}

export interface BorrowUpdate{
  email: string,
  bibliotecario: string,
  isbnLivros: string[]
}
