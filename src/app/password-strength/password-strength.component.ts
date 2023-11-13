import { Component } from '@angular/core';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css'],
})
export class PasswordStrengthComponent {
  password: string = '';

  calculateStrength() {
    let strength = 0;

    if (this.password.length >= 8) {
      const hasLetters = /[a-zA-Z]/.test(this.password);
      const hasDigits = /\d/.test(this.password);
      const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(this.password);

      if (hasLetters) strength++;
      if (hasDigits) strength++;
      if (hasSymbols) strength++;
    }

    this.updateSectionColors(strength);
  }

  updateSectionColors(strength: number) {
    const sections = document.querySelectorAll('.strength-section');

    for (let i = 0; i < sections.length; i++) {
      sections[i].classList.remove('red', 'yellow', 'green');

      if (this.password.length < 8) {
        sections[i].classList.add('red');
      } else if (strength === 1 && i === 0) {
        sections[i].classList.add('red');
      } else if (strength === 2 && i < 2) {
        sections[i].classList.add('yellow');
      } else if (strength === 3) {
        sections[i].classList.add('green');
      }
    }
  }
}
