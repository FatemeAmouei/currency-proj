import React from 'react'

export default function Footer() {
  return (
     
    <section className="flex justify-around items-center border-y-2 border-y-tahiti-600 w-full h-40 bg-tahiti-200 font-serif font-bold fixed bottom-0 left-0">
      <div className="flex-col justify-between items-center">
        <div className="w-96 h-full text-center">
          <div className="font-sans">
             طراحی شده توسط
            <strong className="w-96 h-full text-tahiti-900 py-4 text-md ">
              <a href="https://github.com/FatemeAmouei"> فاطمه عموئی </a>
            </strong>
          </div>
        </div>
        <div className="w-96 flex justify-around items-center fa-lg pt-4 mt-4 text-tahiti-900">
          <a href="https://t.me/Fatemeamouie/">
            <i className='fab fa-telegram'></i>
          </a>  
          <a href="https://github.com/FatemeAmouei">
            <i className='fab fa-github'></i>
          </a>
          <a href="https://www.linkedin.com/in/fateme-amouie-aa1029324/?trk=public-profile-join-page">
            <i className='fab fa-linkedin'></i>
          </a>
          <a href="https://gitlab.com/FatemeAmouei">
            <i className='fab fa-gitlab'></i>
          </a>
          <a href="https://www.instagram.com/fatemeamouie/">
            <i className='fab fa-instagram'></i>
          </a>
        </div>
      </div>

    </section>
  )
}
