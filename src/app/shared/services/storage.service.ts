import { Injectable } from '@angular/core';

import { SecureStorage } from "nativescript-secure-storage";
import { User } from '../business/user.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class StorageService {

    private _KEY = 'user';
    private _secureStorage: SecureStorage;
    private _user: User;

    public loggedUser: BehaviorSubject<User|null> = new BehaviorSubject(null);

    public get user() {
        return this._user;
    }

    public set user(user: User|null) {
        this.loggedUser.next(user);
        this._user = user;
    }

    public getLoggedUser(): Observable<User> {
        return this.loggedUser.asObservable();
    }

    constructor(
    ) {
        this._secureStorage = new SecureStorage();
        console.log('create SecureStorage');
        this.restoreUser().then(
            data => {
                this.user = JSON.parse(data)
            }
        )
    }

    public saveUser(user: User) {

        return this._secureStorage.set({
            key: this._KEY,
            value: JSON.stringify(user)
        });
    }

    public restoreUser() {
        return this._secureStorage.get({
            key: this._KEY
          });
    }

    public removeUser() {
        return this._secureStorage.remove({
          key: this._KEY
        });
      }
}