import { useEffect, useState, useRef } from "react";
import { getAuth, onAuthStateChanged, onIdTokenChanged } from "firebase/auth";
// import { toast } from "react-toastify";
import { reset } from "../features/profile/profileSlice";
import { useDispatch } from "react-redux";

export const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);
  const isMounted = useRef(true);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isMounted) {
      const auth = getAuth();
      //   const user = auth.currentUser;

      // if (!user) {
      // 	setLoggedIn(false);
      // 	setCheckingStatus(false);

      // 	dispatch(reset());
      // 	// toast.info("Session kamu telah berakhir!");

      // 	localStorage.removeItem('token');
      // 	localStorage.removeItem('user');
      // }

      onAuthStateChanged(auth, async (user) => {
        if (user) {
          setLoggedIn(true);
          const token = await user?.getIdToken();
          localStorage.setItem("token", token);
        } else {
          // toast.info("Session kamu telah berakhir!");
          dispatch(reset());
        }

        setCheckingStatus(false);
      });

      onIdTokenChanged(auth, async (user) => {
        if (user) {
          setLoggedIn(true);
          const token = await user?.getIdToken();
          localStorage.setItem("token", token);
        } else {
          // toast.info("Session kamu telah berakhir!");
          dispatch(reset());
        }

        setCheckingStatus(false);
      });
    }

    return () => {
      isMounted.current = false;
    };
  }, [isMounted]);

  return { loggedIn, checkingStatus };
};
