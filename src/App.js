import "./App.css";

function App() {
  const starsAnimation = Array.from({ length: 10 }, (_, i) => i + 1).map(
    (e) => <span></span>
  );

  return (
    <div>
      <div className="flex justify-center text-2xl">Mysh</div>
      <section>{starsAnimation}</section>
    </div>
  );
}

export default App;
