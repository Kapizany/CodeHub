import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CodeEditorApp } from "./components/CodeEditorApp";

export const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/code-editor-app" element={<CodeEditorApp />} />
      </Routes>
    </BrowserRouter>
  );
};
