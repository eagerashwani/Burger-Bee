import React from 'react'
import { AiFillTwitterCircle, AiFillGithub, AiFillYoutube} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
        <div>
            <h2>MBA Burger Wala</h2>
            <p>Best taste in the city</p> <br />
            <em>We give attention to positive feedback</em>
            <strong>All rights reserved @mbaburgerwala</strong>
        </div>

        <aside>
            <h4>Follow US</h4>
            <a href="https://twitter.com/eagerashwani">
                <AiFillTwitterCircle/>
            </a>
            <a href="https://github.com/eagerashwani">
                <AiFillGithub />
            </a>
            <a href="https://youtube.com/@eagerashwani">
                <AiFillYoutube/>
            </a>
        </aside>
    </footer>
  )
}

export default Footer