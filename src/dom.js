/**
 * DOM.JS
 * 
 */


// begin namespace
const dom = {


    /*************************************************************************** */
    /*                              SHORTCUTS                                    *
    /*************************************************************************** */

    /**
     * Shortcut for document.querySelector
     */
    q : (selectors)=>{ return document.querySelector(selectors); },


    /*************************************************************************** */
    /*                          ADVANCED UTILITIES                               *
    /*************************************************************************** */

    /**
     * Appends the given tree to the given parent element.
     */
    add : (tree, parent)=>{
        /*
        "row" : {},   ">" : [
            {"td" : {}, "%": `${entry.name}`},
            {"td" : {}, "%": `${entry.genre}`},
            {"td" : {}, "%": `${entry.rating}`}]
        */

        let elemType  = ""
        let innerText = ""
        let children  = []
        let attribs   = {}

        let elemTypesFound = 0

        for (const [key, value] of Object.entries(tree)) {            
            switch (key)
            {
                case ">":
                    children = value;
                    break;
                case "%":
                    innerText = value;
                    break;
                default:
                    elemTypesFound += 1;
                    elemType = key;
                    attribs  = value;                    
            }
        }

        if (elemTypesFound != 1)
        {
            //TODO: improve feedback
            console.error("Invalid tree: each entry must have exactly 1 element type name.")
        }

        // create element, setup inner text, setup attributes
        let e       = document.createElement(elemType);
        e.innerText = innerText;
        for (const [key, value] of Object.entries(attribs)){
            e.setAttribute(key, value);
        }
        
        parent.appendChild(e);

        // proceed with child tree
        for (child of children)
        {
            dom.add(child, e);
        }
    }


}; //end namespace
