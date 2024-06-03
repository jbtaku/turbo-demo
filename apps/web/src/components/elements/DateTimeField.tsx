"use client";

import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Control, FieldValues, Path } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { format } from "date-fns";
import { ja } from "date-fns/locale";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { ComponentPropsWithoutRef, ReactNode, RefObject, createRef, useRef } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "../ui/dialog";
interface Props<T extends FieldValues = FieldValues>
  extends ComponentPropsWithoutRef<"div"> {
  name: Path<T>;
  control: Control<T>;
  label: ReactNode;
  descriptions?: string[];
  labelClass?: string;
  itemClass?: string;
}

function DateTimeField<T extends FieldValues>({
  name,
  control,
  label,
}: Props<T>) {
  const hoursRefs = useRef<RefObject<HTMLButtonElement>[]>([]);
  const minutesRefs = useRef<RefObject<HTMLButtonElement>[]>([]);
  const now = new Date();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Dialog>
            <DialogTrigger asChild>
              <FormControl>
                <Button
                  variant={"outline"}
                  containerClass="w-full"
                  className="flex justify-between"
                >
                  <p>
                    {field.value
                      ? `${format(field.value, "PPP(E)", { locale: ja })}
                      ${String(field.value.getHours()).padStart(2, "0")}
                      :
                      ${String(field.value.getMinutes()).padStart(2, "0")}`
                      : ""}
                  </p>
                  <CalendarIcon />
                </Button>
              </FormControl>
            </DialogTrigger>
            <DialogContent
              className="!p-0 rounded-lg w-max"
              closeButton={{ variant: "none" }}
            >
              <div className="flex space-x-2">
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={(current) => {
                    const year = current?.getFullYear() ?? now.getFullYear();
                    const month = current?.getMonth() ?? now.getMonth();
                    const date = current?.getDate() ?? now.getDate();
                    const hour = field.value?.getHours() ?? 0;
                    const minutes = field.value?.getMinutes() ?? 0;
                    return field.onChange(
                      new Date(year, month, date, hour, minutes)
                    );
                  }}
                  className="w-max p-0 mt-[6px] ml-2"
                  locale={ja}
                  initialFocus
                />
                <div className="flex">
                  <Separator orientation="vertical" />
                  <div>
                    <p className="text-center mt-[6px] mx-2">時間</p>
                    <Separator />
                    <div className="h-72 overflow-y-scroll hidden-scrollbar mt-1 mx-1">
                      {[...Array(24)].map((_, index) => {
                        hoursRefs.current[index] =
                          createRef<HTMLButtonElement>();
                        return (
                          <Button
                            key={index}
                            ref={hoursRefs.current[index]}
                            variant={"ghost"}
                            className={`
                        ${
                          index === new Date(field.value).getHours()
                            ? "bg-primary text-white hover:bg-primary hover:text-white"
                            : ""
                        } text-sm h-8 px-4 font-normal`}
                            onClick={() => {
                              hoursRefs.current[index].current?.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                              });
                              const year =
                                field.value?.getFullYear() ?? now.getFullYear();
                              const month =
                                field.value?.getMonth() ?? now.getMonth();
                              const date =
                                field.value?.getDate() ?? now.getDate();
                              const minutes = field.value?.getMinutes() ?? 0;
                              return field.onChange(
                                new Date(year, month, date, index, minutes)
                              );
                            }}
                          >
                            {index.toString().padStart(2, "0")}
                          </Button>
                        );
                      })}
                      <div className="h-64"></div>
                    </div>
                  </div>
                  <Separator orientation="vertical" />
                  <div className="mr-1">
                    <p className="text-center mt-[6px] mx-2">分</p>
                    <Separator />
                    <div className="h-72 overflow-y-scroll hidden-scrollbar mt-1 mx-1">
                      {[...Array(60)].map((_, index) => {
                        minutesRefs.current[index] =
                          createRef<HTMLButtonElement>();
                        return (
                          <Button
                            key={index}
                            ref={minutesRefs.current[index]}
                            variant={"ghost"}
                            className={`
                        ${
                          index === new Date(field.value).getMinutes()
                            ? "bg-primary text-white hover:bg-primary hover:text-white"
                            : ""
                        } text-sm h-8 px-4 font-normal`}
                            onClick={() => {
                              minutesRefs.current[
                                index
                              ].current?.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                              });
                              const year =
                                field.value?.getFullYear() ?? now.getFullYear();
                              const month =
                                field.value?.getMonth() ?? now.getMonth();
                              const date =
                                field.value?.getDate() ?? now.getDate();
                              const hour = field.value?.getHours() ?? 0;
                              return field.onChange(
                                new Date(year, month, date, hour, index)
                              );
                            }}
                          >
                            {index.toString().padStart(2, "0")}
                          </Button>
                        );
                      })}
                      <div className="h-64"></div>
                    </div>
                  </div>
                </div>
              </div>
              <Separator />
              <DialogClose asChild>
                <Button
                  variant={"ghost"}
                  containerClass="w-max ml-auto my-1"
                  className="hover:text-primary"
                >
                  決定
                </Button>
              </DialogClose>
            </DialogContent>
          </Dialog>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default DateTimeField;
