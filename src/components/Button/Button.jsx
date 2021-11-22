import './styles.scss'
import button from "../../images/icons/button.svg"

const Button = () => {
  return (
    <div className="button">
      <img src={button} alt="button"/>
      <span>Create a product</span>
    </div>
  )
}

export default Button;
