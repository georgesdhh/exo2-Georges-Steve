import { Injectable } from '@angular/core';

export interface InfoContact {
  prenom: string;
  nom: string;
  age: number | null;
  email: string;
  commentaire: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  dernierContact: InfoContact | null = null;
}