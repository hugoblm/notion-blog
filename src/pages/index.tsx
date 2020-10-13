import Link from 'next/link'
import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import GitHub from '../components/svgs/github'
import sharedStyles from '../styles/shared.module.css'

export default () => (
  <>
    <Header titlePre="home" />
    <div className={sharedStyles.layout}>
      <img
        src="/jymiz_low.png"
        height="85"
        width="250"
        alt="jymiz_logo"
      />
      <h1>JYMIZ'S Blog test</h1>
      <h2>
        Lifestyle, Sport, Nutrition. Bienvenue sur le Blog JYMIZ'{' '}
      </h2>

      <Features />

      <div className="explanation">
        <p>
          A tester si il est possible de faire plusieurs catégories
        </p>

        <p>
          A tester si le referencement peut etre bon et si les redirections sont Ok
        </p>
      </div>
    </div>
  </>
)
