import { QueryClient, useMutation } from "react-query";
import { TRANSACTIONS_QUERY, URL } from "../constants";

export const useEditTransaction = ({ id }) => {
  const queryClient = new QueryClient();
  const mutation = useMutation(
    ({ description, amount }) =>
      fetch(`${URL}/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          description,
          amount,
        }),
      }),
    {
      onSuccess: () => queryClient.invalidateQueries(TRANSACTIONS_QUERY),
    }
  );

  return mutation;
};
