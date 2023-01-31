const statusSelect = document.querySelector("#status");

const statusOption = [
  {
    id: 1,
    descricao: "Em andamento",
  },
  {
    id: 2,
    descricao: "Enviado para teste",
  },
  {
    id: 3,
    descricao: "Finalizado",
  },
];

for (const status of statusOption) {
  const option = document.createElement("option");
  option.value = status.id;
  option.text = status.descricao;
  statusSelect.appendChild(option);
}

const submit = document.querySelector("#submit");

submit.addEventListener("click", () => {
    const form = document.querySelector("form");

    const formData = new FormData(form);

  const tbody = document.querySelector("tbody");
  const tr = document.createElement("tr");

  console.log(formData);

//   tr.innerHTML = `
//         <td>${formData.ticket}</td>
//         <td>${}</td>
//         <td>${}</td>
//         <td>${}</td>
//         <td colspan="2">
//             <button>Editar</button>
//             <button>Excluir</button>
//         </td>
//     `;
});
