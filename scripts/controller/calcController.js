class CalcController {

    constructor() { //método construtor

        this._displayCalcEl = document.querySelector('#display');
        this._dateEl = document.querySelector('#data');
        this._timeEl = document.querySelector('#hora');
        this._locale = 'pt-br';
        this._currentDate;
        this.initButtonsEvents();
        this.initialize();
    }

    initialize() {
        
        this.setDisplayDateTime(); //inicializa a calculadora com a hora atualizada 
       
        setInterval(() =>{  //atualizando a hora a cada um segundo

           this.setDisplayDateTime();

        }, 1000 ); //atualiza a cada 1 segundo
        

    }

    addEventListenerAll(element, events, fn){
        events.split(' ').forEach(event =>{
            element.addEventListener(event ,fn , false );
        })
    }

    execBtn(value){
        switch (value){
            case 'ac':
            console.log('botao AC fucnionando');

            break;

            case '1':
            console.log("botao 1 funcionando");
            this.displayCalc = 1;
            break;


        }
    }
    
   initButtonsEvents(){
     
    let buttons = document.querySelectorAll('#buttons > g , #parts > g');

    buttons.forEach((btn , index) =>{
        this.addEventListenerAll(btn, 'click drag' , e =>{
      //     console.log(btn.className.baseVal.replace('btn-',''));
          let textBtn = btn.className.baseVal.replace('btn-','');
          
            this.execBtn(textBtn);

        });
        
        this.addEventListenerAll(btn, 'mouseover mouseup mousedown', e=>{ //troca o modelo seta do mouse para a maozinha
            btn.style.cursor = 'pointer';
        });


    });
    
     }
      
   

    setDisplayDateTime(){

        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day:'2-digit',
            month:'long',
            year: 'numeric'
        });

        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }


    //metodos getters and setters

    get displayTime(){
        return this._timeEl.innerHTML;
    }

    set displayTime(value){
        this._timeEl.innerHTML = value;
    }

    get displayDate(){
        return this._dateEl.innerHTML;
    }

    set displayDate(value){
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

