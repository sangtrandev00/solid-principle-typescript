// Vi phạm OCP
// Nguyên tắc: Một class nên mở rộng được mà không cần chỉnh sửa mã hiện có.
class Notification {
    send(type: string, message: string) {
        if (type === "email") {
            console.log(`Sending email: ${message}`);
        } else if (type === "sms") {
            console.log(`Sending SMS: ${message}`);
        }
    }
}

// Tuân thủ OCP
interface NotificationInterface {
    send(message: string): void;
}

class EmailNotification implements NotificationInterface {
    send(message: string): void {
        console.log(`Sending email: ${message}`);
    }
}

class SMSNotification implements NotificationInterface {
    send(message: string): void {
        console.log(`Sending SMS: ${message}`);
    }
}

// Sử dụng
function notify(notification: NotificationInterface, message: string) {
    notification.send(message);
}

notify(new EmailNotification(), "Hello via Email!");
notify(new SMSNotification(), "Hello via SMS!");
