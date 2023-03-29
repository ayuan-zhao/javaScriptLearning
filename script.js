"use Strict"
document.write("<h1>You will get a job in 2023 fall</h1>");
document.write("You need to keep going");
// 创建一个容器，把字串放到容器里
const my_name= "Ayuan";
const my_age = 33;
// HTML line break tag,break换行，所以是br
document.write("<br/>")
document.write(my_name + my_age)
document.write(my_age)
// 转译符the backslash (\) is being used as an escape character.
const phrase ="hello\" Mr.Guan, "+"haha";
document.write(phrase.toLowerCase());
// 回传第二个字母
document.write(phrase.charAt(1));
document.write("<br/>")

function hello(name){
    document.write("hello, " + name);

}
hello("Anya");

function add(num1,num2){
    // document.write(num1 + num2)
    return num1 + num2;
}
// add(3,5);
document.write(add(3,5));


var person = {
    name:"Anya",
    age:"forver young",
    target:"getAGoodJob!",
    print_name:function(){
        // this.name = person.name
        document.write(this.name);
    }
};
person.print_name();

var movie = {
    title:"lion King",
    maker:"Disney",
    actors:[
        {
            name:lionKing,
            age:6,
        },
        {
            name:lionQueen,
            age:5.

        }
    ]
};
Document.write(movie.actors[0].name)
Document.write(movie.actors[1].name)

