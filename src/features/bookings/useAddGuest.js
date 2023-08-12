import { useMutation, useQueryClient } from "@tanstack/react-query";
import supabase from "../../services/supabase";
import { toast } from "react-hot-toast";

async function addGuestApi(newGuest) {
  const { data, error } = await supabase
    .from("guests")
    .insert([{ ...newGuest }])
    .select();

  if (error) throw new Error(error.message);

  return data;
}

export function useAddGuest() {
  const { mutate: addGuest, isLoading: isAddingGuest } = useMutation({
    mutationFn: addGuestApi,
    onSuccess: () => {
      toast.success("New guest successfully added");
    },
    onError: (err) => toast.error(err.message),
  });

  return { isAddingGuest, addGuest };
}
