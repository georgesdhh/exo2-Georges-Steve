import { Component } from '@angular/core';
import { ContactService, InfoContact } from '../../services/contact';

@Component({
  selector: 'app-gestion',
  imports: [],
  templateUrl: './gestion.html',
  styleUrl: './gestion.scss'
})
export class Gestion {
  contact: InfoContact | null;

  constructor(private contactService: ContactService) {
    this.contact = this.contactService.dernierContact;
  }
}