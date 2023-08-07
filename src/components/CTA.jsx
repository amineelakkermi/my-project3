import React from 'react'
import styles from '../style'
import Button from './Button'



const CTA = () => {
  return (
    <section className={`flex    items-center bg-black-gradient-2 ${styles.padding} md:flex-row flex-col  rounded-[20px] md:mt-24 mt-12   `}>
      <div className={`flex flex-1  flex-col`}>
      
      <h2 className={`${styles.heading2}`}>
      Let’s try our service now!
      </h2>

   

      <p className={`${styles.paragraph} mt-5  max-w-[470px]`}>Everything you need to accept card payme nts and grow your business anywhere on the planet.</p>
      </div>
   
    <div>
      <Button style={"mt-10"} />
    </div>
    </section>
  )
}

export default CTA
