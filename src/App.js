export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackigList />
      <Stats />
    </div>
  );
}
function Logo() {
  return <h1>🌴Far Away💼</h1>;
}
function Form() {
  return (
    <div className="add-form">
      <h3>What do You need for Your Trip😊</h3>
    </div>
  );
}
function PackigList() {
  return <div className="list">List</div>;
}
function Stats() {
  return (
    <div className="stats">
      <footer>
        <em>💼You have X items in List,alredy packed x(x%)</em>
      </footer>
    </div>
  );
}
