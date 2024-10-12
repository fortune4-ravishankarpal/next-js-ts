"use client";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@/components/ui/button";
import * as yup from "yup";
import InputFormComponent from "@/components/component/formInput";
const schema = yup.object().shape({
  name: yup.string().required(),
  age: yup.string().required(),
  email: yup.string().email().required(),
});

let delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
export default function Page() {
  const m = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data: any) => {
    await delay(2000);
    console.log("data", data);
  };

  let HandleSubmit = async () => {
    if (m.formState.isValid) {
      await delay(20000);
      onSubmit(m.getValues());
    }
  };
  if (m.formState.isSubmitting) {
    return <p className="text-red-500 text-center">Submitting...</p>;
  }
  return (
    <>
      <FormProvider {...m}>
        <form
          onSubmit={m.handleSubmit(onSubmit)}
          className="flex flex-col gap-2 w-1/2 mx-auto mt-10"
        >
          <InputFormComponent name="name" />
          <InputFormComponent name="age" />
          <InputFormComponent name="email" />
          <Button
            size={"sm"}
            disabled={!m.formState.isValid}
            type="button"
            onClick={HandleSubmit}
            variant={"default"}
          >
            Submit
          </Button>
        </form>
      </FormProvider>
    </>
  );
}
