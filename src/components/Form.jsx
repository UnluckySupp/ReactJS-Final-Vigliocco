import "../App.css"

export const Form = ({user, handleUser, handleTicket}) => {
  return (
    <div className="form">
      <form onSubmit={handleTicket}>
        <span>
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" value={user.name} onChange={handleUser} required />
        </span>
        <span>
          <label htmlFor="lastName">Apellido:</label>
          <input type="text" id="lastName" value={user.lastName} onChange={handleUser} required />
        </span>
        <span>
          <label htmlFor="phone">Nro. de teléfono:</label>
          <input type="number" id="phone" value={user.phone} onChange={handleUser} required />
        </span>
        <span>
          <label htmlFor="email">Correo Electrónico:</label>
          <input type="email" id="email" value={user.email} onChange={handleUser} required />
        </span>
        <span>
          <label htmlFor="confEmail">Confirmar Correo electrónico:</label>
          <input
            type="email"
            id="confEmail" 
            value={user.confEmail}
            onChange={handleUser}
            required
          />
        </span>
        <button type="submit">Finalizar compra</button>
      </form>
    </div>
  );
};
