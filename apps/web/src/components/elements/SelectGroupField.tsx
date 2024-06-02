"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
  selectItems: readonly string[];
}

function SelectGroupField<T extends FieldValues>({
  name,
  control,
  label,
  selectItems,
  className = "",
  labelClass = "",
  itemClass = "",
}: Props<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel className={labelClass}>{label}</FormLabel>
          <FormControl>
            <Select onValueChange={field.onChange}>
              <SelectTrigger>
                <SelectValue className="!w-full" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {selectItems.map((item) => (
                    <SelectItem key={item} value={item} className={itemClass}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default SelectGroupField;
