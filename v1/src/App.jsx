import { Cursor, Main, Sidebar } from "./components";
import { usePageTracking } from "./hooks/useAnalytics";

import "./App.css";

function App() {
  usePageTracking();

  return (
    <div className="app">
      <Cursor />
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
