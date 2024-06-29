import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getBloodRecord } from "../services/ser";
interface bloodRecordType {
  user: number;
  date: string;
  user_details: string;
}
const useGetBloodRecord = (
  username: string,
  page: number,
  page_size: number
) => {
  const [data, setData] = useState<bloodRecordType[]>([]);
  const [count, setCount] = useState<number>(0);

  const result = useQuery({
    queryKey: ["blood", username, page, page_size],
    queryFn: () => getBloodRecord(username, page, page_size),
  });

  useEffect(() => {
    if (result.data && !result.isError) {
      console.log(result.data.data?.data.results);
      setData(result.data.data?.data.results);
      setCount(result.data.data?.data.count);
    }
  }, [result.data]);

  return {
    result,
    data,
    count,
  };
};

export default useGetBloodRecord;
