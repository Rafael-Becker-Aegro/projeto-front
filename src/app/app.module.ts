import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FarmDialogComponent } from './farms/farm-dialog/farm-dialog.component';
import { FarmsComponent } from './farms/farms-list/farms.component';
import { PlotListComponent } from './plots/plot-list/plot-list.component';
import { HttpErrorInterceptor } from './shared/interceptor/http-error.interceptor';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { PlotDialogComponent } from './plots/plot-dialog/plot-dialog.component';
import { ProductionDialogComponent } from './production/production-dialog/production-dialog.component';
import { ProductionListComponent } from './production/production-list/production-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FarmsComponent,
    FarmDialogComponent,
    PlotListComponent,
    PlotDialogComponent,
    ProductionDialogComponent,
    ProductionListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
