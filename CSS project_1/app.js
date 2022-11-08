let button = document.querySelector('.button1');
        let content1 = document.querySelector('.work');

        button.addEventListener('click', operate)

        function operate(){
            if(content1.classList.contains('work')){
                content1.classList.remove('work');
            }
            else{
                content1.classList.add('work');
            }
        }

        let button1 = document.querySelector('.button2');
        let content2 = document.querySelector('.work1');

        button1.addEventListener('click', operate1)

        function operate1(){
            if(content2.classList.contains('work1')){
                content2.classList.remove('work1');
            }
            else{
                content2.classList.add('work1');
            }
        }

        let button2 = document.querySelector('.button3');
        let content3 = document.querySelector('.work2');

        button2.addEventListener('click', operate2)

        function operate2(){
            if(content3.classList.contains('work2')){
                content3.classList.remove('work2');
            }
            else{
                content3.classList.add('work2');
            }
        }

        let menu1 = document.querySelector('.menu');
        let dropdown = document.querySelector('.dropdown');
        let header1 = document.querySelector('.header1')

        menu1.addEventListener('click', showmenu)

        function showmenu(){
            if(dropdown.classList.contains('hide')){
                dropdown.classList.remove('hide');
                header1.style.background = "linear-gradient(to right,rgb(12, 12, 12),rgb(40, 38, 38), rgb(61, 61, 61))";
                menu1.innerHTML = "✖"
                // menu1.style.
            }
            else{
                dropdown.classList.add('hide');
                menu1.innerHTML = "<strong>☰</strong>"
            }
        }
