import { Header } from "./components/Header";
import { Infosection } from "./components/Infosection";
import "./global.scss";

export const App = () => {
  return (
    <div className="app">
      <Header />

      <main className="main">
        <h1 className="title">
          Test Task: Mobile <br /> Header & Text Block
        </h1>

        <Infosection />
      </main>
    </div>
  );
};
