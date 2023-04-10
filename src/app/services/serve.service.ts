import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServeService {

  onClicked(title: string){
    alert(title+" Successful")
    
}

  cred = new Subject <any>();

}

