import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PasswordStrengthComponent } from './password-strength.component';

@NgModule({
  declarations: [
    PasswordStrengthComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [PasswordStrengthComponent],
})
export class PasswordStrengthModule {}
