import React from "react";
import UserCard from "./../user-card";
import { User } from "../types";

interface UserListProps {
  users: User[];
}

const Flyweight: React.FC<UserListProps> = ({ users }) => {
  // Using a Map to cache UserCard components based on user data
  const userCardCache = new Map<string, React.ReactNode>();

  const getUserCard = (user: User) => {
    const key = `${user.name}-${user.age}`;

    // Check if the UserCard component is already cached
    if (!userCardCache.has(key)) {
      // If not cached, create a new UserCard component and cache it
      const userCard = <UserCard key={key} user={user} />;
      userCardCache.set(key, userCard);
    }

    // Return the cached UserCard component
    return userCardCache.get(key);
  };

  return (
    <div className="user-list">
      <h1 className="text-xl mb-3">Flyweight Design pattern</h1>
      {users.map((user) => (
        <React.Fragment key={`${user.name}-${user.age}`}>
          {getUserCard(user)}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Flyweight;
