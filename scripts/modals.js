const modaldamage_diller = document.querySelector('.damage_diller')
const modalshooter = document.querySelector('.shooter')
const modalarmour = document.querySelector('.armour')
const modalhealer = document.querySelector('.healer')
const modalsupport = document.querySelector('.support')
const modalmoney = document.querySelector('.money')

const btnmodaldamage_diller = document.querySelector('.btn-damage_diller')
const btnmodalshooter = document.querySelector('.btn-shooter')
const btnmodalarmour = document.querySelector('.btn-armour')
const btnmodalhealer = document.querySelector('.btn-healer')
const btnmodalsupport = document.querySelector('.btn-support')
const btnmodalmoney = document.querySelector('.btn-money')


btnmodaldamage_diller.addEventListener('click',()=>{
    modaldamage_diller.classList.add('active')
})
btnmodalshooter.addEventListener('click',()=>{
    modalshooter.classList.add('active')
})
btnmodalarmour.addEventListener('click',()=>{
    modalarmour.classList.add('active')
})
btnmodalhealer.addEventListener('click',()=>{
    modalhealer.classList.add('active')
})
btnmodalsupport.addEventListener('click',()=>{
    modalsupport.classList.add('active')
})
btnmodalmoney.addEventListener('click',()=>{
    modalmoney.classList.add('active')
})

// Выбираем все кнопки с классом close-info
const closeButtons = document.querySelectorAll('.close-info');

// Добавляем обработчик события для каждой кнопки
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Удаляем класс active у всех элементов с классом details-info
        document.querySelectorAll('.details-info').forEach(detail => {
            detail.classList.remove('active');
        });
    });
});