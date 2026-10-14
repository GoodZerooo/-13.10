function mockRegister(username, email) {
    if (typeof localStorage === 'undefined') {
        global.localStorage = {
            _data: {},
            setItem(key, value) { this._data[key] = String(value); },
            getItem(key) { return this._data[key] || null; }
        };
    }

    const userData = {
        username: username,
        email: email,
        registeredAt: new Date().toISOString()
    };

    localStorage.setItem('regData', JSON.stringify(userData));
    console.log('[LocalStorage] Успешно зарегистрирован пользователь:', userData);
    return userData;
}

mockRegister("Илья", "ilya@mail.ru");

module.exports = { mockRegister };