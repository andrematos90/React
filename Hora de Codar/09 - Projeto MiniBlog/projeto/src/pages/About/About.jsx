//css
import styles from './../About/About.module.css'

//router
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className={styles.about}>
      <h2>Sobre o <span>MiniBlog</span></h2>
      <p>Este projeto de estudo usa React no front-end e firebase do backend</p>

      <Link to='posts/create' className="btn">Criar Post</Link>
    </div>
  )
}

export default About