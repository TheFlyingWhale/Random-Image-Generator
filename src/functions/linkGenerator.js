/**
 * Takes input and returns an url.
 * 
 * Checks the values of the different inputs and generates
 * a link that refer to a stylized image in the picsum database.
 * @param {string} seed 
 * @param {int} width 
 * @param {int} height 
 * @param {int} blur 
 * @param {boolean} grayscale 
 * @returns {string} url
 */
export const linkGenerator = (seed, width, height, blur, grayscale) => {
    let link = "https://picsum.photos";
    let twoEffects = false;

    //add seed
    if(seed){
        link = link + '/seed/' + seed;
    }

    //add width
    if(width){
        link = link + '/' + width;
    }

    //add height
    if(height){
        link = link + '/' + height;
    }

    //checks if there is more than one effect
    if(blur !== 0 && grayscale !== false){
        twoEffects = true;
    }
    
    //add blur
    if(blur !== 0){
        link = link + '?blur=' + blur;
    }

    //add grayscale or combine with blur
    if(grayscale){
        if(twoEffects === true){
            link = link + '&grayscale';
        }else{
            link = link + '?grayscale';
        }
    }

    return link;
}