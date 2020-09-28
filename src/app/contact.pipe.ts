import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'contact'
})
export class ContactPipe implements PipeTransform {

   // transform(value: any[], searchText: string, prop?: any): any {  
   //    if (!value) {  
   //      return [];  
   //    }  
   //    if (!searchText || !prop) {  
   //      return value;  
   //    }  
   //    const _searchText = searchText.toLowerCase(),  
   //      _isArr = Array.isArray(value),  
   //      _flag = _isArr && typeof value[0] === 'object' ? true : _isArr && typeof value[0] !== 'object' ? false : true;  
    
   //    return value.filter(ele => {  
   //      let val = _flag ? ele[prop] : ele;  
   //      return val.toString().toLowerCase().includes(_searchText);  
   //    });  
    
   //  }  

   transform(value: any, args?: any): any {
      if (!args) {
        return value;
      }
      return value.filter((val) => {
        let rVal = (val.Home_Phone.toLocaleLowerCase().includes(args)) || (val.Display_Name.toLocaleLowerCase().includes(args));
        return rVal;
      })
  
    }

}
