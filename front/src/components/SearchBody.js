import React from "react";

export default function SearchBody() {
  return (
    <div class="container bootstrap snippets bootdey">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div class="well search-result">
            <div class="input-group">
              <span class="input-group-btn"></span>
            </div>
          </div>
          <div class="well search-result">
            <div class="row">
              <a href="#">
                <div class="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <img
                    class="img-responsive"
                    src="https://via.placeholder.com/400x200/7B68EE/000000"
                    alt=""
                  />
                </div>
                <div class="col-xs-6 col-sm-9 col-md-9 col-lg-10 title">
                  <h3>Result name one</h3>
                  <p>
                    Ut quis libero id orci semper porta ac vel ante. In nec
                    laoreet sapien. Nunc hendrerit ligula at massa sodales,
                    ullamcorper rutrum orci semper.
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div class="well search-result">
            <div class="row">
              <a href="#">
                <div class="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <img
                    class="img-responsive"
                    src="https://via.placeholder.com/400x200/FA8072/000000"
                    alt=""
                  />
                </div>
                <div class="col-xs-6 col-sm-9 col-md-9 col-lg-10 title">
                  <h3>Blueberry Sport</h3>
                  <p>
                    Nulla rhoncus lacus tortor, vel tincidunt dolor eleifend et.
                    Ut consequat elit quam, iaculis volutpat ipsum fermentum
                    pulvinar. Pellentesque nec sem vel arcu ornare faucibus.
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div class="well search-result">
            <div class="row">
              <a href="#">
                <div class="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                  <img
                    class="img-responsive"
                    src="https://via.placeholder.com/400x200/48D1CC/000000"
                    alt=""
                  />
                </div>
                <div class="col-xs-6 col-sm-9 col-md-9 col-lg-10 title">
                  <h3>Power Thirst</h3>
                  <p>
                    Cras nisi dolor, tristique id vehicula vitae, mollis at
                    eros. Ut euismod sem eu tellus vestibulum, in facilisis est
                    feugiat. Mauris sed leo sed erat vestibulum suscipit.
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div class="row">
            <button type="button" class="btn btn-info  btn-block">
              <i class="glyphicon glyphicon-refresh"></i>Load more...
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}