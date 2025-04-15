import { 
  users, type User, type InsertUser,
  contactMessages, type ContactMessage, type InsertContactMessage,
  newsletterSubscriptions, type NewsletterSubscription, type InsertNewsletterSubscription 
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  subscribeToNewsletter(subscription: InsertNewsletterSubscription): Promise<NewsletterSubscription>;
  getAllContactMessages(): Promise<ContactMessage[]>;
  getAllNewsletterSubscriptions(): Promise<NewsletterSubscription[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactMessages: Map<number, ContactMessage>;
  private newsletterSubscriptions: Map<number, NewsletterSubscription>;
  userCurrentId: number;
  contactMessageCurrentId: number;
  newsletterSubscriptionCurrentId: number;

  constructor() {
    this.users = new Map();
    this.contactMessages = new Map();
    this.newsletterSubscriptions = new Map();
    this.userCurrentId = 1;
    this.contactMessageCurrentId = 1;
    this.newsletterSubscriptionCurrentId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = this.contactMessageCurrentId++;
    const message: ContactMessage = { ...insertMessage, id };
    this.contactMessages.set(id, message);
    return message;
  }

  async subscribeToNewsletter(insertSubscription: InsertNewsletterSubscription): Promise<NewsletterSubscription> {
    // Check if email already exists
    const existingSubscription = Array.from(this.newsletterSubscriptions.values()).find(
      (subscription) => subscription.email === insertSubscription.email
    );

    if (existingSubscription) {
      return existingSubscription;
    }

    const id = this.newsletterSubscriptionCurrentId++;
    const subscription: NewsletterSubscription = { ...insertSubscription, id };
    this.newsletterSubscriptions.set(id, subscription);
    return subscription;
  }

  async getAllContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values());
  }

  async getAllNewsletterSubscriptions(): Promise<NewsletterSubscription[]> {
    return Array.from(this.newsletterSubscriptions.values());
  }
}

export const storage = new MemStorage();
