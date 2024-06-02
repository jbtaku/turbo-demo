"use client";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Control, FieldValues, Path } from "react-hook-form";
import { Textarea } from "../ui/textarea";
import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef, ReactNode } from "react";

interface Props<T extends FieldValues = FieldValues>
  extends ComponentPropsWithoutRef<"div"> {
  name: Path<T>;
  control: Control<T>;
  label: ReactNode;
  descriptions?: string[];
  labelClass?: string;
  itemClass?: string;
}

function TextField<T extends FieldValues>({
  name,
  control,
  label,
  className = "",
  labelClass = "",
  itemClass = "",
}: Props<T>) {
  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel className={labelClass}>{label}</FormLabel>
          <FormControl>
            <Textarea {...field} className={cn("h-32",itemClass)} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default TextField;
