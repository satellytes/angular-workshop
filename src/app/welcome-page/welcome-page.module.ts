import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomePageComponent } from './welcome-page.component';
import { SharedModule } from '../shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [WelcomePageComponent],
  exports: [WelcomePageComponent],
  imports: [SharedModule, MatListModule, MatButtonModule, MatFormFieldModule, MatInputModule]
})
export class WelcomePageModule {}
