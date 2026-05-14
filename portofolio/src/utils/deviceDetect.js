// Device Detection Utility
export const deviceDetect = {
  isAndroid() {
    return /Android/i.test(navigator.userAgent);
  },

  isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent);
  },

  isMobile() {
    return /Mobile|Android|iPhone|iPad|iPod/.test(navigator.userAgent);
  },

  isTablet() {
    return /(iPad|Android)/i.test(navigator.userAgent);
  },

  getDeviceType() {
    if (this.isTablet() && window.innerWidth > 768) {
      return 'tablet';
    }
    if (this.isMobile()) {
      return 'mobile';
    }
    return 'desktop';
  },

  isTouchDevice() {
    return (
      ('ontouchstart' in window) ||
      (navigator.maxTouchPoints > 0) ||
      (navigator.msMaxTouchPoints > 0)
    );
  },

  getScreenWidth() {
    return window.innerWidth;
  },

  getScreenHeight() {
    return window.innerHeight;
  },

  isLandscape() {
    return window.innerWidth > window.innerHeight;
  },

  isPortrait() {
    return window.innerHeight >= window.innerWidth;
  },
};

// Create reactive device state
export function useDeviceDetection() {
  const state = {
    deviceType: 'desktop',
    isMobile: false,
    isTablet: false,
    isAndroid: false,
    isIOS: false,
    isTouchDevice: false,
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
    isLandscape: false,
    isPortrait: true,
  };

  function updateDeviceState() {
    state.deviceType = deviceDetect.getDeviceType();
    state.isMobile = deviceDetect.isMobile();
    state.isTablet = deviceDetect.isTablet();
    state.isAndroid = deviceDetect.isAndroid();
    state.isIOS = deviceDetect.isIOS();
    state.isTouchDevice = deviceDetect.isTouchDevice();
    state.screenWidth = deviceDetect.getScreenWidth();
    state.screenHeight = deviceDetect.getScreenHeight();
    state.isLandscape = deviceDetect.isLandscape();
    state.isPortrait = deviceDetect.isPortrait();
  }

  // Initial detection
  updateDeviceState();

  // Listen for resize and orientation changes
  window.addEventListener('resize', updateDeviceState);
  window.addEventListener('orientationchange', updateDeviceState);

  return state;
}
