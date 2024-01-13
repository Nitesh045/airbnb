const option=[
    "Amazing",
   "Cabin",
   "House",
   "Pools",
   "View",
   "Beaches",
   "Farm",
   "Lake",
   "Tropical",
   
   ];
   
   const optionDropdown= document.getElementById('select');
   console.log(optionDropdown);
   function populateOption(){
       for(let i = 0;i<option.length;i++){
          const options= option[i];
          console.log(options)
          const optionValue= document.createElement('option');
          optionValue.value=options;
          optionValue.innerText=options;
          optionDropdown.append(optionValue)
       }
   }
   populateOption();