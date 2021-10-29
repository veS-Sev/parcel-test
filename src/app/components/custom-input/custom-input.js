import Utils from "../../../utils/utils";
function CustomInput({notice,inputFn,requare,equare, email, maxLength}) {
  let customInput = Utils.createCustomHTMLElement({
    tag: 'div',
    id: 'custom-input',
    cssClass:'custom-input'
  });
  let customInputField = Utils.createCustomHTMLElement({
    tag:'input',
    id:'custom-input-field',
    cssClass: 'custom-input-field'
  });

  customInput.append(customInputField);
  if(notice===true){
    let customInputNotice = Utils.createCustomHTMLElement({
      tag: 'div',
      id: 'custom-input-notice',
      cssClass: 'custom-input-notice',
      content: 'это тест'
    });
    customInput.append(customInputNotice)
  }

  if (maxLength){
    
    }
  if (inputFn){
    customInputField.oninput = inputFn;
    function customInputFieldValue(){

    }
  }
  return customInput;
}


export default CustomInput;