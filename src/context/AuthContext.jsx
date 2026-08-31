/* eslint-disable */
import { createContext, useContext, useEffect, useState } from 'react';
import { auth, db } from '../firebase/firebase'; 
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

// 1. Create the Auth Context
const AuthContext = createContext();

// 2. The Provider Component that wraps the app and holds state
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Listen for authentication changes in Firebase
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setCurrentUser(user);
        try {
          // Fetch the user's role from Firestore
          const docRef = doc(db, 'users', user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setUserRole(docSnap.data().role);
          } else {
            setUserRole('client');
          }
        } catch (error) {
          console.error("Error fetching user role:", error);
        }
      } else {
        // Reset state when user logs out
        setCurrentUser(null);
        setUserRole(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = { currentUser, userRole, loading };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

// 3. Custom Hook to consume AuthContext across components
export function useAuth() {
  return useContext(AuthContext);
}