const Done = () => {
  setTimeout(() => {
    window.open("/receipt", "__blank");
  }, 4000);

  return (
    <div className="done">
      <div className="container">
        <div className="row">
          <div className="col">
            <button style={{ display: "none" }} id="toggleButton"></button>
            <div className="confirmed">
              <p>Your order has been confirmed.</p>
              <p>Your Order will be delivered soon.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Done;
