import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { InventarioListComponent } from './components/inventario-list/inventario-list.component';
import { InventarioFormComponent } from './components/inventario-form/inventario-form.component';
import { InventarioService } from './services/inventario.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    InventarioListComponent,
    InventarioFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [InventarioService],
  bootstrap: [AppComponent],
})
export class AppModule {}
