"use client";

import type { Schools } from "@prisma/client";
import { useState } from "react";
import { type SchoolFormData, SchoolSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Button } from "~/components/ui/button";
import { LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import axios from "axios";

interface Props {
  school?: Schools;
}

export default function SchoolForm({ school }: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const form = useForm<SchoolFormData>({
    resolver: zodResolver(SchoolSchema),
    mode: "onChange",
  });

  async function onSubmit(data: SchoolFormData) {
    try {
      setIsSubmitting(true);

      if (school) {
        await axios.patch(`/api/schools/${school.id}`, data);
      } else {
        await axios.post("/api/schools", data);
      }

      setIsSubmitting(false);

      router.push("/schools");
      router.refresh();
    } catch (error) {
      console.log(error);
      setIsSubmitting(false);
    }
  }

  return (
    <div className="w-full rounded-md border p-4">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full flex-col justify-center gap-4"
        >
          <div className="grid grid-flow-col grid-cols-3fr-1fr gap-4">
            <FormField
              control={form.control}
              name="name"
              defaultValue={school?.name}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>School Name</FormLabel>

                  <FormControl>
                    <Input placeholder="School Name..." {...field} />
                  </FormControl>

                  <p className="text-destructive">
                    {form.formState.errors.name?.message}
                  </p>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="status"
              defaultValue={school?.status}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          placeholder="Status..."
                          defaultValue={school?.status}
                        />
                      </SelectTrigger>
                    </FormControl>

                    <SelectContent>
                      <SelectItem value="ACTIVATED">Activated</SelectItem>

                      <SelectItem value="DEACTIVATED">Deactivated</SelectItem>
                    </SelectContent>
                  </Select>

                  <p className="text-destructive">
                    {form.formState.errors.status?.message}
                  </p>
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            defaultValue={school?.email}
            render={({ field }) => (
              <FormItem>
                <FormLabel>School E-mail</FormLabel>

                <FormControl>
                  <Input placeholder="School E-mail..." {...field} />
                </FormControl>

                <p className="text-destructive">
                  {form.formState.errors.email?.message}
                </p>
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={isSubmitting}
            className="flex w-full gap-4"
          >
            {isSubmitting && <LoaderCircle className="animate-spin" />}
            {school ? "Update School" : "Create School"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
