import { useQuery } from "@tanstack/react-query";
import { getLocation } from "../services/ser";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
const useGetUpazila = (data: any) => {
  const [upazila, setUpazila] = useState<any[]>([]);

  const nullUpa = () => setUpazila([]);
  const result = useQuery({
    queryKey: ["upazila", data],
    queryFn: () => getLocation(data),
    enabled: !!data,
  });

  useEffect(() => {
    if (result.data && !result.isError) {
      setUpazila(result.data.data.data);
    }
  }, [result.data]);

  return {
    upaResult: result,
    upazila,
    nullUpa,
  };
};

export default useGetUpazila;
