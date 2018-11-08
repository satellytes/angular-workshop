import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { GameOverPageComponent } from './game-over-page/game-over-page.component';
import { GamePageComponent } from './game-page/game-page.component';
import { InstructionsPageComponent } from './instructions-page/instructions-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    component: WelcomePageComponent
  },
  {
    path: 'game',
    component: GamePageComponent
  },
  {
    path: 'gameover',
    component: GameOverPageComponent
  },
  {
    path: 'instructions',
    component: InstructionsPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
