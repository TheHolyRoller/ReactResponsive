import { useMediaQuery } from 'react-responsive';
import './App.css'; 

 
//  The React Hook imports where making everything disappear 


// Import the pages here 
import BigScreen from './Components/BigScreen'; 
import Mobile from './Components/Mobile'; 



// These are making everything disappear for some reason 
// import Desktop from './Components/Desktop'; 
// import Laptop from './Components/Laptop'; 


function App() {

  // const isMobileDevice = useMediaQuery({
  //   query: "(min-device-width: 480px)",
  // });

  // const isTabletDevice = useMediaQuery({
  //   query: "(min-device-width: 768px)",
  // });

  // const isLaptop = useMediaQuery({
  //   query: "(min-device-width: 1024px)",
  // });

  // const isDesktop = useMediaQuery({
  //   query: "(min-device-width: 1200px)",
  // });

  const isBigScreen = useMediaQuery({
    query: "(min-device-width: 1201px )",
  });

// Why is this not working

  return (
    <div className="App">
      {/* <h1>React Responsive - a guide</h1>
      <> */}
      {/* {isMobileDevice && <Mobile />} */}
  {/* {isTabletDevice && <>
  <TabletMobile /> */}
  {/* {isDesktop && <Desktop />} */}
  {/* {isLaptop && <Laptop />} */}
  {isBigScreen && <BigScreen />}
{/* </> */}
  Hello

    </div>

  );
}

export default App
