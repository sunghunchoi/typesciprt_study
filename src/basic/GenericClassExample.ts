// class QueueOfInt {
//     private queue : number[] = [];
//
//     Push(value: number) : void {
//         this.queue.push(value);
//     }
//
//     Pop() : number | undefined {
//         return this.queue.shift();
//     }
// }
//
// class QueueOfString {
//     private queue : string[] = [];
//
//     Push(value: string) :void {
//         this.queue.push(value);
//     }
//
//     Pop() :string | undefined {
//         return this.queue.shift();
//     }
// }

class Queue<T> {
    private queue : T[] = [];

    Push(value : T) : void {
        this.queue.push(value);
    }

    Pop() : T | undefined {
        return this.queue.shift();
    }
}

// const intQueue : QueueOfInt = new QueueOfInt();
// intQueue.Push(10);
// intQueue.Push(35);

const intQueue : Queue<number> = new Queue<number>();
const stringQueue : Queue<string> = new Queue<string>();


intQueue.Push(10);
intQueue.Push(35);
console.log(intQueue.Pop())
console.log(intQueue.Pop())
console.log(intQueue.Pop())

stringQueue.Push('A');
stringQueue.Push('B');
console.log(stringQueue.Pop())
console.log(stringQueue.Pop())
console.log(stringQueue.Pop())
