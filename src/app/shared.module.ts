import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

const materialModules = [MatIconModule, MatListModule, MatButtonModule, MatFormFieldModule, MatInputModule];
@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [CommonModule, RouterModule, ...materialModules]
})
export class SharedModule {}
