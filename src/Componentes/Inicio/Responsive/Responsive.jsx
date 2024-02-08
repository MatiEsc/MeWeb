
import './Responsive.css'; // Asegúrate de importar tu archivo de estilos

const Responsive = () => {
  return (
    <div className="fondoResponsive">
      <div className="texto">
        <h2>Diseños totalmente responsive</h2>
        <h3>Adaptable a todo tipo de dispositivos</h3>
        <p>Descubre la versatilidad de nuestros diseños que se adaptan perfectamente a cualquier dispositivo.</p>
      </div>
      <div className="imagen">
        <img src="/img/responsive.webp" alt="" />
      </div>
    </div>
  );
}

export default Responsive;
