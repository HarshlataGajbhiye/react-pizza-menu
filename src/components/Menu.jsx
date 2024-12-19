import Pizza from "./pizza";
import data from "../data/data.js";

const menuBoxStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
};

const menuHeaderStyle = {
  textTransform: "uppercase",
  padding: "1rem 0",
  borderTop: "3px  solid #27272a",
  borderBottom: "3px solid #27272a",
  display: "inline-block",
  marginBottom: "3rem",
};

const menuCenter = {
  textAlign: "center",
};
function Menu() {
  return (
    <div>
      <div style={menuCenter}>
        <h2 style={menuHeaderStyle}>Our Menu</h2>
      </div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, at
        vitae sint aliquam sunt eveniet commodi laudantium qui sed id harum et
        earum expedita. Laboriosam quam ea rerum! Commodi, magnam.
      </p>
      <div style={menuBoxStyle}>
        {data.map(function (pizzaData) {
          return <Pizza pizzaData={pizzaData} key={pizzaData.name} />;
        })}
      </div>
    </div>
  );
}
export default Menu;
