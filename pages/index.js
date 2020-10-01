import authMiddleware from '../middleware/auth-middleware'
import styles from '../styles/Home.module.css'

function Home() {
  return (
    <div className={styles.container}>
      <p>André é um cara bem legal</p>
    </div>
  )
}

Home.getInitialProps = async props => {
  console.log('Feitoria, ta logado!')

  return {}
};

export default authMiddleware(Home);