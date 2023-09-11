import { AbstractControl } from "@angular/forms";
import { Observable, Observer, of } from "rxjs";



export const mimeType = (control: AbstractControl): Promise<{[key: string]: any} | null> | Observable<{[key: string]: any} | null> =>{


if(control.value === "string"){
  return of(null)
}

const file = control.value;

const fileReader = new FileReader();

const fileObsrvr = Observable.create((observer: Observer<{[key: string]: any} | null>) => {
   fileReader.addEventListener('loadend',()=>{
     const arr = new Uint8Array(fileReader.result as ArrayBuffer).subarray(0,4)
     let header = "";
     let isValid = false;

     for (let i = 0 ;i<arr.length;i++){
      header = header + arr[i].toString(16);

     }
     console.log(header)

     switch(header){
      case "89504e47":
         isValid=true
        break;
    case "47494638":
         isValid=true
        break;
    case "ffd8ffe0":
    case "ffd8ffe1":
    case "ffd8ffe2":
    case "ffd8ffe3":
    case "ffd8ffe8":
        isValid=true
        break;
    default:
        isValid = false; // Or you can use the blob.type as fallback
        break;
     }

     if (isValid){
      console.log("is  valid")
      observer.next(null)
     }else{
      console.log("is not valid")
      observer.next({
        invalidMimeType: false
      })
     }

     observer.complete()


   })

   console.log(typeof file)

   fileReader.readAsArrayBuffer(file)

})
return fileObsrvr

}
