import axios from "axios";

// Define the API service functions
class ApiService {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  // Method to fetch user data
  async fetchUserData(userId: string): Promise<any> {
    const url = `${this.baseURL}/users/${userId}`;
    const response = await axios.get(url);
    return response.data;
  }

  // Method to fetch posts by a user
  async fetchUserPosts(userId: string): Promise<any> {
    const url = `${this.baseURL}/users/${userId}/posts`;
    const response = await axios.get(url);
    return response.data;
  }

  // Method to create a new post for a user
  async createPost(userId: string, postData: any): Promise<any> {
    const url = `${this.baseURL}/users/${userId}/posts`;
    const response = await axios.post(url, postData);
    return response.data;
  }
}

// Create a facade to expose simplified methods
class ApiFacade {
  private apiService: ApiService;

  constructor(baseURL: string) {
    this.apiService = new ApiService(baseURL);
  }

  async getUserProfile(userId: string): Promise<any> {
    try {
      const userData = await this.apiService.fetchUserData(userId);
      const userPosts = await this.apiService.fetchUserPosts(userId);
      return { ...userData, posts: userPosts };
    } catch (error) {
      throw new Error("Failed to fetch user profile");
    }
  }

  async createUserPost(userId: string, postData: any): Promise<any> {
    try {
      const newPost = await this.apiService.createPost(userId, postData);
      return newPost;
    } catch (error) {
      throw new Error("Failed to create user post");
    }
  }
}

export default ApiFacade;
