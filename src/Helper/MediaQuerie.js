/**
 * 480 - Mobile devices
 * 768 - Ipad and tablets 
 * 992 - Small Screens Laptops 
 * 1200 - Desktops, large screens
 */
const breakpoints = [0, 480, 768, 992, 1200]

const mq = breakpoints.map(
  bp => `@media (max-width: ${bp}px)`
)

export default mq;