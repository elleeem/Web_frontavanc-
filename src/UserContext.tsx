// UserContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';

// Type du contexte utilisateur, avec gestion des utilisateurs et des pokémons capturés
type UserContextType = {
  currentUser: string | null;
  setCurrentUser: Dispatch<SetStateAction<string | null>>;
  capturedPokemons: Record<string, number[]>; // clé = utilisateur, valeur = liste d'ID pokémon capturés
  setCapturedPokemons: Dispatch<SetStateAction<Record<string, number[]>>>;
};

// Création du contexte avec valeur par défaut undefined (pour forcer l'usage via Provider)
const UserContext = createContext<UserContextType | undefined>(undefined);

// Provider qui stocke l'utilisateur actuel et la liste des pokémons capturés par utilisateur
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [capturedPokemons, setCapturedPokemons] = useState<Record<string, number[]>>({});

  return (
    <UserContext.Provider
      value={{ currentUser, setCurrentUser, capturedPokemons, setCapturedPokemons }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Hook personnalisé pour récupérer le contexte utilisateur
export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
