import Utils from "../../../utils/utils";
import { BUTTON_TYPES } from "./constants";

function CustomButton({name, type, leftIcon, rightIcon, width, clickFn, className, loading}){
    let customButton = Utils.createCustomHTMLElement({
    tag: 'button',
    content: name,
    id:'custom-buttom',
    
    });
  customButton.setAttribute('type','button');
  customButton.classList.add('custom-button'); 

  if (loading){
    customButton.classList.add('active')
  }else{
    customButton.classList.remove('active')
  }

   if (type && type === BUTTON_TYPES.TEXT || type === BUTTON_TYPES.OUTLANED) {
    customButton.classList.add(`custom-button-${type}`);
  }
 
  if (leftIcon){
  let leftIconElement = Utils.createCustomHTMLElement({
    tag: 'span',
    content: leftIcon,
    id: 'left-icon'
  }) 
  customButton.insertAdjacentElement('afterBegin', leftIconElement);
}

  if (rightIcon) {
    let rightIconElement = Utils.createCustomHTMLElement({
      tag: 'span',
      content: rightIcon,
      id:'right-icon'
    });
    customButton.insertAdjacentElement('beforeEnd', rightIconElement)
  }

  if (width) {
    customButton.style.width =width +'px';
  }
  if (clickFn){
    customButton.addEventListener('click', clickFn);
  }
  if (className){
    customButton.classList.add(className)
  }
return customButton;
}
export default CustomButton;
   