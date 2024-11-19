import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { Platform } from '@ionic/angular';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private androidPermissions: AndroidPermissions,
    private platform: Platform
  ) {}

  async checkPermissions() {
    if (this.platform.is('android')) {
      try {
        await this.androidPermissions.requestPermissions([
          this.androidPermissions.PERMISSION.CAMERA,
          this.androidPermissions.PERMISSION.RECORD_AUDIO,
          this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE,
          this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE,
        ]);
      } catch (err) {
        console.error('Error requesting permissions:', err);
      }
    }
  }

  ngOnInit() {
    this.checkPermissions();
  }
}
