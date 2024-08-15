import { makeAutoObservable } from "mobx";

export default class UserState {
    constructor() {
        this._isAuth = false;
        this._user = {};
        this._theme = false;
        makeAutoObservable(this);
    }

    setIsAuth(bool) {
        this._isAuth = bool;
    }

    setUser(user) {
        this._user = user;
    }

    setTheme(bool) {
        this._theme = bool;
    }

    get isAuth() {
        return this._isAuth;
    }

    get user() {
        return this._user;
    }

    get theme() {
        return this._theme;
    }
}