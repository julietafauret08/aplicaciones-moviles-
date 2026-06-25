// import {
//   Chart as ChartJS,
//   ArcElement,
//   Tooltip,
//   Legend,
// } from "chart.js";

// import { Pie } from "react-chartjs-2";

// ChartJS.register(
//   ArcElement,
//   Tooltip,
//   Legend
// );

// function GraficoTareas({ tareas }) {
//   const completadas = tareas.filter(
//     (tarea) => tarea.completed
//   ).length;

//   const pendientes = tareas.filter(
//     (tarea) => !tarea.completed
//   ).length;

//   const total = tareas.length;

//   const porcentajeCompletadas =
//     total === 0
//       ? 0
//       : ((completadas / total) * 100).toFixed(1);

//   const porcentajePendientes =
//     total === 0
//       ? 0
//       : ((pendientes / total) * 100).toFixed(1);

//   const data = {
//     labels: ["Completadas", "Pendientes"],
//     datasets: [
//       {
//         data: [completadas, pendientes],
//         backgroundColor: [
//           "#4CAF50",
//           "#FF9800",
//         ],
//       },
//     ],
//   };

//   return (
//     <div
//       style={{
//         width: "300px",
//         margin: "20px auto",
//         background: "white",
//         padding: "15px",
//         borderRadius: "10px",
//       }}
//     >
//       <h3
//         style={{
//           textAlign: "center",
//           marginBottom: "10px",
//         }}
//       >
//         Estado de las tareas
//       </h3>

//       <Pie data={data} />

//       <p>
//         Completadas: {porcentajeCompletadas}%
//       </p>

//       <p>
//         Pendientes: {porcentajePendientes}%
//       </p>
//     </div>
//   );
// }

// export default GraficoTareas;

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function GraficoTareas({ tareas }) {
  const completadas = tareas.filter(
    (tarea) => tarea.completed
  ).length;

  const pendientes = tareas.filter(
    (tarea) => !tarea.completed
  ).length;

  const total = tareas.length;

  const porcentajeCompletadas =
    total === 0
      ? 0
      : ((completadas / total) * 100).toFixed(1);

  const porcentajePendientes =
    total === 0
      ? 0
      : ((pendientes / total) * 100).toFixed(1);

  const data = {
    labels: ["Completadas", "Pendientes"],
    datasets: [
      {
        data: [completadas, pendientes],
        backgroundColor: [
          "#4CAF50",
          "#FF9800",
        ],
      },
    ],
  };

  return (
    <div
      style={{
        width: "300px",
        margin: "20px auto",
        background: "white",
        padding: "15px",
        borderRadius: "10px",
      }}
    >
      <h3
        style={{
          textAlign: "center",
          marginBottom: "10px",
        }}
      >
        Estado de las tareas
      </h3>

      <Pie data={data} />

      <p>Completadas: {porcentajeCompletadas}%</p>
      <p>Pendientes: {porcentajePendientes}%</p>
    </div>
  );
}

export default GraficoTareas;