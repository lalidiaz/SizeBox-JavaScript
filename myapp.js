let elements = document.getElementsByName('cssProperty');

let div = document.getElementById('modify');

function set()
{
    
    for( let index = 0; index < elements.length; index++ )
    {
        let cssProperty = elements[ index ].getAttribute('id');
        
        let cssValue = elements[ index ].value;
        
        div.style[ cssProperty ] = cssValue;
    }
}

document.getElementById('set').addEventListener('click',set);