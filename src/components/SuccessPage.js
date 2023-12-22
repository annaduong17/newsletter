export default function SuccessPage({ email }) {
  return(
    <div>
      <h1>Thanks for subscribing!</h1>
      <p>A confirmation email has been sent to {email}. Please open it and click the button inside to confirm yiour subscription.</p>
    </div>
  )
}