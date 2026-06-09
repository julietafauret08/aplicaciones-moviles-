import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./registro.css";

function Registro() {
  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [confirmarContraseña, setConfirmarContraseña] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (contraseña !== confirmarContraseña) {
      alert("Las contraseñas no coinciden");
      return;
    }

    alert("Usuario registrado correctamente");

    navigate("/");
  };

  return (
    <div className="registro-container">
      <div className="registro-card">
        <h1>Crear Cuenta</h1>
        <p>Completa los datos para registrarte</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre completo"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Confirmar contraseña"
            value={confirmarContraseña}
            onChange={(e) => setConfirmarContraseña(e.target.value)}
            required
          />

          <button type="submit">
            Registrarse
          </button>
        </form>

        <button
          className="volver-btn"
          onClick={() => navigate("/")}
        >
          Ya tengo cuenta
        </button>
      </div>
    </div>
  );
}

export default Registro;