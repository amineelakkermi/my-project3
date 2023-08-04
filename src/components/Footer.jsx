import { footerLinks } from "../constants"
import { logo } from "../assets"
import { socialMedia } from "../constants"
import styles from "../style"


const Footer = () => {
  return (
    <section className={`flex md:flex-row flex-col   my-16 `}>
     <div className="flex-[1] flex flex-col justify-start mr-10">
        <img
          src={logo}
          alt="hoobank"
          className="w-[266px] h-[72.14px] object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>
   

    <div className={`flex-1 flex flex-wrap flex-row w-full  md:my-0 my-12  justify-between`}>
      {
        footerLinks.map((footerLink) => (
          <div className={`flex flex-col mr-12 md:mb-0 mb-8 `}>
          <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
          {footerLink.title}
          </h4>
          <ul>
            {
              footerLink.links.map((item , index) => (
                <li
                key={item.name}
                className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                  index !== footerLink.links.length - 1 ? "my-4" : "my-0"
                }`}
              >
                {item.name}
              </li>
               
              ))
            }
          </ul>
          </div> 
        ))
      }
    </div>

    </section>
  )
}

export default Footer
