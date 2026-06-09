import { useState } from 'react'
import './App.css'
import AppRoutes from './routes/app.Routes'
import Login from './views/login/login'
import HomeScreen from './views/home/homeScreen'

import './App.css';


function App() {
  return <AppRoutes />;
}

export default App;
// const TABS = [
//   { id: 'all', label: 'Todas', Icon: IconList },
//   { id: 'completed', label: 'completadas', Icon: IconCheckCircle },
//   { id: 'pending', label: 'pendientes', Icon: IconCircle }
// ];
// function IconList({ className }) {
//   return (
//     <svg className={className} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
//       <line x1="8" y1="6" x2="21" y2="6" />
//       <line x1="8" y1="12" x2="21" y2="12" />
//       <line x1="8" y1="18" x2="21" y2="18" />
//       <line x1="3" y1="6" x2="3.01" y2="6" />
//       <line x1="3" y1="12" x2="3.01" y2="12" />
//       <line x1="3" y1="18" x2="3.01" y2="18" />
//     </svg>
//   );
// }

// function IconCheckCircle({ className }) {
//   return (
//     <svg className={className} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'>
//       <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14' />
//       <polyline points='22 4 12 14.01 9 11.01' />
//     </svg>
//   );
// }

// function IconCircle({ className }) {
//   return (
//     <svg className={className} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'>
//       <circle cx='12' cy='12' r='10' />
//     </svg>
//   );
// }



// function App() {
//   const [count, setCount] = useState(0)
//   const [activeTasksIndex, setActiveTasksIndex] = useState(null)
//   const [inputValue, setInputValue] = useState('');
//   const [tasks, setTasks] = useState([]);
//   const [activeTab, setActiveTab]=useState(null)
//   const addTask = async (e) => {
//     e.preventDefault();
//     if (inputValue.trim() === '') {
//       return;
//     }
//     const newTask = inputValue;
//     setTasks([...tasks, newTask]);
//     setInputValue('');
//   };

//   const getAlert = (message) => {
//     alert(`Tarea "${tasks[activeTasksIndex]}" marcada como ${message}`);
//   }


//   return (
//     <>
//       <div className='todo-container'>
//         <header className='todo-header'>
//           <h1>MIS TAREAS</h1>
//         </header>

//         <form className='todo-input-section' onSubmit={addTask}>
//           <input type="text"
//             placeholder='comprar sensores'
//             value={inputValue}
//             onChange={(e) => {
//               setInputValue(e.target.value)

//             }} />
//           <button type='submit'>Añadir</button>
//         </form>

//         <ul className='todo-list'>
//           {tasks.map((task, index) => (
//             <li key={index} className='todo-item'>{task}
//               <span className='todo-item__text'> </span>

//               <button type='button' className='todo-item__menu'
//                 aria-label='opciones de la tarea'
//                 onClick={() => setActiveTasksIndex(index)}>
//               </button>

//             </li>

//           ))}
//         </ul>


//         {activeTasksIndex !== null && (
//           <div className='action-sheet-overlay'
//             role='presentation'
//             onClick={() => setActiveTasksIndex(null)}>
//             <div className='action-sheet'
//               role='dialog'
//               aria-modal='true'
//               aria-labelledby='action-sheet-title'
//               onClick={(e) => e.stopPropagation()}>

//               <div className='action-sheet__panel'>
//                 <p id='action-sheet-title' className='action-sheet__title'>{tasks[activeTasksIndex]}</p>
//                 <div className='action-sheet__separator' />
//                 <button type='button'
//                   className='action-sheet__btn'
//                   onClick={() => {
//                     getAlert("completado");
//                     setActiveTasksIndex(null);
//                   }}>
//                   Completado
//                 </button>

//               </div>
//               <button type='button' className='action-sheet__btn action-sheet__btn--cancel'
//                 onClick={() => setActiveTasksIndex(null)}>Cancelar</button>
//             </div>





//           </div>
//           // </div>
//         )}

//         <nav className='todo-navbar' aria-label='filtrar tareas'>
//           {TABS.map(({ id, label, Icon }) => (
//             <button key={id} type='button' className={`todo-navbar__tab ${activeTab === id ?  'todo-navbar__tav--active' : ''}`}
//               onClick={() => setActiveTab(id)}
//               aria-current={activeTab === id ? 'page' : undefined}>
//               <Icon className='todo-navbar__icon' />
//               <span className='todo-navbar__label'>{label}</span>
//             </button>
//           ))}
//         </nav>


//       </div>
//     </>

//   )
// }


