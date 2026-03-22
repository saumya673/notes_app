import "./Button.css"

interface Button{
    title: string
}


const Button = ({title}: Button) => {
  return (
    <div>
        <button className="mybutton">
            {title}
        </button>
    </div>
  )
}

export default Button