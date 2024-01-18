import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ContatosComponent } from './contatos/contatos.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { TrabalhosComponent } from './trabalhos/trabalhos.component';
import { ServicosComponent } from './servicos/servicos.component';
import { CarrocelHeaderComponent } from './carrocel-header/carrocel-header.component';
import { HomeMainComponent } from './home-main/home-main.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    HeaderComponent,
    FooterComponent,
    FeedbackComponent,
    ContatosComponent,
    QuemSomosComponent,
    TrabalhosComponent,
    ServicosComponent,
    CarrocelHeaderComponent,
    HomeMainComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      {path: 'servicos', component:ServicosComponent},
      {path: 'trabalho', component:TrabalhosComponent},
      { path: 'quem-somos', component: QuemSomosComponent },
      { path: 'contatos', component: ContatosComponent },
      {path: 'feedback', component:FeedbackComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
