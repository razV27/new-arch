"use client";

import { Form } from "@/shared/@core/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/shared/@core/components/ui/input";
import { z } from "zod";
import { Button } from "@/shared/@core/components/ui/button";
import { useCounterStore } from "@/store/useStore";

const formSchema = z.object({
  value: z
    .string()
    .refine((val) => !isNaN(Number(val)), { message: "Must be a number" })
    .transform((val) => Number(val)),
});

export const CounterButton = () => {
  const { count, increment, setValue } = useCounterStore();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      value: 0,
    },
  });

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-4"
        onSubmit={form.handleSubmit((data) => {
          setValue(data.value);
        })}
      >
        <div className="flex gap-2">
          <Input {...form.register("value")} className="w-[50%]" />
          <Button
            type="submit"
            className="w-[50%] bg-blue-500 text-white rounded"
          >
            Submit
          </Button>
        </div>
        {form.formState.errors.value && (
          <p className="text-red-500 text-sm">
            {form.formState.errors.value.message}
          </p>
        )}
        <Button
          type="button"
          onClick={increment}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Count: {count}
        </Button>
      </form>
    </Form>
  );
};
