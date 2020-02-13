import React from 'react'

export default props => (
  <nav className="navbar navbar-expand-sm navbar-inverse bg-dark">

    <a className="navbar-brand text-white" href="#">
      <i className='fa fa-calendar-check-o text-white'></i>
      <span style={{ marginRight: 8 }}>TodoApp</span>
    </a>

    <button className="navbar-toggler text-white" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon text-white"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul style={{ display: 'flex', justifyContent: 'space-between' }} className="navbar-nav mr-auto">
        <div><a className='text-white' href='#/todos'>Tarefas</a></div>
        <div><a className='text-white' href='#/about'>Sobre</a></div>
      </ul>
    </div>
  </nav>
)

