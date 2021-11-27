import { Header } from "./components/Header";
import { SidebarMenu } from "./components/SidebarMenu";
import { GlobalStyle } from "./globalStyles";
import { ProjectConfigMenu } from "./components/ProjectConfigMenu";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <SidebarMenu />
      <ProjectConfigMenu />
    </>
  );
}

export default App;
