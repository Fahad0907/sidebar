import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBloodRecord } from "../services/ser";

const useCreatebloodRecord = () => {
  const queryClient = useQueryClient();
  const { mutate, error, isSuccess, isError } = useMutation({
    mutationFn: createBloodRecord,
    onSettled: (data, error) => {
      if (error) {
        console.log(error, "===");
      } else {
        console.log(data);
        queryClient.invalidateQueries({
          queryKey: ["blood"],
        });
      }
    },
  });

  return {
    createBloodRecord: mutate,
    createError: error,
    createSuccess: isSuccess,
    createISError: isError,
  };
};

export default useCreatebloodRecord;
