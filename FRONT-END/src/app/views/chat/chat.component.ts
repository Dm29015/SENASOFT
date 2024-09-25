import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {ChatService} from './chat.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {

  userInput: string = '';  // El mensaje actual que el usuario está escribiendo
  messages: Array<{ author: string, text: string }> = [
    { author: 'Angular Expert', text: '¡Hola! ¿Cómo puedo ayudarte con tus preguntas relacionadas con Angular?' }
  ];  // Lista de mensajes entre el usuario y la IA

  constructor(private chatService: ChatService) {}

  sendMessage() {
    if (this.userInput.trim() !== '') {
      // Agregar el mensaje del usuario al chat
      this.messages.push({ author: 'Usuario', text: this.userInput });
  
      // Enviar mensaje al backend y procesar la respuesta
      this.chatService.sendMessage(this.userInput).subscribe({
        next: (response) => {
          console.log('Respuesta del backend:', response);  // Verifica si la respuesta llega
          if (response && response.response) {
            this.messages.push({ author: 'IA', text: response.response });  // Agregar respuesta al chat
          }
        },
        error: (error) => {
          console.error('Error al enviar el mensaje:', error);  // Manejo de errores
        }
      });
  
      // Limpiar el input
      this.userInput = '';
    }
  }

}
