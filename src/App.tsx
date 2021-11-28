import { GlobalStyle } from "./globalStyles";
import { Header } from "./components/Header";
import { SidebarMenu } from "./components/SidebarMenu";
import { EditorBody } from "./components/EditorBody";
// import { CodeEditor } from "./components/CodeEditor";
// import { ProjectConfigMenu } from "./components/ProjectConfigMenu";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <SidebarMenu />
      <EditorBody />
    </>
  );
}

export default App;
