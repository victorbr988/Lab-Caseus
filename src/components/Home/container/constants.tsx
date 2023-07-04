export const columns = [
    {
      id: 1,
      label: "Início",
      redirect: "/create/report",
    },
    {
      id: 2,
      label: "Relatórios",
      redirect: "/search",
    },
    {
      id: 3,
      label: "Boletos",
      redirect: "/home",
    },
    {
      id: 4,
      label: "Métricas",
      redirect: "/",
    },
  ];

export const fieldsForm = [
    {
      name: "nome",
      placeholder: "Nome",
      type: "text",
      pattern: "*",
      minLength: 3,
      required: true,
    },
    {
      name: "telefone",
      placeholder: "Telefone",
      type: "text",
      pattern: "*",
      minLength: 10,
      required: true,
    },
    {
      name: "cpf",
      placeholder: "CPF",
      type: "text",
      pattern: "[0-9]*",
      minLength: 11,
      required: true,
    },
  ];

export const columnsTable = ["Nome", "Telefone", "CPF", "Data de criação"];

export const columnsTableData = [
    "Cadastro nome",
    "Cadastro telefone",
    "Cadastro cpf",
    "Cadastro data de criação",
  ];