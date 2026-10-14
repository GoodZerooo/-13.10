function setCookie(name, value, days = 7) {
    if (typeof document === 'undefined') {
        global.document = { cookie: '' };
    }
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = `${name}=${value};${expires};path=/`;
    console.log(`[Cookies] Записано: ${document.cookie}`);
}

setCookie("user_session", "test_cookie_value");

module.exports = { setCookie };