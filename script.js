function change(){
    let atributo = document.getElementById("hb-box-id").getAttribute("class")
    let addatt = document.getElementById("hb-box-id")
    let atributoIcon = document.getElementById("hb-box-id").getAttribute("class")
    let addattIcon = document.getElementById("hb-icon-id")
    let addattClIcon = document.getElementById("cl-icon-id")
    atributo === "hb-box"? addatt.setAttribute("class","hb-box-a"):addatt.setAttribute("class","hb-box")
    atributo === "hb-box"? addattIcon.setAttribute("class","hb-icon-d"):addattIcon.setAttribute("class","hb-icon")
    atributo === "hb-box"? addattClIcon.setAttribute("class","cl-icon-a"):addattClIcon.setAttribute("class","cl-icon")
}