export default class FontLoader
{
    constructor()
    {
        this.href = "https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=Truculenta:wght@700&display=swap";
    }

    load()
    {
        const fonts = document.createElement('link');
        fonts.rel = 'stylesheet';
        fonts.href = this.href;
        const godefer = document.getElementsByTagName('link')[0];
        godefer.parentNode.insertBefore(fonts, godefer);
    }
}