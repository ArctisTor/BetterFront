import Header from "./Header";
import Footer from "./Footer";
import Food from "./components/Food";
import Card from "./components/Card/Card";
import Button from "./components/Button/Button";
import Student from "./components/Student/Student";
import UserGreetings from "./components/UserGreetings/UserGreetings";
import List from "./components/List/List";
import HookAndState from "./components/Hook&State/HookAndState";

//css classes
//import './components/Card/card.css'

//props = read-only properties that are shared between components
//        A parent component can send data to a child component
//        <Component key=value />


//conditional rendering = allows you to control what gets rendered
//                        in your application based on certain conditions
//                        (show, hide, or change components)
//                         isStudent is the example.

function App() {

  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "pineapple", calories: 37 },
    { id: 5, name: "coconut", calories: 159 },
  ];

  const vegetables = [
    { id: 6, name: "potatoes", calories: 110 },
    { id: 7, name: "celery", calories: 15 },
    { id: 8, name: "carrots", calories: 25 },
    { id: 9, name: "corn", calories: 63 },
    { id: 10, name: "broccoli", calories: 50 },
  ];


  return (
    <>
      <Header/>
      <Food/>
      <Card></Card>
      <Button></Button>
      <Student name="Spongebob" age={30} isStudent={true}/>
      <Student name="Patrick" age={42} isStudent={false}/>
      <Student name="Ageless" isStudent={true}/>
      <Student></Student>
      <UserGreetings isLoggedIn={true} userName="User_1"/>
      <UserGreetings/>
      <List items={fruits} category="Fruits"/>
      <List items={vegetables} category="Vegetables"/>
      <List items={[]} category="Garbage List"/>
      <List items={fruits} category=""/>
      <HookAndState/>
      <Footer/>
    </>
  );
}

export default App;
