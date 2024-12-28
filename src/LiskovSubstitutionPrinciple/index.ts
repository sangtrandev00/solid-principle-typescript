// Vi phạm LSP
// Nguyên tắc: Các class con nên có thể thay thế class cha mà không làm thay đổi hành vi của chương trình.

class Bird {
    fly() {
        console.log("Flying");
    }
}

class Penguin extends Bird {
    fly() {
        throw new Error("Penguins can't fly");
    }
}

// Tuân thủ LSP
class BirdV2 {
    move() {
        console.log("Moving");
    }
}

class FlyingBird extends BirdV2 {
    move() {
        console.log("Flying");
    }
}

class PenguinV2 extends BirdV2 {
    move() {
        console.log("Swimming");
    }
}

// [Question]: Với nguyên tắc này thì chỉ cần thay đổi chức năng chung từ class cha ?
// Cần nhiều ví dụ hơn để hiểu hơn về nguyên tắc này
// Sử dụng
const birds: BirdV2[] = [new FlyingBird(), new PenguinV2()];
birds.forEach((bird) => bird.move());
