//hvis dere leser denne teksen beklager jeg for en fantastisk teit funksjon,
//enten har jeg glemt å fikse dette eller så er jeg så drit lei problemet med at 'range 0' er truthy
export const linkHandler = (seed, width, height, blur, grayscale) => {
    let link = "https://picsum.photos";
    let twoEffects = false;
    
    console.log(`seed: ${seed}\nwidth: ${width}\nheight: ${height}\nblur: ${blur}\ngrayscale: ${grayscale} `)
    console.log(`parsed blur: ${parseInt(blur)}`);

    //add seed
    if(seed){
        console.log('1.seed is valid');
        link = link + '/seed/' + seed;
    }else{
        console.log('1.seed is not valid');
    }

    //add width
    if(width){
        console.log('2.width is valid');
        link = link + '/' + width;
    }else{
        console.log('2.width is not valid');
    }

    //add height
    if(height){
        console.log('3.height is valid');
        link = link + '/' + height;
    }else {
        console.log('3.seed is not valid');
    }

    if(blur !== 0 && grayscale !== false){
        console.log('!two effects');
        twoEffects = true;
    }

    //add blur
    if(parseInt(blur) !== 0){
        console.log('4.blur is valid');
        link = link + '?blur=' + blur;
    }else{
        console.log('4.blur is not valid');
    }

    if(grayscale){
        console.log('grayscale is valid');
        if(twoEffects === true){
            link = link + '&grayscale';
        }else{
            link = link + '?grayscale';
        }
    }else{
        console.log('gray');
    }

    return link;
}