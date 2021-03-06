import { useState } from 'react';

//Component imports
import { InputPanel } from '../InputPanel/inputPanel';
import { OutputPanel } from '../OutputPanel/outputPanel';

//Style imports
import { GlobalStyle, AppContainer } from './AppStyles';
import { GlobalTextStyles } from '../../styles/text';

//Function imports
import { linkGenerator } from '../../functions/linkGenerator';
import { generateRandomSeed } from '../../functions/generateRandomSeed';


function App() {
  const [seed, setSeed] = useState(generateRandomSeed());
  const [width, setWidth] = useState(1000);
  const [height, setHeight] = useState(600);
  const [blur, setBlur] = useState(0);
  const [grayScale, setGrayScale] = useState(false);

  const imageUrl = linkGenerator(seed, width, height, parseInt(blur), grayScale);

  return (
      <>
        <GlobalStyle/>
        <GlobalTextStyles/>
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
