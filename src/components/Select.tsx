import { createListCollection } from "@chakra-ui/react";
import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "./ui/select";
import { ComponentProps, ReactNode } from "react";

interface SelectProps
  extends Omit<
    ComponentProps<typeof SelectRoot>,
    "value" | "onValueChange" | "collection"
  > {
  value: string[];
  onValueChange: (value: string[]) => void;
  options: {
    label: string;
    value: string;
  }[];
  label?: ReactNode;
  placeholder?: string;
}

export const Select = ({
  value,
  onValueChange,
  options,
  label,
  placeholder,
  ...rest
}: SelectProps) => {
  const collection = createListCollection({
    items: options,
  });

  return (
    <SelectRoot
      collection={collection}
      value={value}
      onValueChange={(e) => onValueChange(e.value)}
      {...rest}
    >
      {label && <SelectLabel>{label}</SelectLabel>}
      <SelectTrigger>
        <SelectValueText placeholder={placeholder ?? "Select"} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem item={option} key={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectRoot>
  );
};
