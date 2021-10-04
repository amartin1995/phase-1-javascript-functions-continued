function saturdayFun(phrase1 = `roller-skate`){
    return `This Saturday, I want to ${phrase1}!`
}

function mondayWork(phrase2 = `go to the office`){
    return `This Monday, I will ${phrase2}.`
}

function wrapAdjective(phrase3 = `*`){
    return function(phrase4 = `special`){
        return `You are ${phrase3}${phrase4}${phrase3}!`
    }
}