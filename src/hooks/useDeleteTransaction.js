import { useMutation, useQueryClient } from "react-query";
import { TRANSACTIONS_QUERY, URL } from "../constants";

export const useDeleteTransaction = ({ id, onSuccess }) => {
  const queryClient = useQueryClient();
  const mutation = useMutation(
    () =>
      fetch(`${URL}/${id}`, {
        method: "DELETE",
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(TRANSACTIONS_QUERY);
        onSuccess();
      },
    }
  );

  return mutation;
};
