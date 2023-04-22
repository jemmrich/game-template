import React from "react";
import { createRoot } from 'react-dom/client';
import UserInterface from "./UserInterface";
import styles from './global.css';

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<UserInterface />);

