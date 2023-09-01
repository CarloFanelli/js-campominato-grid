function createField(elementDOM,squareNumber) {
    
    let i = 0;
    while (i < squareNumber) {

        const squareMarkup = `<div class="square">${i+1}</div>`

        document.querySelector('.field').insertAdjacentHTML('beforeend',squareMarkup);
        
console.log('ciao');

        i++;
    }

}

document.getElementById('create-field').addEventListener('click',function(){
    
    const fieldDOM = document.querySelector('.field');
    
    createField(fieldDOM,100);
    
})