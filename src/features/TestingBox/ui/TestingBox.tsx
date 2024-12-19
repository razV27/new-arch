"use client";
import { BSPButton } from "@/features/BSPButton";
import { CarFront } from "lucide-react";

export const TestingBox = () => {
  return (
    <div className="w-full flex flex-col gap-2">
      <BSPButton onPress={() => console.log("click")} rightIcon={<CarFront />}>
        check
      </BSPButton>
    </div>
  );
};
