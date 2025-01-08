import { PlusIcon } from "lucide-react";
import { Button } from "./button";
import { Input } from "./input";
import { Todo } from "./home/TodoList/Todo";

export default function TasksForm({
  value,
  onChange,
  onSubmit,
}: {
  value: string;
  onChange: any;
  onSubmit: any;
}) {
  return (
    <form onSubmit={onSubmit} className="flex flex-row">
      <Input type="text" value={value} onChange={onChange} />
      <Button type="submit">
        <PlusIcon size={20} />
      </Button>
    </form>
  );
}
