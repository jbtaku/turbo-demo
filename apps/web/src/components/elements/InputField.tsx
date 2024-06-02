"use client";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Control, FieldValues, Path } from "react-hook-form";
import { Input } from "../ui/input";
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

function InputField<T extends FieldValues>({
  name,
  control,
  label,
  descriptions = [],
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
            <Input {...field} className={itemClass} />
          </FormControl>
          <FormMessage />
          <div>
            {descriptions.map((description) => (
              <FormDescription className="!m-0" key={description}>
                {description}
              </FormDescription>
            ))}
          </div>
        </FormItem>
      )}
    />
  );
}

export default InputField;
