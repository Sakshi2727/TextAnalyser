import React from 'react'

function Alerts(props) {
  const capital=(word)=>{
    const lower=word.toLowerCase();
    return lower.charAt(0).toUpperCase()+lower.slice(1)
  }
  return (
    
      props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>{capital(props.alert.type)}</strong>:{props.alert.msg}
  {/* <button type="button" className="close" data-bs-dismiss="alert" aria-label="Close"> */}
    {/* <span aria-hidden="true">&times;</span> */}
  {/* </button> */}
</div>
 
  )
}
{/* <strong>Holy guacamole!</strong> You should check in on some of those fields below. */}
export default Alerts
