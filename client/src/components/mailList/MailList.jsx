import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
        <div className="mailList">
            <h1 className="mailTitle">Save time, Save money!</h1>
            <spain className="mailDesc">Sign up and we'll send the best deals to you!</spain>
            <div className="mailInputContainer">
                <input type="text" className="mailInput" placeholder="Your E-mail"/>
                <button className="subBt">SUBSCRIBE</button>
            </div>
        </div>
    </div>
  )
}

export default MailList
