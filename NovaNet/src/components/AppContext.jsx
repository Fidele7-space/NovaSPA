import React, { createContext, useState } from "react";

export const AppContext = createContext({});

export function AppProvider({ children }) {
  const [connections, setConnections] = useState([]);
  const [connectedIds, setConnectedIds] = useState(new Set());
  const [contactMsg, setContactMsg] = useState("");

  const toggleConnect = (id) => {
    setConnectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <AppContext.Provider
      value={{ connections, setConnections, connectedIds, toggleConnect, contactMsg, setContactMsg }}
    >
      {children}
    </AppContext.Provider>
  );
}
