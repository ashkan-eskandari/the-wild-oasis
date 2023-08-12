import { styled } from "styled-components";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Textarea from "../../ui/Textarea";
import { useCabins } from "../cabins/useCabins";
import { useForm } from "react-hook-form";
import { useAddBooking } from "./useAddBooking";
import supabase from "../../services/supabase";

const Select = styled.select`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  padding: 0.8rem 1.2rem;
`;

async function AddBooking() {
  const { register, handleSubmit } = useForm();
  const { addNewBooking, isAddingBooking } = useAddBooking();
  const { cabins } = useCabins();
  // const { data: newGuestId } = supabase.from("guests").select("*");
  // .order("id", { ascending: false })
  // .limit(1);

  let { data: newGuest } = await supabase
    .from("guests")
    .select("*")
    .order("id", { ascending: false })
    .limit(1);

  const guestId = newGuest[0].id;

  function onSubmit(data) {
    console.log(data);
    addNewBooking({
      // startDate,
      // endDate,
      // numNights,
      // numGuests,
      // extrasPrice,
      // totalPrice,
      // status,
      // hasBreakfast,
      // isPaid,
      // Observation,
      ...data,
      guestId,
    });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Start date">
        <Input
          type="date"
          id="startDate"
          {...register("startDate", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="End date">
        <Input
          type="date"
          id="endDate"
          {...register("endDate", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Number of nights">
        <Input
          type="number"
          id="numNights"
          {...register("numNights", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Number of guests">
        <Input
          type="number"
          id="numGuests"
          {...register("numGuests", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Cabin id">
        <Select
          {...register("cabinId", {
            required: "This field is required",
          })}
        >
          {cabins?.map((cabin) => (
            <option key={cabin.id} value={cabin.id}>
              Cabin {cabin.name}, id: {cabin.id}, price : {cabin.regularPrice}
            </option>
          ))}
        </Select>
      </FormRow>

      <FormRow label="Cabin price">
        <Input
          type="number"
          id="cabinPrice"
          {...register("cabinPrice", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="extra price">
        <Input
          type="number"
          id="extrasPrice"
          {...register("extrasPrice", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Total price">
        <Input
          type="number"
          id="totalPrice"
          {...register("totalPrice", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="status">
        <Select
          {...register("status", {
            required: "This field is required",
          })}
        >
          <option value="unconfirmed">unconfirmed</option>
          <option value="checked-in">checked-in</option>
          <option value="checked-out">checked-out</option>
        </Select>
      </FormRow>

      <FormRow label="has breakfast?">
        <Select
          {...register("hasBreakfast", {
            required: "This field is required",
          })}
        >
          <option value={true}>TRUE</option>
          <option value={false}>FALSE</option>
        </Select>
      </FormRow>

      <FormRow label="is paid?">
        <Select
          {...register("isPaid", {
            required: "This field is required",
          })}
        >
          <option value={true}>TRUE</option>
          <option value={false}>FALSE</option>
        </Select>
      </FormRow>

      <FormRow label="observation">
        <Textarea type="text" id="observation" {...register("observation")} />
      </FormRow>
      <Button variation="secondary" type="reset">
        Cancel
      </Button>
      <Button>Add booking</Button>
    </Form>
  );
}

export default AddBooking;
