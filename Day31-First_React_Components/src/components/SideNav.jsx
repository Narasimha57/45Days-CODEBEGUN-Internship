import React from 'react'

const SideNav = () => {
  return (
    <nav style={{ background: '#f5f5f5', padding: '10px', width: '200px', minHeight: '100v' }}>
      <ul style={{ listStyle: 'none', padding: 3, }}>
        <li style={{ marginBottom: '10px' }}><a href="#" style={{ textDecoration: 'none' }}>Home</a></li>
        <li style={{ marginBottom: '10px' }}><a href="#" style={{ textDecoration: 'none' }}>About</a></li>
        <li style={{ marginBottom: '10px' }}><a href="#" style={{ textDecoration: 'none' }}>Profile</a></li>
        <li style={{ marginBottom: '10px' }}><a href="#" style={{ textDecoration: 'none' }}>Dashboard</a></li>
        <li><a href="#" style={{ textDecoration: 'none' }}>Logout</a></li>
      </ul>
    </nav>
  )
}

export default SideNav