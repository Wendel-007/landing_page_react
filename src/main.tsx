import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./globals.css";

const container = document.getElementById("root");
if (container) {
	const root = createRoot(container); // Usando a nova API createRoot
	root.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>
	);
}
