import Image from 'next/image';
import React from 'react';

function Modal(props) {
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content b1">
            <div className="modal-header">
              <h5 className="modal-title  text-warning" id="exampleModalLabel">
                Login
              </h5>
              <button
                type="button"
                className="close outlineNone"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <Image
                    src="https://cdn3.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-1/253988/12-512.png"
                    width="25"
                    height="25"
                    loading="lazy"
                    alt=''
                  />
                </span>
              </button>
            </div>
            <div className="modal-body  b25 text-light">
              <form>
                <div className="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>

                <button type="submit" className="btn btn-outline-warning btn-block">
                  Log in
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
