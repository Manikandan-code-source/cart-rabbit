import React from 'react'
import "./footer.css"
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function footer() {
  return (
    <footer>
        <div className='footer-content'>
      <h3>Salaza Rooms</h3>
      <ul className='social'>
        <li><GoogleIcon style={{fontSize:16}}/></li>
        <li><FacebookIcon style={{fontSize:16}}/></li>
        <li><TwitterIcon style={{fontSize:16}}/></li>
        <li><LinkedInIcon style={{fontSize:16}}/></li>
      </ul>
      <div className='footer-bottom'>
        <p>Copyright &copy;2023 Salaza Rooms. Maintained by worldclass rooms Bamglore</p>
      </div>
    </div>
    </footer>
  )
}
