import { QueryClient, useMutation } from "@tanstack/react-query";
import { addNewBooking } from "../../services/apiBookings";
import { toast } from "react-hot-toast";

export async function useAddBooking() {
  const queryClient = QueryClient();

  const { mutate: addBooking, isLoading: isAddingBooking } = useMutation({
    mutationFn: addNewBooking,
    onSuccess: () => {
      toast.success("New booking successfully added");
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { addBooking, isAddingBooking };
}
