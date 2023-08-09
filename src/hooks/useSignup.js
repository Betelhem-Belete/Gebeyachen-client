import { useState } from 'react';
import { UseAuthContext } from './useAuthContext';
import { useToast } from '@chakra-ui/react';

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { dispatch } = UseAuthContext();
  const Toast = useToast();

  const signup = async (Email, password, Name, Phone, Address, pic) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(
      'https://gebeyastore.onrender.com/ip/user/signup',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Email, password, Name, Phone, Address, pic }),
      }
    );
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setIsLoading(false);
      Toast({
        title: 'signup in failed',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'bottom',
      });
    }
    if (response.ok) {
      dispatch({ type: 'LOGIN', payload: json });

      localStorage.setItem('user', JSON.stringify(json));
      Toast({
        title: 'signup in successfully',
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'bottom',
      });
      setIsLoading(false);
    }
  };

  return { signup, isLoading, error };
};
