import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.yolocamera',
  appName: 'YoloCamera',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    Camera: {
      // Optional: Ensure proper handling of images.
      photoQuality: 90,
    },
  },
};

export default config;
