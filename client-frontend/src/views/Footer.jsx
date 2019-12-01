import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="w3ls_footer_grid">
          <div className="col-md-6 w3ls_footer_grid_left">
            <div className="w3ls_footer_grid_left1">
              <h2>Subscribe to us</h2>
              <div className="w3ls_footer_grid_left1_pos">
                <form action="#" method="post">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email..."
                    required=""
                  />
                  <input type="submit" value="Send" />
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-6 w3ls_footer_grid_right">
            <a href="index.html">
              <h2>
                One<span>Movies</span>
              </h2>
            </a>
          </div>
          <div className="clearfix"> </div>
        </div>
        <div className="col-md-5 w3ls_footer_grid1_left">
          <p>
            &copy; 2019. Tiểu luận chuyên ngành | Design by{" "}
            <a href="#">Nguyễn Triều Dương</a>
          </p>
        </div>

        <div className="clearfix"> </div>
      </div>
    </div>
  );
};

export default Footer;
