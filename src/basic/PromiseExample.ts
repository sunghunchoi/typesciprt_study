function ExpensiveWebCall(time : number) : Promise<void> {
    return new Promise((resolve, reject) => setTimeout(resolve,time));
}

class MyWebService {
    // CallExpensiveWebOperation() : void {
    //      ExpensiveWebCall(4000).then(() => console.log(`Finished web service`))
    //         .catch(() => console.log(`Expensive web call failure`));
    // }
    async CallExpensiveWebOperation()  {
        try {
            await ExpensiveWebCall(4000)
        } catch (error) {
            console.log(`Caught ${error}`)
        }
        console.log(`Finished web service`)
    }
}

console.log(`calling service`);
new MyWebService().CallExpensiveWebOperation();
console.log(`processing continues until the web service returns`);