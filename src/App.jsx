function App() {
  // 1. Header
  // 2. Menu
  //    2.a. PizzaCard
  // 3. Footer
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div>
      <h1>Fast React pizza co.</h1>
      <h2> Our Menu</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, at
        vitae sint aliquam sunt eveniet commodi laudantium qui sed id harum et
        earum expedita. Laboriosam quam ea rerum! Commodi, magnam.
      </p>
    </div>
  );
}

function Menu() {
  return (
    <div>
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}
function Pizza() {
  return (
    <div>
      <div className="pizza__img">
        <img src="./pizzas/focaccia_360.jpg" alt="pizza01" />
      </div>
      <div className="details">
        <p className="name">PizzaName</p>
        <p className="ingredients">ing01, ing02, ing03</p>
        <p className="pizzaCount">0</p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div>
      <p>
        we&apos;e Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Laborum, repudiandae. Sed, sunt veritatis, suscipit totam tenetur ullam
        tempora eius quod delectus qui non porro, soluta culpa sapien
      </p>
      <button>Order Now</button>
    </div>
  );
}

export default App;
