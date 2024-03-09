import React from 'react'
import { footerLogo } from '../../assets/images'
import { footerLinks, socialMedia } from '../../constants'
import { copyrightSign } from '../../assets/icons'

const Footer = () => {
  return (
  <footer className='max-container'>
    <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
      <div className='flex flex-col items-start'>
        {/* <a href="/">
          <img src={footerLogo} alt="logo" width={100} height={40} />
        </a> */}



        <div className='flex items-center gap-5 mt-8'>
          {socialMedia.map((icon)=>(
            <div className='flex justify-center items-center w-12 h-12 bg-white hover:bg-zinc-500 rounded-full'>
              <img src={icon.src} alt={icon.src} width={24} height={24} />
            </div>
          ))}
        </div>        
        <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'> Celebrate Every Step: From Our Hats to Your Heart. Explore our diverse collection, handcrafted with passion and precision. Join us in the journey of timeless elegance and unrivaled style.</p>
      </div>
        
      <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
        {footerLinks.map((section) => (
          <div key={section}>
            <h4 className='text-white text-2xl font-montserrat leading-normal font-medium mb-6 '>{section.title}</h4>

            <ul>
              {section.links.map((link) => (
                <li key={link.name} className='mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-zinc-500 curor-pointer'>
                  <a href="">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center gap-2 font-mono cursor-pointer'>
            <img src={copyrightSign} alt="copy right sign" width={20} height={20} className='rounded-full m-0' />
            <p>Copyright. All rights reserved</p>
        </div>
        <p className='cursor-pointer font-montserrat '>Terms & Conditions</p>
    </div>

  </footer>
  )
}

export default Footer
