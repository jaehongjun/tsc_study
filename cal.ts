class Cal{
    private num1: number = 0;
    private num2: number = 1;

    constructor(num1:number,num2:number){
        this.num1 = num1;
        this.num2 = num2;
    }
    private add():number{
        return this.num1 + this.num2;
    }
    private minus():number{
        return this.num1 - this.num2;
    }
    private multiple():number{
        return this.num1 * this.num2;
    }
    private divide():number{
        return this.num1 / this.num2;
    }

    public getCalResult(op:string):number{
        if(op=="+"){
            return this.add();
        }
        if(op=="-"){
            return this.minus();
        }
        if(op=="*"){
            return this.multiple();
        }
        if(op=="/"){
            return this.divide();
        }
        return 0;
    }
    public printResult(op:string):void{
        console.log(this.num1,op,this.num2,"=",this.getCalResult(op));
    }

}

let c = new Cal(1,2);
c.printResult("+");
console.log(c.getCalResult("+"));
console.log(c.getCalResult("-"));
console.log(c.getCalResult("*"));
console.log(c.getCalResult("/"));