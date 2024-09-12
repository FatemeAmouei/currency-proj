import React from 'react'

export default function Footer() {
  return (
     
    <section className="flex justify-around items-center border-y-2 border-y-tahiti-600 w-full h-40 bg-tahiti-200 font-serif font-bold fixed bottom-0 left-0">
      <div className="flex-col justify-between items-center">
        <div className="w-96 h-full text-center">
          <div className="font-sans">
             طراحی شده توسط
            <strong className="w-96 h-full text-tahiti-900 py-4 text-md ">
              <span> فاطمه عموئی </span>
            </strong>
          </div>
        </div>
        <div className="w-96 flex justify-around items-center fa-lg pt-4 mt-4 text-tahiti-900">
          <a href="facebook">
            <i className='fab fa-facebook'></i>
          </a>  
          <a href="twiter">
            <i className='fab fa-twitter'></i>
          </a>
          <a href="linkedin">
            <i className='fab fa-linkedin'></i>
          </a>
          <a href="youtube">
            <i className='fab fa-youtube'></i>
          </a>
          <a href="instagram">
            <i className='fab fa-instagram'></i>
          </a>
        </div>
      </div>

    </section>
  )
}
