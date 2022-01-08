import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ActionReducer, ActionReducerMap, MetaReducer, StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookSearchModule } from './pages/book-search/book-search.module';
import { MyCollectionModule } from './pages/my-collection/my-collection.module';
import { NavigationModule } from './navigation/navigation.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppState } from './state/state';
import { MyCollectionReducer } from './state/my-collection';
import { localStorageSync } from 'ngrx-store-localstorage';

const reducers: ActionReducerMap<AppState> = {
  'MyCollection': MyCollectionReducer
};

function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: ['MyCollection'], rehydrate: true})(reducer);
}
const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {metaReducers}),
    EffectsModule.forRoot(),
    StoreDevtoolsModule.instrument({
      name: 'Readux DevTools',
      maxAge: 25,
    }),
    BrowserAnimationsModule,
    NavigationModule,
    BookSearchModule,
    MyCollectionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
