import { createContext, useContext, useState } from "react";

type ContactContextType = {
  showContact: boolean;
  setShowContact: (show: boolean) => void;
};

const ContactContext = createContext<ContactContextType | undefined>(undefined);

export function ContactProvider({ children }: { children: React.ReactNode }) {
  const [showContact, setShowContact] = useState(false);

  return (
    <ContactContext.Provider value={{ showContact, setShowContact }}>
      {children}
    </ContactContext.Provider>
  );
}

export function useContact() {
  const context = useContext(ContactContext);
  if (context === undefined) {
    throw new Error("useContact must be used within a ContactProvider");
  }
  return context;
}
