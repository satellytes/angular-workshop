import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkipboComponent } from './skipbo/skipbo.component';
import { GameoverComponent } from './gameover/gameover.component';
import { PlayingComponent } from './playing/playing.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { GameGuard } from './game.guard';

const routes: Routes = [
  {
    path: 'skipbo',
    component: SkipboComponent,
    children: [
      {
        path: '',
        canActivateChild: [GameGuard],
        children: [
          { path: '', redirectTo: 'welcome', pathMatch: 'full' },
          { path: 'gameover', component: GameoverComponent },
          {
            path: 'playing',
            component: PlayingComponent,
            canDeactivate: [GameGuard]
          },
          { path: 'welcome', component: WelcomeComponent },
          { path: 'instructions', component: InstructionsComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule {}
