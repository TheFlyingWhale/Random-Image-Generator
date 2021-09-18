import { useState } from 'react';

//Component imports
import { InputPanel } from '../components/InputPanel/inputPanel';
import { OutputPanel } from '../components/OutputPanel/outputPanel';

//Style imports
import { GlobalStyle, AppContainer } from './AppStyles';

import { linkHandler } from '../functions/linkHandler';


function App() {
  const [seed, setSeed] = useState("");
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(300);
  const [blur, setBlur] = useState(0);
  const [grayScale, setGrayScale] = useState(false);

  const link = linkHandler(seed, width, height, parseInt(blur), grayScale);

  console.log(link);

  const imageUrl = link;

  /*
  const effects = (b, g) => {
    let result = "";
    const blurEffect = b;
    const grayscaleEffect = g;

    console.log(`\nBlur: ${b}`);
    console.log(`Grayscale: ${g}`);

    if(blurEffect > 0 || grayscaleEffect === true){
      if(blurEffect === 0 && grayscaleEffect === true){
        result = "?grayscale";
      }
      if(blurEffect > 0 && grayscaleEffect === false){
        result = `?blur=${blurEffect}`;
      }
      if(blurEffect > 0 && grayscaleEffect === true){
        result = `?grayscale&blur=${blurEffect}`;
      }
    }

    /*
    if(blur !== 0 && grayScale !== false){
      console.log('first step triggered');
      if(blur === 0 && grayScale === true){
        result = "?grayscale";
      }else if(0 < blur && grayScale === false){
        result = `?blur=${blur}`;
      }else{
        result = `?grayscale&blur=${blur}`;
      }
    }

    console.log(`Result: ${result}`);
    return result;
  }*/

  //const imageUrl = `https://picsum.photos/seed/${seed}/${width}/${height}${grayScale ? '?grayscale' : ''}`;

  return (
      <>
        <GlobalStyle/>
        <AppContainer>
          <InputPanel 
            //States
            seed={seed}
            width={width}
            height={height}
            blur={blur}
            grayScale={grayScale}

            //Setters
            setSeed={setSeed}
            setWidth={setWidth}
            setHeight={setHeight}
            setBlur={setBlur}
            setGrayScale={setGrayScale}
          />
          <OutputPanel 
            imageUrl={imageUrl}
          />
      </AppContainer>
      </>
  );
}

export default App;
