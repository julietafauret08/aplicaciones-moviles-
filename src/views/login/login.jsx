import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [mostrarPass, setMostrarPass] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Acá después podés agregar validaciones o conexión con backend

    navigate("/home");
  };

  return (
    <div className="login-container">
      <div className="background-circle circle-1"></div>
      <div className="background-circle circle-2"></div>

      <div className="login-card">
        <div className="logo">
          <span>🚀</span>
        </div>

        <h1>Bienvenido</h1>
        <p>Inicia sesión para continuar</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <input
              type={mostrarPass ? "text" : "password"}
              placeholder="Contraseña"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
              required
            />

            <button
              type="button"
              className="show-pass"
              onClick={() => setMostrarPass(!mostrarPass)}
            >
              {mostrarPass ? "🙈" : "👁️"}
            </button>
          </div>

          <button type="submit" className="btn-login">
            Ingresar
          </button>
        </form>

        <div className="links">
          <a href="#">¿Olvidaste tu contraseña?</a>
          <button
            className="register-link"
            onClick={() => navigate("/registro")}
          >
            Crear cuenta
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;