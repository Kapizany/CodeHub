import { GlobalStyle } from "./globalStyles";
import { Header } from "./components/Header";
import { ProjectConfigMenu } from "./components/ProjectConfigMenu";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <ProjectConfigMenu />
    </>
  );
}

export default App;
