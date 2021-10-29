import CustomButton from './components/custom-button/custom-button';
import CustomInput from './components/custom-input/custom-input';

function app(){
    let loading = false;
    let pointOfInsert = document.querySelector('#App');
    let customButton, 
        customInput;


  customInput = CustomInput({
    notice: true,
    maxLength: 200,
    inputFn:getValidation,
  });

  pointOfInsert.prepend(customInput);
  console.dir(customInput.querySelector('.custom-input-field', 1));
  function getValidation(){
    console.log('ура')
    console.log(customInputField, 2);
  }

 // 
   function clickButton() { 
   loading = !loading;
   render();
}

 function render(){
   if (customButton) {
     const a = pointOfInsert.querySelector('#custom-buttom');
     a.remove();
   }
   customButton = CustomButton({
    type: 'primary',
    name: 'Done',
    width: 100,
    leftIcon: '#',
    rightIcon: '%',
    clickFn: clickButton,
    className: 'app-button',
    loading
});
   pointOfInsert.append(customButton);
} 
  render();

// 


}
export default app;
