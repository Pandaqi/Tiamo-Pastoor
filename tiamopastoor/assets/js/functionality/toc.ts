export default class TOC
{
    constructor()
    {
        // Insert table of contents before first header
        const toc = document.getElementById("toc");
        if(!toc) { return; }

        const tocContent = document.getElementById("toc-content");
        if(!tocContent) { return; }
        
        toc.remove();

        const firstHeader = document.getElementsByTagName("h2")[0];
        let insertionPoint = firstHeader;
        if(!insertionPoint) { return; }
        insertionPoint.parentNode.insertBefore(toc, insertionPoint);

        const btn = document.getElementById("toc-button");
        btn.addEventListener("click", (ev) => {
            if(toc.dataset.status == "hidden") { 
                toc.dataset.status = "visible";
                tocContent.style.display = "block";
            } else {
                toc.dataset.status = "hidden";
                tocContent.style.display = "none";
            }
        });
    }
}