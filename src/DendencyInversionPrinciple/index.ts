// Vi phạm DIP
// Nguyên tắc: Các module cấp cao không nên phụ thuộc vào các module cấp thấp. Cả hai nên phụ thuộc vào abstraction.
class MySQLDatabaseV1 {
    connect() {
        console.log("Connecting to MySQL");
    }
}

class AppV1 {
    db: MySQLDatabaseV1;

    constructor() {
        this.db = new MySQLDatabaseV1();
    }

    start() {
        this.db.connect();
    }
}

// Tuân thủ DIP
interface DatabaseInterface {
    connect(): void;
}

class MySQLDatabase implements DatabaseInterface {
    connect() {
        console.log("Connecting to MySQL");
    }
}

class MongoDBDatabase implements DatabaseInterface {
    connect() {
        console.log("Connecting to MongoDB");
    }
}

class App {
    db: DatabaseInterface;

    constructor(db: DatabaseInterface) {
        this.db = db;
    }

    start() {
        this.db.connect();
    }
}

// Sử dụng
const app1 = new App(new MySQLDatabase());
app1.start();

const app2 = new App(new MongoDBDatabase());
app2.start();
