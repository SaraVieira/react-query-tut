import { QueryClient, useMutation } from "react-query";
import { TRANSACTIONS_QUERY, URL } from "../constants";

export const useDeleteTransaction = ({ id }) => {
  const queryClient = new QueryClient();
  const mutation = useMutation(
    () =>
      fetch(`${URL}/${id}`, {
        method: "DELETE",
      }),
    {
      onSuccess: () => queryClient.invalidateQueries(TRANSACTIONS_QUERY),
    }
  );

  return mutation;
};
