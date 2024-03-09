import './styles.css'

const Button = ({label, iconURL, altText, backgroundColor, borderColor, textColor, fullWidth}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
    ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : "button-color hover:button-color-hover text-white border-button-color" }  rounded-full ${fullWidth && 'w-full'}`}
    >
      {label}
      {iconURL && <img src={iconURL} alt={altText} className='ml-2 rounded-full w-5 h-5'/> }
    </button>
  )
}

export default Button
