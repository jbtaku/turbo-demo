"use client";

import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef, ReactNode } from "react";
import { Control, FieldValues, Path } from "react-hook-form";

interface Props<T extends FieldValues = FieldValues>
  extends ComponentPropsWithoutRef<"div"> {
  name: Path<T>;
  control: Control<T>;
  label: ReactNode;
  descriptions?: string[];
  labelClass?: string;
  itemClass?: string;
  radioItems: readonly string[];
}

function RadioGroupField<T extends FieldValues>({
  name,
  control,
  label,
  radioItems,
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
          <RadioGroup onChange={field.onChange}>
            {radioItems.map((item) => (
              <div
                key={item}
                className={cn("flex space-x-1 items-center", itemClass)}
              >
                <RadioGroupItem id={item} value={item} />
                <Label htmlFor={item} className="cursor-pointer">
                  {item}
                </Label>
              </div>
            ))}
          </RadioGroup>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default RadioGroupField;
