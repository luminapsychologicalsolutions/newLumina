import { useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { db } from '../../firebase/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { setCookie } from '../../utils/cookies';

export default function AdminInitializer() {
  const { currentUser } = useAuth();

  useEffect(() => {
    async function bootstrapAdmin() {
      if (currentUser) {
        // Set secure cookie for user session tracking
        setCookie('lumina_session', currentUser.uid, 7);

        const userDocRef = doc(db, 'users', currentUser.uid);
        const userDoc = await getDoc(userDocRef);

        // Target your exact email address to ensure you are granted Admin privileges
        const masterAdminEmail = 'shajil7510@gmail.com';

        if (currentUser.email === masterAdminEmail) {
          if (!userDoc.exists() || userDoc.data().role !== 'admin') {
            await setDoc(userDocRef, {
              uid: currentUser.uid,
              name: 'Shajil K Krishna',
              email: masterAdminEmail,
              role: 'admin',
              profilePhoto: ''
            }, { merge: true });
            console.log("Master Admin privileges granted to:", masterAdminEmail);
          }
        }
      }
    }
    bootstrapAdmin();
  }, [currentUser]);

  return null; // Invisible functional component
}