export class NotificationService {
  private static instance: NotificationService;
  private registration: ServiceWorkerRegistration | null = null;

  private constructor() {}

  static getInstance(): NotificationService {
    if (!NotificationService.instance) {
      NotificationService.instance = new NotificationService();
    }
    return NotificationService.instance;
  }

  async init(): Promise<boolean> {
    if (!('serviceWorker' in navigator) || !('PushManager' in window)) {
      console.warn('Push notifications are not supported');
      return false;
    }

    try {
      this.registration = await navigator.serviceWorker.register('/sw.js');
      console.log('Service Worker registered successfully');
      return true;
    } catch (error) {
      console.error('Service Worker registration failed:', error);
      return false;
    }
  }

  async requestPermission(): Promise<boolean> {
    if (!('Notification' in window)) {
      console.warn('Notifications are not supported');
      return false;
    }

    if (Notification.permission === 'granted') {
      return true;
    }

    if (Notification.permission === 'denied') {
      console.warn('Notification permission denied');
      return false;
    }

    const permission = await Notification.requestPermission();
    return permission === 'granted';
  }

  async sendNotification(title: string, options?: any): Promise<void> {
    if (!this.registration) {
      console.warn('Service Worker not registered');
      return;
    }

    const hasPermission = await this.requestPermission();
    if (!hasPermission) {
      console.warn('Notification permission not granted');
      return;
    }

    const defaultOptions: any = {
      body: 'You have a new notification from EduApp',
      icon: '/icon-192x192.png',
      badge: '/icon-192x192.png',
      vibrate: [100, 50, 100],
      tag: 'eduapp-notification',
      renotify: true,
      ...options
    };

    await this.registration.showNotification(title, defaultOptions);
  }

  async sendDemoNotification(): Promise<void> {
    await this.sendNotification('🎓 EduApp Demo', {
      body: 'This is a demo push notification! Your assignments, grades, and announcements would appear here.',
      icon: '/icon-192x192.png',
      actions: [
        {
          action: 'view',
          title: 'View Dashboard'
        },
        {
          action: 'dismiss',
          title: 'Dismiss'
        }
      ]
    });
  }

  async sendAssignmentReminder(assignmentTitle: string, dueDate: string): Promise<void> {
    await this.sendNotification('📚 Assignment Due Soon', {
      body: `"${assignmentTitle}" is due ${dueDate}. Don't forget to submit!`,
      tag: 'assignment-reminder'
    });
  }

  async sendGradeNotification(subject: string, grade: string): Promise<void> {
    await this.sendNotification('📊 New Grade Posted', {
      body: `You received ${grade} in ${subject}. Check your dashboard for details.`,
      tag: 'grade-notification'
    });
  }
}