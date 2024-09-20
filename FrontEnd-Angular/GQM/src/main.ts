import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http'; // Diese Zeile fügt die HttpClient-Unterstützung hinzu

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // Hier wird der HttpClient bereitgestellt
  ]
})
.catch((err) => console.error(err));
