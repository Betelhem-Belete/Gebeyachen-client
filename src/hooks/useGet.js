import { useEffect, useState } from "react";
import { useToast } from "@chakra-ui/react";

const Usefetch = (proxy) => {
  const [data, setDta] = useState([]);
  const [loding, setLoding] = useState(true);
  const [error, setError] = useState(null);
  const Toast = useToast();

  useEffect(() => {
    try {
      fetch(proxy)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setDta(data);
          setLoding(false);
        })
        .catch((error) => {
          Toast({
            title: error.message,
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "bottom",
          });
          setError(error.message);
          setLoding(false);
        });
    } catch (error) {
      Toast({
        title: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
  }, [proxy, Toast]);

  return { data, loding, error };
};

export default Usefetch;
