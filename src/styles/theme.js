
const deviceSizes = {
    mobile: "px",
    tablet: "768px",
    pc: "1440px"
  };
  
  const device = {     
    mobile: `screen and (max-width: 440px)`,     
    tablet: `screen and (min-width: 441px) and (max-width: 1439px)`,     
    pc: `screen and (min-width: 1440px)`
  };
  
  export const theme = {
    device
  };
  