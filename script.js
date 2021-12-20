console.log('funciona')

let theme = localStorage.getItem('theme')

if (theme == null){
    setTheme('blue')
}else{
    setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')

for(var i=0; themeDots.length > i; i++){
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        console.log('option clicked', mode)
        setTheme(mode)
    })
}

function setTheme(mode){
    if(mode == 'blue'){
        document.getElementById('theme-style').href = 'default.css'
    }

    if(mode == 'purple'){
        document.getElementById('theme-style').href = 'purple.css'
    }

    if(mode == 'light'){
        document.getElementById('theme-style').href = 'light.css'
    }

    if(mode == 'green'){
        document.getElementById('theme-style').href = 'green.css'
    }

    localStorage.setItem('theme', mode)
}