class User{
    userName: string;
    userAge: number;
}

var user = new User();
user.userAge = 12;
user.userName = "ㅋㅋ";

console.log(user.userName);
console.log(user.userAge);
class UserTest{
    users: Array<User> = [];
    public addUser(user:User):void{
        this.users.push(user);
    }
    public printUsers():void{
        console.log(JSON.stringify(this.users));
    }
    public getUser(idx:number):User{
        return this.users[idx];
    }

}
var ut = new UserTest();
ut.addUser(user);
user = new User();
user.userAge = 21;
user.userName = "ㅎㅎ";
ut.addUser(user);
ut.printUsers();
var user2 = ut.getUser(0);
console.log(user2);
user2.userAge = 44;
user2 = new User();
console.log("user2 => " + user2);
ut.printUsers();