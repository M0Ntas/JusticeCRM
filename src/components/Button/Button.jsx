import './styles.scss'
import button from "../../images/icons/button.svg"

const Button = () => {
  return (
    <button className="button">
        <img src={button} alt="button"/>
        <span>Create a product</span>
    </button>
  )
}

export default Button;
