const button_element = document.getElementById('button');
const color_element = document.getElementById('color-container');
color_element.innerHTML = '';

const HexColorGenerater = ()=>{
    const hex = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    code = '#'
    for(i=0;i<6;i++){
        const randomcolor = Math.floor(Math.random()*(hex.length));
        code+=hex[randomcolor];
    }
    return code;
}

const colorPalleteGenerater =()=>{
    const ColorHex = [];
    for(let i=0;i<4;i++){
        ColorHex.push(HexColorGenerater());
    };
    return ColorHex;
}


const RenderPallateGenerate = ()=>{
    const AllColor = colorPalleteGenerater();
    color_element.innerHTML = '';
    AllColor.forEach((SingleColor,i)=>{
        const ColorDiv = document.createElement('div');
        ColorDiv.id = `color${i}`;
        ColorDiv.style.backgroundColor = SingleColor;
        const Ptag = document.createElement('p');
        Ptag.id = `color${i}Tag`;
        ColorDiv.className = 'color';
        Ptag.innerText = SingleColor;
        ColorDiv.appendChild(Ptag);
        color_element.appendChild(ColorDiv);
    })
    
    const AllColorTag = document.querySelectorAll('.color');
    AllColorTag.forEach((ColorTag,i)=>{
        ColorTag.addEventListener('click',function(){
            const clip_element = document.getElementById(`color${i}Tag`);
            navigator.clipboard.writeText(clip_element.innerText).then(function(){
                alert(`Copy ColorCode ${clip_element.innerText} successfully`);
            }).catch(()=>{
                alert('There is an error');
            });
        });
    })
    
}
button_element.addEventListener('click',RenderPallateGenerate);