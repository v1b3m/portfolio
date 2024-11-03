import { useEffect } from "react";
import { useNavigate } from "@remix-run/react";
import { useContact } from "~/context/ContactContext";

export function useKeyboardShortcuts() {
  const navigate = useNavigate();
  const { setShowContact, showContact } = useContact();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const isCmdOrCtrl = event.metaKey || event.ctrlKey;

      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      if (isCmdOrCtrl) {
        switch (event.key.toLowerCase()) {
          case "1":
            event.preventDefault();
            navigate("/");
            break;
          case "p":
            event.preventDefault();
            navigate("/projects");
            break;
          case "s":
            event.preventDefault();
            navigate("/skills");
            break;
          case "k":
            event.preventDefault();
            setShowContact(true);
            break;
        }
      }

      if (event.key === "Escape" && showContact) {
        setShowContact(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [navigate, setShowContact, showContact]);
}
