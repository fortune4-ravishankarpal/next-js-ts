import { createRoot } from "react-dom/client";
import "./index.css";
import * as features from "./feature";

createRoot(document.getElementById("root")).render(<features.ZodMock />);
