import { Injectable } from '@angular/core';
import { getDocs } from 'firebase/firestore/lite';
import {
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/compat/database';

import { getDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class CheckListCadiService {}
