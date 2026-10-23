import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../../services/contact';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  prenom = '';
  nom = '';
  age: number | null = null;
  hide = false;
  email = '';
  commentaire = '';

  constructor(private contactService: ContactService, private router: Router) {
  }

  changerHide() {
    if (this.hide) {
      this.email = '';
    }
  }

  envoyer() {
    this.contactService.dernierContact = {
      prenom: this.prenom,
      nom: this.nom,
      age: this.age,
      email: this.email,
      commentaire: this.commentaire
    };
    alert('Le formulaire est valide');
    this.router.navigate(['/accueil']);
  }
}