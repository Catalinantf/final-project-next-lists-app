import { ChangeEventHandler } from "react";
import { Button } from "./button";

export default function SearchInput({
  inputValue,
  handleFunction,
  children,
}: {
  inputValue: string;
  handleFunction: ChangeEventHandler<HTMLInputElement> | undefined;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex-col ">
      <form className="flex gap-4">
        <input
          type="text"
          placeholder="Buscar..."
          value={inputValue}
          onChange={handleFunction}
          className="w-full p-2 border rounded"
        />

        <Button>Borrar</Button>
      </form>
      {children}
    </div>
  );
}
