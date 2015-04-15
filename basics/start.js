var a = 5; // global variable

window.titleOfApplication = 'javascript';  // global variable attached to window object

// grouping variables - best practise
var ename= 'Murthy', sal = 5000, job = 'Eng';

// ASI : Automatic Semicolon insertion 
function show() {  // best practise put { here now below to use ASI

    name = 'sriram'; // global variable without var keyword
    var x = 10; // local variable
    alert('x - ' + x);

    alert('a - '+ a);
    a = a + 15;

    alert(window.titleOfApplication);

    var books = ['javascript', 'java'];
    alert("name is of type :" + typeof (name));// output is string
    alert("book is of  type " + typeof (books));// object
    alert("products if of type " + typeof (products));// undefined

    var bank=null;
    alert('bank is  ' + typeof (bank) + 'data :' + bank); // bank is object  data :null        

    // object Literal  (camel case) - global object - empInfo
    empInfo = {
                'name': 'Murthy',
                'job': 'Engineer',
                'salary': 5000,
                'address': { 'hno': "2-2-223", 'city': 'hyderabad' }
        };


}
show();
alert('outside a  :' + a)// a- 20
alert('name :' + name);// name-sriram

alert('Emp Information (salary ) :'+empInfo.salary)

alert(x);// local variable can not be accessible - error
