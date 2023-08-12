/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useAddGuest } from "./useAddGuest";

function AddGuest({ setNewGuestAdded }) {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const { addGuest, isAddingGuest } = useAddGuest();

  function onSubmit(data) {
    addGuest({ ...data });
    setNewGuestAdded(true);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Full name">
        <Input
          type="text"
          id="fullName"
          {...register("fullName", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="email">
        <Input
          type="text"
          id="email"
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address",
            },
          })}
        />
      </FormRow>

      <FormRow label="National id">
        <Input
          type="text"
          id="nationalID"
          {...register("nationalID", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Nationality">
        <Input
          type="text"
          id="nationality"
          {...register("nationality", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Country flag">
        <Input
          type="text"
          id="countryFlag"
          {...register("countryFlag", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <Button variation="secondary" type="reset">
        Cancel
      </Button>
      <Button>Add guest</Button>
    </Form>
  );
}

export default AddGuest;
