"use client";

import { useState, useEffect } from "react";
import "./../app/app.css";

export default function App() {
  return (
    <main>
      <h1>My todos</h1>
      <button>+ new</button>
      <ul>
      </ul>
      <div>
        🥳 App successfully hosted. Try creating a new todo.
        <br />
        <a href="https://docs.amplify.aws/nextjs/start/quickstart/nextjs-app-router-client-components/">
          Review next steps of this tutorial.
        </a>
      </div>
    </main>
  );
}
