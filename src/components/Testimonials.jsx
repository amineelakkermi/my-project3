import { feedback } from "../constants";
import styles from "../style";
import  FeedBack from "./FeedBack";
import Fade from 'react-reveal/Fade';



/*/ const Testimonials = () => {
  return(
    <section id="clients" className={`flex flex-col ${styles.flexCenter}   ${styles.paddingY} `}>
    <div className={` flex md:flex-row  flex-col  ${styles.flexCenter}  sm:mb-16 mb-6`}>
    <h2 className={`${styles.heading2}`}>What People Are <br className="sm:block hidden" /> Saying About Us</h2>
    <div className={`md:mt-0 mt-6`}>
    <p className={`${styles.paragraph} w-full`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
    </div>
     
    </div>
    
    <div className={`flex flex-wrap md:flex-row flex-col  w-full `}>
     {
      feedback.map((item , index) => (
        <FeedBack key={item.id} {...item} index={index}  />
      ))
     }
    </div>
    </section>
  )
}/*/


 const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
     <Fade left>
     <h2 className={styles.heading2}>
        What People are <br className="sm:block hidden" /> saying about us
      </h2>
     </Fade>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap md:justify-start justify-center   w-full feedback-container relative z-[1]">
      {feedback.map((card) => <FeedBack key={card.id} {...card} />)}
    </div>
  </section>
);


export default Testimonials;