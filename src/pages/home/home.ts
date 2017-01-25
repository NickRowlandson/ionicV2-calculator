import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

    setTimeout(function(){

      var num, firstValue, secondValue, result;
      var op, opSymbol;
      var display = document.getElementById('result');

      function numClicked(evt) {
        if(num == 0){
          num = evt.target.value;
          display.innerHTML = num;
        }else{
          num = evt.target.value;
          display.innerHTML = display.innerHTML + num;
        }
      }

      function opClicked(evt) {
        if(op != null){

        }else{
          firstValue = display.innerHTML;
          opSymbol = evt.target.innerHTML;
          op = evt.target.value;
          display.innerHTML = opSymbol;
          num = 0;
        }
      }

      function eqClicked(){
        secondValue = display.innerHTML;
        if(op == "/"){
          result = firstValue / secondValue;
          alert(firstValue + " " + secondValue)
        }else if(op == "*"){
          result = firstValue * secondValue;
        }else if(op == "-"){
          result = firstValue - secondValue;
        }else if(op == "+"){
          result = firstValue + secondValue;
        }else{
          display.innerHTML = "";
        }

        if(result != null){
          display.innerHTML = result;
        }

        num = 1;
        firstValue = 0;
        secondValue = 0;
        result = 0;
        op = null;
        opSymbol = null;
      }

      function clrClicked(){
        display.innerHTML = "";
        num = 1;
        firstValue = 0;
        secondValue = 0;
        result = 0;
        op = null;
        opSymbol = null;
      }

      var clear = document.getElementById("clear");
      clear.addEventListener("click", clrClicked, false);

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
