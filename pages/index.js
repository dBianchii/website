import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home({ characters }) {

  return (
    <div>
      <h1>Hi</h1>

      {characters.map((character) => (
        <Link key={character._id}><a>{character.firstname}</a></Link>
      ))}

    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch("https://officeapi.dev/api/characters/");
  console.log(res)
  const data = await res.json();


  return {
    props: { characters: data.data },
  }
}
