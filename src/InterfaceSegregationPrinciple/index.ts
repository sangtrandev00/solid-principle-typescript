// Vi phạm ISP
// Nguyên tắc: Một interface không nên ép buộc các class thực thi nó phải phụ thuộc vào các phương thức không cần thiết.
// => Vậy thì phải chia nhỏ interface

interface Animal {
    fly(): void;
    swim(): void;
}

class DogV1 implements Animal {
    fly() {
        throw new Error("Dogs can't fly");
    }
    swim() {
        console.log("Dog swimming");
    }
}

// Tuân thủ ISP
interface Swimmer {
    swim(): void;
}

interface Flyer {
    fly(): void;
}

class Dog implements Swimmer {
    swim() {
        console.log("Dog swimming");
    }
}

class Bird implements Flyer {
    fly() {
        console.log("Bird flying");
    }
}

// Sử dụng
const dog = new Dog();
dog.swim();

const bird = new Bird();
bird.fly();
