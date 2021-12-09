import { BrowserRouter, Routes as Switch, Route, Navigate } from "react-router-dom";
import { CodeEditorApp } from "./components/CodeEditorApp";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Navigate to="/code-editor-app" />} />
        <Route path="/code-editor-app" element={<CodeEditorApp />} />
      </Switch>
    </BrowserRouter>
  );
};
