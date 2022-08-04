import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./pages/Home/Home";

import "./assets/fonts/HelveticaUltraLt_0.ttf";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Home />
	</React.StrictMode>
);
