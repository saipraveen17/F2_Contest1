/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    let ans = arr.map((element)=> {
      if(element.profession=="developer") {
        console.log(element);
        // return element;
      }
    });
    // console.log(ans);

  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach((element)=> {
      if(element.profession=="developer") {
        console.log(element);
      }
    });
  }
  
  function addData() {
    //Write your code here, just console.log
    let newObj = {
      id:4,
      name:"susan",
      age:"20",
      profession:"intern"
    };
    arr.push(newObj);
    console.log(newObj);
    console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    let ans = arr.filter((element)=> {
      if(element.profession=="admin") {
        return false;
      }
      return true;
    });
    // console.log(ans);
    arr = ans;
    console.log(arr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let newArray = [
      { id: 5, name: "praveen", age: "24", profession: "engineer" },
      { id: 6, name: "raju", age: "25", profession: "accountant" },
      { id: 7, name: "ankit", age: "23", profession: "HR" },
    ];
    // newArray.forEach((element)=> {
    //   arr.push(element);
    // });
    // console.log(arr);
    console.log(arr.concat(newArray));
  }