import { styled } from "styled-components";
import AddBooking from "../features/bookings/AddBooking";
import AddGuest from "../features/bookings/AddGuest";
import { useState } from "react";
import { set } from "date-fns";

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 2rem;
`;

function AddBookingPage() {
  const [newGuestAdded, setNewGuestAdded] = useState(false);

  return (
    <>
      {!newGuestAdded ? (
        <AddGuest setNewGuestAdded={setNewGuestAdded} />
      ) : (
        <AddBooking />
      )}
      <StyledDiv></StyledDiv>
    </>
  );
}

export default AddBookingPage;
