// lib/db.ts
type User = {
    id: string;
    email: string;
    password: string;
  };
  
  class DB {
    private users: User[] = [];
  
    async createUser(email: string, password: string): Promise<User> {
      const id = Math.random().toString(36).substr(2, 9);
      const user = { id, email, password };
      this.users.push(user);
      return user;
    }
  
    async getUserByEmail(email: string): Promise<User | undefined> {
      return this.users.find(user => user.email === email);
    }
  }
  
  export const db = new DB();