import { useMutation, useQueryClient } from "react-query";
import { TRANSACTIONS_QUERY, URL } from "../constants";

export const useCreateTransaction = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(
    ({ amount, description }) =>
      fetch(URL, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          amount,
          description,
        }),
      }),
    {
      onSuccess: () => queryClient.invalidateQueries([TRANSACTIONS_QUERY]),
    }
  );

  return mutation;
};
