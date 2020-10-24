import React from "react";

function NewsletterSection() {
  return (
    <div className="py-5">
      <div className="container text-center">
        <div className="row">
          <div className="col-12">
            <h3>Stay informed with our newsletter</h3>
            <p>Subscribe to get news about new releases and special offers</p>
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
