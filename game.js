
let isMark = true;
let canMark = true;
let thisMark = "";





function mark(numberBox){
    
    let box = numberBox
    if(isMark == true){
        thisMark = "X";
    } else {
        thisMark = "O";
    }

        switch(box){
            case 1:
                
                var box1 = document.getElementById("box1")
                var boxF = document.getElementById("boxF")
                box1.innerText = thisMark
                var b1 = box1.textContent
                if(isMark == true && canMark == true){
                    isMark = false
                    canMark = false
                    boxF.setAttribute("onclick","")
                    boxF.setAttribute("canmark",false)
                    
                } else {
                    isMark = true
                    canMark = true
                    boxF.setAttribute("onclick","")
                    boxF.setAttribute("canmark",false)
                }
            break
            case 2:
                var box2 = document.getElementById("box2")
                var boxS = document.getElementById("boxS")
                box2.innerText = thisMark
                var b2 = box2.textContent
                if(isMark == true && canMark == true){
                    isMark = false
                    canMark = false
                    boxS.setAttribute("onclick","")
                    boxS.setAttribute("canmark",false)
                } else {
                    isMark = true
                    canMark = true
                    boxS.setAttribute("onclick","")
                    boxS.setAttribute("canmark",false)
                }
            break
            case 3:
                var box3 = document.getElementById("box3")
                var boxT = document.getElementById("boxT")
                box3.innerText = thisMark
                var b3 = box3.textContent
                if(isMark == true && canMark == true){
                    isMark = false
                    canMark = false
                    boxT.setAttribute("onclick","")
                    boxT.setAttribute("canmark",false)
                } else {
                    isMark = true
                    canMark = true
                    boxT.setAttribute("onclick","")
                    boxT.setAttribute("canmark",false)
                }
            break

            case 4:
                var box4 = document.getElementById("box4")
                var boxQ = document.getElementById("boxQ")
                box4.innerText = thisMark
                var b4 = box4.textContent
                if(isMark == true && canMark == true){
                    isMark = false
                    canMark = false
                    boxQ.setAttribute("onclick","")
                    boxQ.setAttribute("canmark",false)
                } else {
                    isMark = true
                    canMark = true
                    boxQ.setAttribute("onclick","")
                    boxQ.setAttribute("canmark",false)
                }
            break
            case 5:
                var box5 = document.getElementById("box5")
                var boxFI = document.getElementById("boxFI")
                box5.innerText = thisMark
                var b5 = box5.textContent
                if(isMark == true && canMark == true){
                    isMark = false
                    canMark = false
                    boxFI.setAttribute("onclick","")
                    boxFI.setAttribute("canmark",false)
                } else {
                    isMark = true
                    canMark = true
                    boxFI.setAttribute("onclick","")
                    boxFI.setAttribute("canmark",false)
                }
            break
            case 6:
                var box6 = document.getElementById("box6")
                var boxSIX = document.getElementById("boxSIX")
                box6.innerText = thisMark
                var b6 = box6.textContent
                if(isMark == true && canMark == true){
                    isMark = false
                    canMark = false
                    boxSIX.setAttribute("onclick","")
                    boxSIX.setAttribute("canmark",false)
                } else {
                    isMark = true
                    canMark = true
                    boxSIX.setAttribute("onclick","")
                    boxSIX.setAttribute("canmark",false)
                }
            break
            case 7:
                var box7 = document.getElementById("box7")
                var boxSE = document.getElementById("boxSE")
                box7.innerText = thisMark
                var b7 = box7.textContent
                if(isMark == true && canMark == true){
                    isMark = false
                    canMark = false
                    boxSE.setAttribute("onclick","")
                    boxSE.setAttribute("canmark",false)
                } else {
                    isMark = true
                    canMark = true
                    boxSE.setAttribute("onclick","")
                    boxSE.setAttribute("canmark",false)
                }
            break
            case 8:
                var box8 = document.getElementById("box8")
                var boxE = document.getElementById("boxE")
                box8.innerText = thisMark
                var b8 = box8.textContent
                if(isMark == true && canMark == true){
                    isMark = false
                    canMark = false
                    boxE.setAttribute("onclick","")
                    boxE.setAttribute("canmark", false)
                } else {
                    isMark = true
                    canMark = true
                    boxE.setAttribute("onclick","")
                    boxE.setAttribute("canmark", false)
                }
            break
            case 9:
                var box9 = document.getElementById("box9")
                var boxNINE = document.getElementById("boxNINE")
                box9.innerText = thisMark
                var b9 = box9.textContent
                if(isMark == true && canMark == true){
                    isMark = false
                    canMark = false
                    boxNINE.setAttribute("onclick","")
                    boxNINE.setAttribute("canmark",false)
                } else {
                    isMark = true
                    canMark = true
                    boxNINE.setAttribute("onclick","")
                    boxNINE.setAttribute("canmark",false)
                }
            break
        }
        var boxF = document.querySelector("#boxF")
        var boxS = document.querySelector("#boxS")
        var boxT = document.querySelector("#boxT")
        var boxQ = document.querySelector("#boxQ")
        var boxFI = document.querySelector("#boxFI")
        var boxSIX = document.querySelector("#boxSIX")
        var boxSE = document.querySelector("#boxSE")
        var boxE = document.querySelector("#boxE")
        var boxNINE = document.querySelector("#boxNINE")

        var canmarkb1 = boxF.getAttribute("canmark")
        var canmarkb2 = boxS.getAttribute("canmark")
        var canmarkb3 = boxT.getAttribute("canmark")
        var canmarkb4 = boxQ.getAttribute("canmark")
        var canmarkb5 = boxFI.getAttribute("canmark")
        var canmarkb6 = boxSIX.getAttribute("canmark")
        var canmarkb7 = boxSE.getAttribute("canmark")
        var canmarkb8 = boxE.getAttribute("canmark")
        var canmarkb9 = boxNINE.getAttribute("canmark")

        var box1 = document.getElementById("box1")
        var box2 = document.getElementById("box2")
        var box3 = document.getElementById("box3")
        var box4 = document.getElementById("box4")
        var box5 = document.getElementById("box5")
        var box6 = document.getElementById("box6")
        var box7 = document.getElementById("box7")
        var box8 = document.getElementById("box8")
        var box9 = document.getElementById("box9")

        var b1 = box1.textContent
        var b2 = box2.textContent
        var b3 = box3.textContent
        var b4 = box4.textContent
        var b5 = box5.textContent
        var b6 = box6.textContent
        var b7 = box7.textContent
        var b8 = box8.textContent
        var b9 = box9.textContent

        var marcado = false
        if(b1 == b2 && b2 == b3 && canmarkb1 == "false" && canmarkb2 == "false" && canmarkb3 == "false"){
            marcado = true
            if(marcado == true){
                const info = `Jogador com ${b1} ganhou!`
                let bord = document.getElementById("bordaScore")
                let win = document.getElementById("win")
                win.innerText = info
                win.style.color = "white"
                boxF.removeAttribute("onclick")
                boxS.removeAttribute("onclick")
                boxT.removeAttribute("onclick")
                boxQ.removeAttribute("onclick")
                boxFI.removeAttribute("onclick")
                boxSIX.removeAttribute("onclick")
                boxSE.removeAttribute("onclick")
                boxE.removeAttribute("onclick")
                boxNINE.removeAttribute("onclick")
                boxF.style.backgroundColor = "lime"
                boxS.style.backgroundColor = "lime"
                boxT.style.backgroundColor = "lime"
                
            }
        }
        else if(b1 == b4 && b4 == b7 && canmarkb1 == "false" && canmarkb4 == "false" && canmarkb7 == "false"){
            marcado = true
            if(marcado == true){
                const info = `Jogador com ${b1} ganhou!`
                let bord = document.getElementById("bordaScore")
                let win = document.getElementById("win")
                win.innerText = info
                win.style.color = "white"
                boxF.removeAttribute("onclick")
                boxS.removeAttribute("onclick")
                boxT.removeAttribute("onclick")
                boxQ.removeAttribute("onclick")
                boxFI.removeAttribute("onclick")
                boxSIX.removeAttribute("onclick")
                boxSE.removeAttribute("onclick")
                boxE.removeAttribute("onclick")
                boxNINE.removeAttribute("onclick")
                boxF.style.backgroundColor = "lime"
                boxQ.style.backgroundColor = "lime"
                boxSE.style.backgroundColor = "lime"
            }
        }
        else if(b7 == b8 && b8 == b9 && canmarkb7 == "false" && canmarkb8 == "false" && canmarkb9 == "false"){
            marcado = true
            if(marcado == true){
                const info = `Jogador com ${b7} ganhou!`
                let bord = document.getElementById("bordaScore")
                let win = document.getElementById("win")
                win.innerText = info
                win.style.color = "white"
                boxF.removeAttribute("onclick")
                boxS.removeAttribute("onclick")
                boxT.removeAttribute("onclick")
                boxQ.removeAttribute("onclick")
                boxFI.removeAttribute("onclick")
                boxSIX.removeAttribute("onclick")
                boxSE.removeAttribute("onclick")
                boxE.removeAttribute("onclick")
                boxNINE.removeAttribute("onclick")
                boxSE.style.backgroundColor = "lime"
                boxE.style.backgroundColor = "lime"
                boxNINE.style.backgroundColor = "lime"
            }
        }
        else if(b1 == b5 && b5 == b9 && canmarkb1 == "false" && canmarkb5 == "false" && canmarkb9 == "false"){
            marcado = true
            if(marcado == true){
                const info = `Jogador com ${b1} ganhou!`
                let bord = document.getElementById("bordaScore")
                let win = document.getElementById("win")
                win.innerText = info
                win.style.color = "white"
                boxF.removeAttribute("onclick")
                boxS.removeAttribute("onclick")
                boxT.removeAttribute("onclick")
                boxQ.removeAttribute("onclick")
                boxFI.removeAttribute("onclick")
                boxSIX.removeAttribute("onclick")
                boxSE.removeAttribute("onclick")
                boxE.removeAttribute("onclick")
                boxNINE.removeAttribute("onclick")
                boxF.style.backgroundColor = "lime"
                boxFI.style.backgroundColor = "lime"
                boxNINE.style.backgroundColor = "lime"
            }
        }
        else if(b3 == b5 && b5 == b7 && canmarkb3 == "false" && canmarkb5 == "false" && canmarkb7 == "false"){
            marcado = true
            if(marcado == true){
                const info = `Jogador com ${b3} ganhou!`
                let bord = document.getElementById("bordaScore")
                let win = document.getElementById("win")
                win.innerText = info
                win.style.color = "white"
                boxF.removeAttribute("onclick")
                boxS.removeAttribute("onclick")
                boxT.removeAttribute("onclick")
                boxQ.removeAttribute("onclick")
                boxFI.removeAttribute("onclick")
                boxSIX.removeAttribute("onclick")
                boxSE.removeAttribute("onclick")
                boxE.removeAttribute("onclick")
                boxNINE.removeAttribute("onclick")
                boxT.style.backgroundColor = "lime"
                boxFI.style.backgroundColor = "lime"
                boxSE.style.backgroundColor = "lime"
            }
        }
        else if(b3 == b6 && b6 == b9 && canmarkb3 == "false" && canmarkb6 == "false" && canmarkb9 == "false"){
            marcado = true
            if(marcado == true){
                const info = `Jogador com ${b3} ganhou!`
                let bord = document.getElementById("bordaScore")
                let win = document.getElementById("win")
                win.innerText = info
                win.style.color = "white"
                boxF.removeAttribute("onclick")
                boxS.removeAttribute("onclick")
                boxT.removeAttribute("onclick")
                boxQ.removeAttribute("onclick")
                boxFI.removeAttribute("onclick")
                boxSIX.removeAttribute("onclick")
                boxSE.removeAttribute("onclick")
                boxE.removeAttribute("onclick")
                boxNINE.removeAttribute("onclick")
                boxT.style.backgroundColor = "lime"
                boxSIX.style.backgroundColor = "lime"
                boxNINE.style.backgroundColor = "lime"
            }
        }
        else if(b4 == b5 && b5 == b6 && canmarkb4 == "false" && canmarkb5 == "false" && canmarkb6 == "false"){
            marcado = true
            if(marcado == true){
                const info = `Jogador com ${b4} ganhou!`
                let bord = document.getElementById("bordaScore")
                let win = document.getElementById("win")
                win.innerText = info
                win.style.color = "white"
                boxF.removeAttribute("onclick")
                boxS.removeAttribute("onclick")
                boxT.removeAttribute("onclick")
                boxQ.removeAttribute("onclick")
                boxFI.removeAttribute("onclick")
                boxSIX.removeAttribute("onclick")
                boxSE.removeAttribute("onclick")
                boxE.removeAttribute("onclick")
                boxNINE.removeAttribute("onclick")
                boxQ.style.backgroundColor = "lime"
                boxFI.style.backgroundColor = "lime"
                boxSIX.style.backgroundColor = "lime"
            }
        }
        else if(b2 == b5 && b5 == b8 && canmarkb2 == "false" && canmarkb5 == "false" && canmarkb8 == "false"){
            marcado = true
            if(marcado == true){
                const info = `Jogador com ${b2} ganhou!`
                let bord = document.getElementById("bordaScore")
                var win = document.getElementById("win")
                win.innerText = info
                win.style.color = "white"
                boxF.removeAttribute("onclick")
                boxS.removeAttribute("onclick")
                boxT.removeAttribute("onclick")
                boxQ.removeAttribute("onclick")
                boxFI.removeAttribute("onclick")
                boxSIX.removeAttribute("onclick")
                boxSE.removeAttribute("onclick")
                boxE.removeAttribute("onclick")
                boxNINE.removeAttribute("onclick")
                boxS.style.backgroundColor = "lime"
                boxFI.style.backgroundColor = "lime"
                boxE.style.backgroundColor = "lime"
            }
        } else {
            marcado = false
        }
        if(marcado == false && canmarkb1 == "false" && canmarkb2 == "false" && canmarkb3 == "false" && canmarkb4 == "false" && canmarkb5 == "false" && canmarkb6 == "false" && canmarkb7 == "false" && canmarkb8 == "false" && canmarkb9 == "false"){
            const info1 = "Ninguém ganhou.\n\nFim de Jogo."
            var win = document.getElementById("win")
            win.innerText = info1
            win.style.color = "white"
            win.style.textShadow = "2px 2px 2px black"
            let newGame = document.getElementById("newGame")
            let newGameCSS = document.getElementById("newGameCSS")
            newGame.innerText = "New game"
            newGameCSS.style.display = "flex"
        }
        
        if(marcado == true){
            let newGame = document.getElementById("newGame")
            let newGameCSS = document.getElementById("newGameCSS")
            newGame.innerText = "New game"
            newGameCSS.style.display = "flex"
        }
/*
                                b1 b2 b3
                                b4 b5 b6
                                b7 b8 b9
*/
}



/*Start the game */

function start(){
    document.getElementById("loading").style.display = "block";
    document.getElementById("menu").style.display = "none";
    document.getElementById("Html").style.backgroundColor = "white"

    var i = setInterval(()=>{
        clearInterval(i);
    
        document.getElementById("loading").style.display = "none";
        document.getElementById("game").style.display = "block";
        document.getElementById("Html").style.backgroundColor = "rgb(17, 11, 11)";
    },3000)
}

/*New game */
function newGame(){
    marcado = false
    isMark = true
    canMark = true

    var boxF1 = document.querySelector("#boxF")
    var boxS2 = document.querySelector("#boxS")
    var boxT3 = document.querySelector("#boxT")
    var boxQ4 = document.querySelector("#boxQ")
    var boxFI5 = document.querySelector("#boxFI")
    var boxSIX6 = document.querySelector("#boxSIX")
    var boxSE7 = document.querySelector("#boxSE")
    var boxE8 = document.querySelector("#boxE")
    var boxNINE9 = document.querySelector("#boxNINE")

    var boxF = document.getElementById("boxF")
    var boxS = document.getElementById("boxS")
    var boxT = document.getElementById("boxT")
    var boxQ = document.getElementById("boxQ")
    var boxFI = document.getElementById("boxFI")
    var boxSIX = document.getElementById("boxSIX")
    var boxSE = document.getElementById("boxSE")
    var boxE = document.getElementById("boxE")
    var boxNINE = document.getElementById("boxNINE")

    boxF.setAttribute("onclick","mark(1)")
    boxS.setAttribute("onclick","mark(2)")
    boxT.setAttribute("onclick","mark(3)")
    boxQ.setAttribute("onclick","mark(4)")
    boxFI.setAttribute("onclick","mark(5)")
    boxSIX.setAttribute("onclick","mark(6)")
    boxSE.setAttribute("onclick","mark(7)")
    boxE.setAttribute("onclick","mark(8)")
    boxNINE.setAttribute("onclick","mark(9)")

    boxF.setAttribute("canmark",true)
    boxS.setAttribute("canmark",true)
    boxT.setAttribute("canmark",true)
    boxQ.setAttribute("canmark",true)
    boxFI.setAttribute("canmark",true)
    boxSIX.setAttribute("canmark",true)
    boxSE.setAttribute("canmark",true)
    boxE.setAttribute("canmark",true)
    boxNINE.setAttribute("canmark",true)

    boxF1.style.backgroundColor = "white"
    boxS2.style.backgroundColor = "white"
    boxT3.style.backgroundColor = "white"
    boxQ4.style.backgroundColor = "white"
    boxFI5.style.backgroundColor = "white"
    boxSIX6.style.backgroundColor = "white"
    boxSE7.style.backgroundColor = "white"
    boxE8.style.backgroundColor = "white"
    boxNINE9.style.backgroundColor = "white"

    var box1 = document.getElementById("box1")
    var box2 = document.getElementById("box2")
    var box3 = document.getElementById("box3")
    var box4 = document.getElementById("box4")
    var box5 = document.getElementById("box5")
    var box6 = document.getElementById("box6")
    var box7 = document.getElementById("box7")
    var box8 = document.getElementById("box8")
    var box9 = document.getElementById("box9")
    
    box1.innerText = null
    box2.innerText = null
    box3.innerText = null
    box4.innerText = null
    box5.innerText = null
    box6.innerText = null
    box7.innerText = null
    box8.innerText = null
    box9.innerText = null

    var win = document.getElementById("win")
    win.innerText = null

    let newGameCSS = document.getElementById("newGameCSS")
    newGameCSS.style.display = "none"
}