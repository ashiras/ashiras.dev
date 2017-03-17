import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  color: string;

  constructor(
    router: Router,
    title: Title
  ) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const a = this.getTitle(router.routerState, router.routerState.root);
        title.setTitle('Ashiras, inc. - '+a[0]);
        this.color = a[0];
      }
    });
  }
  getTitle(state, parent): string[] {
    let data = [];
    if (parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }

    if (state && parent) {
      data.push(... this.getTitle(state, state.firstChild(parent)));
    }

    return data;
  }
}
