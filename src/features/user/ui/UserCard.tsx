"use client";
import { useUser } from "../model/userApi";

interface UserCardProps {
  id: string;
}

export const UserCard = ({ id }: UserCardProps) => {
  const { data: user, isLoading, error } = useUser(id);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading user</p>;

  return (
    <div className="w-full p-4 border rounded">
      <h2 className="text-xl font-bold">{user?.name}</h2>
      <p>{user?.email}</p>
    </div>
  );
};
