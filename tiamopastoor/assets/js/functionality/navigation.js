
/* the three dynamic buttons: go to top, go to bottom, go to random */
export default class Navigation
{
    constructor()
    {
        this.bottomBtns = document.getElementsByClassName('gotoBottomButton');
        this.footer = document.getElementsByTagName("footer")[0];
        this.setupBottomButton();

        this.topBtns = document.getElementsByClassName('gotoTopButton');
        this.header = document.getElementsByTagName("header")[0];
        this.setupTopButton();

        this.randBtn = document.getElementById('randomProjectButton');
        this.setupRandomButton();

        this.setupSmoothScroll();
    }
    
    setupBottomButton()
    {
        if(!this.bottomBtns || !this.footer) { return; }

        for(const btn of this.bottomBtns)
        {
            btn.addEventListener('click', (ev) => {
                this.footer.scrollIntoView({'behavior': 'smooth'}); 
                ev.preventDefault();
                return false;
            })
        }
    }
    
    setupTopButton()
    {
        if(!this.topBtns || !this.header) { return; }

        for(const btn of this.topBtns)
        {
            btn.addEventListener('click', (ev) => {
                this.header.scrollIntoView({'behavior': 'smooth'}); 
                ev.preventDefault();
                return false;
            })
        }
    }

    setupRandomButton()
    {
        if(!this.randBtn) { return; }
        this.randBtn.addEventListener('click', (ev) => {
            const metadataNode = document.getElementById("hidden-hugo-metadata");
            const projectList = metadataNode.dataset.pages.split(",");

            const randIdx = Math.floor(Math.random() * projectList.length);
            const randURL = projectList[randIdx];
            window.location.href = randURL;
            ev.preventDefault();
            return false;
        })
    }

    /* Smooth scroll for all links */
    setupSmoothScroll()
    {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (ev) => {
                document.querySelector(anchor.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
                ev.preventDefault();
                return false;
            });
        });
    }
}

