// Nguyên tác chữ S: Single Responsibility Principle
// Nguyên tắc: Một class chỉ nên đảm nhận một trách nhiệm duy nhất.
// Vi phạm SRP
class UserManager {
    createUser(user: string) {
        console.log(`User ${user} created`);
    }
    logActivity(activity: string) {
        console.log(`Activity logged: ${activity}`);
    }
}

// Tuân thủ SRP
class UserCreator {
    createUser(user: string) {
        console.log(`User ${user} created`);
    }
}

class ActivityLogger {
    logActivity(activity: string) {
        console.log(`Activity logged: ${activity}`);
    }
}

// Sử dụng
const userCreator = new UserCreator();
const logger = new ActivityLogger();
userCreator.createUser("John");
logger.logActivity("User creation");
