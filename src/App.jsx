import HomePage from "./Pages/HomePage";
import Header from "./UI/Header";

function App() {
  return (
    <div className="flex justify-center items-center flex-col gap-10 min-h-screen">
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
