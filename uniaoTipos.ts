let algumaCoisa: number | string;

algumaCoisa = 1;

const cadastroUsuarios = (usuarios: { nome: string } | { nome: string }[]) => {
  return usuarios;
};

const usuario = {
  nome: "Edu",
};

const usuarios = [
  {
    nome: "Edu",
  },
  {
    nome: "Duda",
  },
];

cadastroUsuarios(usuarios);
