import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

interface Message {
  id: string;
  content: string;
  userId: string;
}

export type ChatMessage = User & Message;

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(public http: HttpClient) {}
  messages = signal<ChatMessage[]>([]);

  async fetchMessages() {
    await this.http.get<ChatMessage[]>('/api/chat').subscribe((messages) => {
      this.messages.set(messages);
    });
  }
}
