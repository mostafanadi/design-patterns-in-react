import React, { useState } from "react";
import ApiFacade from "./api-facade";

const apiFacade = new ApiFacade("https://jsonplaceholder.typicode.com/");

const Facade: React.FC<{ userId: string }> = ({ userId }) => {
  const [userProfile, setUserProfile] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchUserProfile = async () => {
    try {
      const profileData = await apiFacade.getUserProfile(userId);
      setUserProfile(profileData);
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleCreatePost = async () => {
    try {
      const newPostData = { title: "New Post", body: "Hello World" };
      await apiFacade.createUserPost(userId, newPostData);
      // Reload user profile after creating a new post
      fetchUserProfile();
    } catch (error: any) {
      setError(error.message);
    }
  };

  if (!userProfile) {
    return <button onClick={fetchUserProfile}>Load Profile</button>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {userProfile.name}</p>
      <p>Email: {userProfile.email}</p>
      <h3>Posts:</h3>
      <ul>
        {userProfile.posts.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <button onClick={handleCreatePost}>Create Post</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Facade;
