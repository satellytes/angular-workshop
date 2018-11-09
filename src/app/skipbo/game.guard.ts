import { Injectable, Component } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { SkipBoService } from './services/skipbo.service';
import { CanDeactivate } from '@angular/router/src/utils/preactivation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameGuard implements CanActivateChild, CanDeactivate {
  component: Object;
  route: ActivatedRouteSnapshot;
  constructor(private skipboService: SkipBoService, private router: Router) {}

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url;
    return true;
  }

  canDeactivate(
    component: Component,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.skipboService.gameStarted) {
      console.warn('Blocked navigating away from a running game');
      return false;
    }

    return true;
  }
}
