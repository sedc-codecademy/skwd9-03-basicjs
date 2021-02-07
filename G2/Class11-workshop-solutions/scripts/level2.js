let atmObject = {
    balance: 1500,
    getBalance : function() {
        alert(`Your current balance is ${this.balance}.`);
        this.menu();
    },
    makeDeposit: function(deposit){
        if(isNaN(deposit)) {
            alert("Error: please enter a valid amount of money!")
            this.menu();
        }
        else if(deposit<0){
            alert("Error: please enter a positive amount of money!")
            this.menu();
        }
         else {
            this.balance += deposit;
            this.getBalance();
        }
    },
    makeWithdrawal: function(amount){
        if(isNaN(amount)) {
            alert("Error: please enter a valid amount of money!")
            this.menu();
        }
        else if(amount > this.balance){
            alert("Error: the amount you entered is higher than your balance!")
            this.menu(); 
        }
        else if(amount < 0){
            alert("Error: please enter a positive amount of money!")
            this.menu();
        }
         else {
            this.balance -= amount;
            this.getBalance();
        }
    },
    exit: function(){
        let confirm = window.confirm("Click ok to close, Cancel to continue");
   
        if(confirm) {
           window.close();
        } else {
           this.menu();
        }
    } ,
    error: function(){
        alert("Wrong input");
        this.menu();
    },
    menu: function(){
        let choice = parseInt(prompt("Select a choice: 1). Balance 2). Deposit 3). Withdrawal 4). Exit"))
    
        if(choice === 1) {
            this.getBalance();
        } else if (choice === 2) {
            let deposit = parseFloat(prompt("How much money would you like to deposit?"))
            this.makeDeposit(deposit);
        } else if (choice === 3) {
            let withdraw = parseFloat(prompt("How much money would you like to withdraw?"))
            this.makeWithdrawal(withdraw)
        }  else if (choice === 4) {
            this.exit();
        }
        else {
            this.error();
        }
    } 
};

atmObject.menu();

