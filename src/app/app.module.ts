import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';  // Import IonicModule
import { AppComponent } from './app.component';
import { CameraProcessorComponent } from './camera-processor/camera-processor.component';

// Import necessary Ionic Native modules
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

@NgModule({
  declarations: [
    AppComponent,
    CameraProcessorComponent,  // Camera Processor component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(),  // Initialize Ionic
  ],
  providers: [
    AndroidPermissions,  // Add AndroidPermissions service here
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],  // Custom elements schema
})
export class AppModule {}
