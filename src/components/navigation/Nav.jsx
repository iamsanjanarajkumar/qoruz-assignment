import React from 'react'

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-md bg-light navbar-secondary">
            <div className="container">
                <a className="navbar-brand text-dark mb-0 h1">
                    Qoruz
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="menu">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown navbar-space">
                            <a className="nav-link dropdown-toggle text-secondary">
                                Solutions
                            </a>
                        </li>
                        <li className="nav-item dropdown navbar-space">
                            <a className="nav-link dropdown-toggle text-secondary">
                                Resources
                            </a>
                        </li>
                        <li className="nav-item dropdown navbar-space">
                            <a className="nav-link dropdown-toggle text-secondary">
                                Features
                            </a>
                        </li>
                    </ul>
                    <ul className='navbar-nav ms-auto'>
                        <li className="navbar-space dropdown">
                            <a className="nav-link text-secondary text-dark fw-bold">
                                Log in <i className="bi bi-arrow-up-right"></i>
                            </a>
                        </li>
                        <li className="navbar-space bg-danger rounded shadow dropdown">
                            <a className="nav-link text-secondary text-white">
                                Get Started Free<i className="bi bi-arrow-up-right"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
  )
}

export default Nav