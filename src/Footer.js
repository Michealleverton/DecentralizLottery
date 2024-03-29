import React from 'react'

const Footer = () => {
  return (
    <section id="footer">
      <footer className="py-1 bg_blue">
        <div className="container px-5">
          <div className='singlecol social-media-icons-white d-flex justify-content-evenly pt-2 pb-4'>
            <a href='https://facebook.com'aria-label="Social Media Link">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href='https://instagram.com'aria-label="Social Media Link">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href='https://twitter.com'aria-label="Social Media Link">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href='https://tiktok.com'aria-label="Social Media Link">
              <i className="fa-brands fa-tiktok"></i>
            </a>
            <a href='https://youtube.com' aria-label="Social Media Link">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>

          <p className="textBodyLineHeight textBodySpacing text-center text-white">
            Copyright &copy; Decentraliz Lottery 2022 - All Rights Reserved.<br/><a href='#/'>Terms & Conditions</a>
          </p>

        </div>
      </footer>
    </section>
  )
}

export default Footer