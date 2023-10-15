
    const userInput = document.querySelector('#input');
    const display = document.querySelector('#list-data');
    
    let allData = [];
    let threeData = [];
    
    function getData() {
            
       const data = userInput.value;
       const slicedData = data.split('\n');
       allData.push(slicedData);
       let dataArr = allData.flat();
       
       function answeredData(item) {
           const singleQuiz = `<li onclick="getAnswer(this)">${item}</li>`;
           return singleQuiz;
       }
    
       let listData = dataArr.map(answeredData);
       display.innerHTML = listData.join('');
       userInput.value = '';
    }
    
    const question = document.querySelector('[name="question"]');
    const op1 = document.querySelector('[name="op1"]');
    const op2 = document.querySelector('[name="op2"]');
    const op3 = document.querySelector('[name="op3"]');
    const op4 = document.querySelector('[name="op4"]');
    const answer = document.querySelector('[name="answer"]');
    const extra1 = document.querySelector('[name="extra1"]');
    const extra2 = document.querySelector('[name="extra2"]');
    const extra3 = document.querySelector('[name="extra3"]');
    
    function getAnswer(item) {
        item.style.background = 'aqua';
        let myData = display.innerText + '\n' + item.innerText;
        let finalData = myData.split('\n');
        question.value = finalData[0];
        op1.value = finalData[1];
        op2.value = finalData[2];
        op3.value = finalData[3];
        op4.value = finalData[4];
        answer.value = finalData[5]; 
    
        let itemsToRemove = [finalData[0], finalData[5]];
        
        let newArray = finalData.filter(item => !itemsToRemove.includes(item));
        
        extra1.value = newArray[0];
        extra2.value = newArray[1];
        extra3.value = newArray[2];
        console.log(newArray); 
        
    }
    
    // Debugging code to see if the event listener is triggered when submitting the form
    document.querySelector('#all-input').addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('Form submitted');
    });
    
    
    const form = document.querySelector('#all-input');
    
    form.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    document.querySelector('#submitting').innerHTML = 'Submitting...';
    
    const data = new FormData(form);
    fetch('https://script.google.com/macros/s/AKfycby9VtfWUhl2ZxZa6uUSBr1ZDu27mwJWR7PW9l_gDiZXEZEUsDBe8nEH1T8zfqBZhrYX/exec', {
        method: "POST",
        body: data
    })
    
    .then(res => res.text())
    .then(data => {
        document.querySelector('#submitting').innerHTML = data;
        display.innerHTML = '';
        question.value = '';
        op1.value = '';
        op2.value = '';
        op3.value = '';
        op4.value = '';
        answer.value = '';
        extra1.value = '';
        extra2.value = '';
        extra3.value = '';
    })
    })
