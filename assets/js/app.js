//добавление и удаление классов эктив

function addClassActive(...obj){
    for(let i = 0; i < obj.length; i++ ){
        document.getElementById(obj[i]).classList.add('active');
    }
}
function removeClassActive(...obj){
    for (let i = 0; i < obj.length; i++){
        document.getElementById(obj[i]).classList.remove('active');
    }
}

document.getElementById('header__burger').addEventListener("click", function(){
    
    if(this.classList.contains('active')){
        removeClassActive('sidebar--mobile','header__burger','header');
        document.querySelector('body').classList.remove('no--scroll');
    }
    else{
        addClassActive('sidebar--mobile','header__burger','header');
        document.querySelector('body').classList.add('no--scroll');
    }

});

document.getElementById('li__item--mobile').addEventListener('click',function(event){
    event.preventDefault();
    if(this.classList.contains('active')){
        removeClassActive('li__item--mobile');
    }
    else{
        addClassActive('li__item--mobile');
        document.querySelector('.ul__submenu--mobile').addEventListener('click', function(event){
            event.stopPropagation();
        })
    }


});

//автоматическое увеличение поля вводимого текста  НЕ ЗАРАБОТАЛ НИ ОДИНИЗ МЕТОДОВ
    

function addAutoResize() {
    document.querySelectorAll('[data-autoresize]').forEach(function (element) {
      element.style.boxSizing = 'border-box';
      let offset = element.offsetHeight - element.clientHeight;
      element.addEventListener('input', function (event) {
        event.target.style.height = 'auto';
        event.target.style.height = event.target.scrollHeight + offset + 'px';
      });
      element.removeAttribute('data-autoresize');
    });
  }

  addAutoResize();


//не работают
    // const textArea = document.getElementsByTagName('textarea');
    // //let textAreaH = item.offsetHeight;

    // for (let i = 0; i < textArea.length; i++) {
    //     textArea[i].setAttribute("style", "height:" + (textArea[i].scrollHeight) + "px; overflow-y:hidden;");
    //     textArea[i].addEventListener("input", OnInput, false);
    //   }
      
    //   function OnInput() {
    //     this.style.height = 0;
    //     this.style.height = (this.scrollHeight) + "px";
    //   }



      
    //    const textArea = document.querySelectorAll('[data-autoresize]');
    //textArea.forEach(item => {
    // let textAreaH = item.offsetHeight; 

    //     item.addEventListener('input',event => {
    //         let $this = event.target;


    //         $this.style.height = textAreaH + "px";
    //         $this.style.height = $this.scrollHeight + "px";
    //     });
    // });


