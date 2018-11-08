## Routing Errors

1. Error comma

```
const routes: Routes = [,
  {
    path: 'gameover',
    component: GameOverPageComponent
  }
];
```

> compiler.js:4703 Uncaught TypeError: Cannot read property 'visitExpression' of undefined

2. no full match

```
const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome'
  },
  {
    path: 'welcome',
    component: WelcomePageComponent
  },
```

> main.ts:12 Error: Invalid configuration of route '{path: "", redirectTo: "welcome"}': please provide 'pathMatch'. The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.

3. RouterLink not navigating
   Import RouterModule if you created a new feature module

## Project Structure

### Barrel Files

Good for convenience, problems when packaging — be careful!

```
import 'something/something'
```

## Injection

```
compiler.js:2547 Uncaught Error: Can't resolve all parameters for XXX: (?).
```

## Modules

### Feature Modules

Create a module for every component that is used a level higher or by multiple components.

### Shared Module

-> hold what's being used by many modules (RouterLink)

### Error Double Declarations

compiler.js:2547 Uncaught Error: Type GamePageComponent is part of the declarations of 2 modules: GamePageModule and AppModule! Please consider moving GamePageComponent to a higher module that imports GamePageModule and AppModule.

### Can't bind property

Component unknown

## Rxjs

if this succeeds and you know sth is wrong

```
pile.cardAdded.subscribe(cards => {
  expect(false).toBe(true);
});
```

use fakeAsync

```
 it('emit card', fakeAsync(() => {
      pile.cardAdded.subscribe(cards => {
        expect(false).toBe(true);
      });
    }));
  });
```

But: 1 periodic timer(s) still in the queue.
you have to flush the queue.

-> Problem with delay. https://github.com/angular/angular/issues/10127

## hot vs cold

hot is sharing the producer (multicast), col creating one for each susbcription (unicast)
https://medium.com/@benlesh/hot-vs-cold-observables-f8094ed53339
