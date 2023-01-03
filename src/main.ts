import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { Observable, Subject } from "rxjs";

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


// function interval$(delay: number) {
//   let counter = 0;
//   return new Observable(observer => {
//     const id = setInterval(() => {
//       observer.next(counter++);
//     }, delay);

//     return () => {
//       console.log(`Cleared interval (ID - ${id})`)
//       clearInterval(id);
//     }
//   });
// }

// let sub$$ = new Subject<number>();

// sub$$.subscribe(x => console.log(x));

// sub$$.next(200);

// sub$$.subscribe(x => console.log(x));
// sub$$.next(300);

// sub$$.complete();

// let observable = interval$(500).subscribe(console.log)

// interval$(1000).subscribe(console.error)

