export default class ThemeSwitcher
{
    constructor()
    {
        this.localStorageKey = "tiamoPastoorDarkMode";
        this.currentValue = this.readMode();

        const button = document.getElementById("darkModeButton");
        button.addEventListener("click", (ev) => {
            this.toggleMode();
            window.location.reload();
        });

        //document.documentElement.classList.add(this.getModeString());
        document.body.classList.add(this.getModeString());
    }

    toggleMode()
    {
        this.currentValue = !this.currentValue;
        window.localStorage.setItem(this.localStorageKey, this.currentValue);
    }

    readMode()
    {
        return window.localStorage.getItem(this.localStorageKey) == "true";
    }

    getModeString()
    {
        if(this.currentValue) { return "theme-dark"; }
        return "theme-light";
    }

}