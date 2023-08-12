import FontLoader from "./fonts"
import Navigation from "./Navigation"
import TOC from "./toc"
import ThemeSwitcher from "./themeSwitcher";
import Images from "./images";

const fonts = new FontLoader();
fonts.load();

const navigation = new Navigation();
const toc = new TOC();
const themeSwitcher = new ThemeSwitcher();
const images = new Images();

window.TIAMO_TOOLS = {
    fonts: fonts,
    navigation: navigation,
    toc: toc,
    themeSwitcher: themeSwitcher,
    images: images
}