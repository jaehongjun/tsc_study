class Hello{
    str : string = "프리이베이트";
    public str2: string = "퍼블릭";
    private test1() : void{
        console.log("123");
        this.str = "test" // Hello
    }
    // private number 
    private add(num1:number, num2:number):number{
        return num1+num2;
    }
    public test2() :void{
        let num1 : number =3;
        let num2 : number =5;
        let numArr : number[] = [1,2,3];
        let numArr2 : Array<number> = [1,2,3];
        let tp:[string,number];
        tp = ["1",2];
        let anyType : any;
        anyType = "3";
        anyType = 1;
        anyType = new Number(2);
        anyType = true;
        console.log(...tp);
        console.log(num1+num2);
        console.log("hello hello");
        this.test1();
        this.str2 = "214234";
    }
}

var h  = new Hello();
h.test2();
console.log(h.str2);
h.str2="tdfsggfsdg";