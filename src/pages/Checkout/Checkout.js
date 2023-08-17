import OrderDetail from "../../components/OrderDetail/OrderDetail";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

export default function Checkout(props) {
  return (
    <div className="Checkout">
      <center>
        <h1>This is the {/* {props.page} */} Checkout page</h1>
        <OrderDetail />

        {/* INSERT TOGGLE FORM ABOVE CHECKOUT BUTTON TO CREATE A USER */}
        <SignUpForm />

        {/* MAY NEED TO USE .THEN METHOD INSTEAD OF TRY CATCH */}
      </center>
    </div>
  )
}