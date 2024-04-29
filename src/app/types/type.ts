export type Promotion = {
  id: number;
  destino: string;
  imagem: string;
  preco: number;
};

export type StateUnit = {
  id: number;
  nome: string;
  sigla: string;
};

export type Review = {
  id: number;
  texto: string;
  autor: string;
  avatar: string;
};

export enum CategoryType {
  ECONOMIC = 'Econômica',
  EXECUTIVE = 'Executiva',
}

export type User = {
  nome: string;
  nascimento: string;
  cpf: string;
  telefone: string;
  email: string;
  senha: string;
  cidade: string;
  genero: string;
  estado: StateUnit;
};

export type AuthResponse = {
  access_token: string;
};
