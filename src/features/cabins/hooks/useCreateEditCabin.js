import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditCabin as createEditCabinApi } from "../../../services/apiCabins";

export function useCreateEditCabin(reset, isEditSession, onClose) {
  const queryClient = useQueryClient();

  const { mutate: createEditCabin, isLoading: isWorking } = useMutation({
    mutationFn: ({ newCabin, id }) => createEditCabinApi(newCabin, id),
    onSuccess: () => {
      toast.success(
        `Cabin ${isEditSession ? "edited" : "created"} successfully`
      );
      queryClient.invalidateQueries(["cabins"]);
      if (reset) {
        reset();
        onClose?.()
      }
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isWorking, createEditCabin };
}
