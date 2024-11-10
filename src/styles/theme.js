
const deviceSizes = {
    mobile: "390px",
    tablet: "768px",
    pc: "1920px"
  };
  
  const device = {
    mobile: `screen and (max-width: ${deviceSizes.mobile})`,
    tablet: `screen and (min-width: ${deviceSizes.mobile})`,
    pc: `screen and (min-width: ${deviceSizes.pc})`,
  };
  
  export const theme = {
    device
  };
  