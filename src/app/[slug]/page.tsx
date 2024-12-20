import { Accordion } from "@/features/Accordion";
import { CounterButton } from "@/features/counter";
import { Header } from "@/features/Header/ui/Header";
import { TestingBox } from "@/features/TestingBox";
import { UserCard } from "@/features/user/ui/UserCard";
import { cn } from "@/lib/utils"

import styles from "./styles.module.scss";

export default function Home() {
  return (
    <>
      <Header />
      <main className={cn("bg-primary h-screen", styles.main)}>
        <div
          className={cn(
            "bg-secondary max-w-xs max-h-3xl gap-4 border border-black p-8",
            styles.box
          )}
        >
          <UserCard id="1" />
          <CounterButton />
          <Accordion />
          <TestingBox />
        </div>
      </main>
    </>
  );
}
