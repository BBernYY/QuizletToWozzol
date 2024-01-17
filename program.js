function interperet(str){
    const reg1 = /(^|\n)\d+\. /g
    const reg2 = /\n(\D.*)/g
    const reg3 = /: /g
    const reg4 = /-\n/g
    str = str.replace(reg4, '')
    str = str.replace(reg3, '=')
    str = str.replace(reg2, '$1')
    str = str.replace(reg1, '$1')
    return str
}
function wrap(){
    var i = document.getElementById('in')
    i.value = interperet(i.value)

    
}