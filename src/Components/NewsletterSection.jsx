import React from "react";
import "./newsletter.scss";

function NewsletterSection() {
  return (
    <div className="newsletter container py-3 py-md-5 text-center">
      <div className="row">
        <div className="col-12">
          <h3>Stay informed with our newsletter</h3>
          <small>
            Subscribe to get news about new releases and special offers
          </small>
        </div>
        <div className="col-12">
          <div className="shadow d-inline-block mt-4">
            <form action="" method="post" encType="multipart/form-data">
              <input type="email" name="email" placeholder="Your E-mail" />
              <input type="submit" name="submit" value="Subscribe" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsletterSection;
