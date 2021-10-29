class Utils{
  static createCustomHTMLElement({tag,content,id,cssClass}){
     const htmlElement = document.createElement(tag);
      htmlElement.textContent=content;
         if(id){
            htmlElement.setAttribute('id', id)
           }
    if (cssClass) {
      htmlElement.classList.add(`${cssClass}`)
    }
    return htmlElement;
  } 

}
export default Utils;