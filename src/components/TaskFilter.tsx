import { useTaskStore } from "@/store/useTaskStore";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

export const TaskFilter = () => {
  const filter = useTaskStore((state) => state.filter);
  const setFilter = useTaskStore((state) => state.setFilter);
  return (
    <Tabs value={filter} onValueChange={(value) => setFilter(value)}>
      <TabsList className="my-2">
        <TabsTrigger value="all">전체</TabsTrigger>
        <TabsTrigger value="active">진행중</TabsTrigger>
        <TabsTrigger value="completed">완료</TabsTrigger>
      </TabsList>
    </Tabs>
  );
};
