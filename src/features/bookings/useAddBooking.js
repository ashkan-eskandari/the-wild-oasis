import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { addNewBooking as addNewBookingApi } from "../../services/apiBookings";

export function useAddBooking() {
  const { mutate: addNewBooking, isLoading: isAddingBooking } = useMutation({
    mutationFn: addNewBookingApi,

    onSuccess: () => {
      toast.success("New Booking successfully added");
    },

    onError: (err) => toast.error(err.message),
  });
  return { addNewBooking, isAddingBooking };
}
