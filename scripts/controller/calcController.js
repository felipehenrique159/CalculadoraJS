class CalcController { //cria a classe

    constructor() { //método construtor

        this._displayCalcEl = document.querySelector('#display');
        this._dateEl = document.querySelector('#data');
        this._timeEl = document.querySelector('#hora');
        this._locale = 'pt-br'; //ja inicia fuso horario em brasil
        this.displayCalc = 0; //inicializa a calculadora com zero
        this._currentDate;
        this.initButtonsEvents();
        this.initialize();

        this._operation = []; //vetor para armazenar os valores da calculadora
    }

    initialize() {

        this.setDisplayDateTime(); //inicializa a calculadora com a hora atualizada 

        setInterval(() => {  //atualizando a hora a cada um segundo

            this.setDisplayDateTime();

        }, 1000); //atualiza a cada 1 segundo


    }

    addEventListenerAll(element, events, fn) {
        events.split(' ').forEach(event => {
            element.addEventListener(event, fn, false);
        });
    }

    setError() {
        this.displayCalc = 'Error';
    }

    clearAll() {
        console.log('botao AC funcionando');
        this._operation = [];
    }

    clearEntry() {
        console.log('botao ce funcionando');
        this._operation.pop();
    }

    isOperator(value) {

        return (['+', '-', '*', '%', '/'].indexOf(value) > -1);


    }

    setLastOperation(value){
        this._operation[this._operation.length - 1] = value;
    }

    addOperator(value) {

        console.log('a' , isNaN(this.getLastOperation()));
        if (isNaN(this.getLastOperation())) {
            //string
            if (this.isOperator(value)) {
                //troca operador
                this.setLastOperation(value);
            }

            else if(isNaN(value)) {
                //outra coisa
                
                console.log(value);

            }

            else{
                this._operation.push(value);
            }

        }

        else {
            //number
            let newValue = this.getLastOperation().toString() + value.toString();
            this.setLastOperation(parseInt(newValue));
            
        }


        console.log(this._operation);
    }

    getLastOperation() {
        return this._operation[this._operation.length - 1];

    }

    execBtn(value) {




        switch (value) {

            case 'ac':

                this.clearAll();

                break;

            case 'ce':

                this.clearEntry();

                break;

            case 'soma':
                this.addOperator('+');
                break;

            case 'subtracao':
                this.addOperator('-');
                break;

            case 'divisao':
                this.addOperator('/');
                break;

            case 'multiplicacao':
                this.addOperator('*');
                break;

            case 'porcento':
                this.addOperator('%');
                break;

            case 'igual':
               // this.addOperator('=');
              // this.displayCalc = this.operation[1];
                console.log(this.operation.length);
              break;


            case 'ponto':
                this.addOperator('.');
                break;


            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':


                this.addOperator(parseInt(value));

                break;




            default:

                this.setError();

                break;





        }
    }

    initButtonsEvents() {

        let buttons = document.querySelectorAll('#buttons > g , #parts > g');

        buttons.forEach((btn, index) => {
            this.addEventListenerAll(btn, 'click drag', e => {
                //     console.log(btn.className.baseVal.replace('btn-',''));
                let textBtn = btn.className.baseVal.replace('btn-', '');

                this.execBtn(textBtn);

            });

            this.addEventListenerAll(btn, 'mouseover mouseup mousedown', e => { //troca o modelo seta do mouse para a maozinha
                btn.style.cursor = 'pointer';
            });


        });

    }



    setDisplayDateTime() {

        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        });

        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }


    //metodos getters and setters

    get displayTime() {
        return this._timeEl.innerHTML;
    }

    set displayTime(value) {
        this._timeEl.innerHTML = value;
    }

    get displayDate() {
        return this._dateEl.innerHTML;
    }

    set displayDate(value) {
        this._dateEl.innerHTML = value;
    }



    get displayCalc() {
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value) {
        this._displayCalcEl.innerHTML = value;
    }

    get currentDate() {
        return new Date();
    }

    set currentDate(value) {
        this.currentDate = value;
    }




}

