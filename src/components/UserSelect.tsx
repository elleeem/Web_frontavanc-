import { useUser } from '../UserContext';

const UserSelect = () => {
  const { currentUser, setCurrentUser } = useUser();

  return (
    <div>
      <h3>Choisir un utilisateur</h3>
      <button onClick={() => setCurrentUser('user1')}>Utilisateur 1</button>
      <button onClick={() => setCurrentUser('user2')}>Utilisateur 2</button>
      <p>Utilisateur actuel : {currentUser}</p>
    </div>
  );
};

export default UserSelect;
