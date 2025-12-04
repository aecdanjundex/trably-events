import { Search } from "lucide-react";
import { Popover } from "./ui/popover";
import { PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";

export default function SearchInput() {
  return (
    <div className="flex-items-center group flex w-full flex-row items-center gap-1 rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none">
      <Search className="text-primary" />
      <input
        type="text"
        placeholder="Search..."
        className="w-full p-2 focus:outline-none"
      />
    </div>
  );
}
