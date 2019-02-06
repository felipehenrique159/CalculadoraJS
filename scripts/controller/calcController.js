class CalcController {

    constructor() { //método construtor

        this._displayCalcEl = document.querySelector('#display');
        this._dateEl = document.querySelector('#data');
        this._timeEl = document.querySelector('#hora');
        this._locale = 'pt-br';
        this.displayCalc = 0; //inicializa a calculadora com zero
        this._currentDate;
        this.initButtonsEvents();
        this.initialize();
        this.vetor = [];
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

            
        let teste = []; //vetor para armazenar os digitos
       // console.log(teste);

        switch (value){
            case 'ac':
            console.log('botao AC fucnionando');
            this.displayCalc = 0;
            

            break;

            case '1':
            console.log("botao 1 funcionando");
            this.displayCalc = 1;
               this.vetor.push('1');
            console.log(this.vetor);
            
            break;

            
            case '2':
            console.log("botao 2 funcionando");
            this.displayCalc = 2;
            this.vetor.push('2');
            console.log(this.vetor);
            
            break;

            case '3':
            console.log("botao 3 funcionando");
            this.displayCalc = 3;
            this.vetor.push('3');
            console.log(this.vetor);
            break;

            case 'igual':
            console.log("igual ok");
            console.log(this.vetor);
            this.displayCalc = this.vetor[0] + this.vetor[1] + this.vetor[2] + + this.vetor[3];
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

