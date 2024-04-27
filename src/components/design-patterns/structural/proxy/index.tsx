import React, { useEffect, useState } from "react";

// Define a proxy to fetch user data lazily
class UserDataProxy {
  private userId: number;
  private userData: any; // Type for user data, replace 'any' with appropriate type

  constructor(userId: number) {
    this.userId = userId;
    this.userData = null; // Initially, user data is not fetched
  }

  // Method to fetch user data
  async fetchUserData() {
    if (!this.userData) {
      // Simulate fetching user data from an API
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${this.userId}`
      );
      const data = await response.json();
      this.userData = data;
    }
    return this.userData;
  }
}

// Component that uses UserDataProxy to fetch user data
const Proxy: React.FC<{ userId: number }> = ({ userId }) => {
  const [userData, setUserData] = useState<any | null>(null); // Replace 'any' with appropriate type

  useEffect(() => {
    const proxy = new UserDataProxy(userId);

    // Fetch user data only when component mounts
    proxy.fetchUserData().then((data) => {
      setUserData(data);
    });

    // Clean up the proxy instance when component unmounts
    return () => {
      // Optionally, perform cleanup for the proxy instance if needed
    };
  }, [userId]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
      {/* Render other user data fields as needed */}
    </div>
  );
};

export default Proxy;
