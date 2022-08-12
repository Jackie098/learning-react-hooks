import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import AppCallback from "./App-useCallback";
import AppMemo from "./App-useMemo";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const isMemo = true;

root.render(<StrictMode>{isMemo ? <AppMemo /> : <AppCallback />}</StrictMode>);
