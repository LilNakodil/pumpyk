import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module';

import localeDe  from "@angular/common/locales/de";     // Import and register your locales here
registerLocaleData(localeDe);

@NgModule({
	imports: [
		CommonModule,
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		LanguageTranslationModule,
		AppRoutingModule,
	],
	declarations: [AppComponent],
	providers: [AuthGuard],
	bootstrap: [AppComponent]
})
export class AppModule {}
