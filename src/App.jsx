import "./App.css";
import { Converter } from "./components/converter/converter";

function App() {
  return (
    <div>
      {/* Alert */}
      <section>Erro obtendo dados de conversão, tente novamente</section>
      <header className="py-6 px-5">
        <h1 className="text-3xl font-bold text-black">Conversor de Moedas</h1>
      </header>
      <main>
        <Converter />
      </main>
    </div>
  );
}

export default App;
