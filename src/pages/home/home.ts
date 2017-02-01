import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

/*
Project Name: COMP3025 - Assignment#1
Author: Nicholas Rowlandson(200167125)
Date: Tuesday January 31 2017
*/

export class HomePage {

  constructor(public navCtrl: NavController) {
    /* Timeout gives the html a chance to load before applying event listeners */
    setTimeout(function(){

      var num, firstValue, secondValue, result;
      var op, opSymbol;
      var display = document.getElementById('resultText');
      var nextValue = false;

      /* if num has been clicked store value in firstValue variable */
      function numClicked(evt) {
        if(nextValue == true){
          num = evt.target.value;
          display.innerHTML = num;
          nextValue = false;
        }else{
          num = evt.target.value;
          display.innerHTML = display.innerHTML + num;
        }
      }

      /* if operator button has been clicked, store the value in the op variable */
      function opClicked(evt) {
        if(op != null){

        }else{
          firstValue = display.innerHTML;
          opSymbol = evt.target.innerHTML;
          op = evt.target.value;
          display.innerHTML = opSymbol;
          nextValue = true;
        }
      }

      /* if the equal button is clicked, check what operator has been used
      and preform math function accordingly */
      function eqClicked(){
        secondValue = display.innerHTML;
        if(op == "/"){
          result = firstValue / secondValue;
        }else if(op == "*"){
          result = firstValue * secondValue;
        }else if(op == "-"){
          result = firstValue - secondValue;
        }else if(op == "+"){
          result = +firstValue + +secondValue;
        }else{
          display.innerHTML = "";
        }

        if(result != null){
          display.innerHTML = result;
        }

        num = 0;
        firstValue = 0;
        secondValue = 0;
        result = 0;
        op = null;
        opSymbol = null;
        nextValue = false;
      }

      /* If the AC button is clicked, clear the display and reset all variables */
      function clrClicked(){
        display.innerHTML = "";
        num = 0;
        firstValue = 0;
        secondValue = 0;
        result = 0;
        op = null;
        opSymbol = null;
        nextValue = false;
      }

      /* If the delete key is pressed, remove one character from the overall
      length of the display */
      function delClicked() {
        var length = display.innerHTML.length - 1;
        display.innerHTML = display.innerHTML.substring(0, length);
      }

      /* Each button is assigned an element ID in the html. The following code
      adds an event listener to each ID */
      var clear = document.getElementById("clear");
      clear.addEventListener("click", clrClicked, false);

      var del = document.getElementById("del");
      del.addEventListener("click", delClicked, false);

      var percent = document.getElementById("percent");
      percent.addEventListener("click", opClicked, false);

      var divide = document.getElementById("divide");
      divide.addEventListener("click", opClicked, false);

      var multiply = document.getElementById("multiply");
      multiply.addEventListener("click", opClicked, false);

      var subtract = document.getElementById("subtract");
      subtract.addEventListener("click", opClicked, false);

      var add = document.getElementById("add");
      add.addEventListener("click", opClicked, false);

      var equals = document.getElementById("equals");
      equals.addEventListener("click", eqClicked, false);

      var decimal = document.getElementById("decimal");
      decimal.addEventListener("click", numClicked, false);

      var one = document.getElementById("one");
      one.addEventListener("click", numClicked, false);

      var two = document.getElementById("two");
      two.addEventListener("click", numClicked, false);

      var three = document.getElementById("three")
      three.addEventListener("click", numClicked, false);

      var four = document.getElementById("four");
      four.addEventListener("click", numClicked, false);

      var five = document.getElementById("five");
      five.addEventListener("click", numClicked, false);

      var six = document.getElementById("six");
      six.addEventListener("click", numClicked, false);

      var seven = document.getElementById("seven");
      seven.addEventListener("click", numClicked, false);

      var eight = document.getElementById("eight");
      eight.addEventListener("click", numClicked, false);

      var nine = document.getElementById("nine");
      nine.addEventListener("click", numClicked, false);

      var zero = document.getElementById("zero");
      zero.addEventListener("click", numClicked, false);

    }, 30);
  }
}
