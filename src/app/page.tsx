import { Accordion } from "@/features/Accordion";
import { CounterButton } from "@/features/counter";
import { TestingBox } from "@/features/TestingBox";
import { ThemeBtn } from "@/features/ThemeBtn";
import { UserCard } from "@/features/user/ui/UserCard";

export default function Home() {
  return (
    <main className="bg-primary flex flex-col  items-center justify-center items-center justify-center h-screen">
      <ThemeBtn className="absolute top-4 right-4" />
      <div className="bg-secondary flex justify-center items-center flex-col max-w-xs max-h-3xl gap-4 border border-black p-8">
        <UserCard id="1" />
        <CounterButton />
        <Accordion />
        <TestingBox />
      </div>
    </main>
  );
}
