import React from 'react'

const Button = ({style}) => {
  return (
<button className={`py-4 px-6 bg-blue-gradient font-medium text-primary outline-none  text-[18px] rounded-[10px] font-poppins ${style}`}>
 Get Started
</button>
  )
}

export default Button;
