import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getLocation } from "../services/ser";
import toast from "react-hot-toast";

const useGetDiv = (data: any) => {
  const result = useQuery({
    queryKey: ["division"],
    queryFn: () => getLocation(data),
  });

  // useEffect(() => {
  //   if (result.data && !result.isError) {
  //     setDivision(result.data.data.data);
  //   }
  // }, [result.data]);
  useEffect(() => {
    if (result.isError) {
      toast.error(result.error.message);
    }
  }, [result.isError]);
  return {
    divResult: result,
    division: result.data?.data.data,
  };
};

export default useGetDiv;
