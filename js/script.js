const card1 = document.querySelector('.card1');
const card2 = document.querySelector('.card2');
const card3 = document.querySelector('.card3');
const card4 = document.querySelector('.card4');
const card5 = document.querySelector('.card5');

function hidden_card( button_ ) {
    const button = document.getElementById(`${button_}`);

    if (button_ == 'everything')
    {
        button.onclick = function() {
            card1.style = 'display: block;';
            card2.style = 'display: block;';
            card3.style = 'display: block;';   
            card4.style = 'display: block;';  
            card5.style = 'display: block;';
        }
    } else if (button_ == 'branding') {
        button.onclick = function() {
            card3.style = 'display: none;';
            card1.style = 'display: block;';
            card2.style = 'display: block;';
            card4.style = 'display: block;';
        }
    } else if (button_ == 'web') {
        button.onclick = function() {
            card1.style = 'display: none;';
            card2.style = 'display: none;';
            card4.style = 'display: none;';
            card3.style = 'display: block;';
        }
    }
}

hidden_card('everything');
hidden_card('branding');
hidden_card('web');