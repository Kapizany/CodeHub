import {
  BrowserRouter,
  Routes as Switch,
  Route,
  Navigate,
} from "react-router-dom";
import { CodeEditorApp } from "./components/CodeEditorApp";
import { CommunityApp } from "./components/CommunityApp";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Navigate to="/code-editor-app" />} />
        <Route path="/code-editor-app" element={<CodeEditorApp />} />
        <Route path="/community-app" element={<CommunityApp />} />
      </Switch>
    </BrowserRouter>
  );
};
