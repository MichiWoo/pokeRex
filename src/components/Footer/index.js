import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Foot, Link, Span, Social, ButtonLink } from './styles'

const GitHUb = <FontAwesomeIcon icon={faGithub} />
const Twitter = <FontAwesomeIcon icon={faTwitter} />

export const Footer = () =>  {
  return (
    <Foot>
      <Span>Hecho con 
        <span role='img' aria-label='purple heart'> 💜</span> por 
        <Link href='https://twitter.com/MichiwooWebs' target='_blank' rel='noreferrer noopener'> @michiwoo</Link>
      </Span>
      <Link href='https://michiwoo.netlify.app/' target='_blank' rel='noreferer noopener'>michiwoo.netlify.app</Link>
      <Social>
        <ButtonLink href='https://github.com/MichiWoo/' rel='noreferer noopener' target='_blank'>{GitHUb}</ButtonLink>
        <ButtonLink href='https://twitter.com/MichiwooWebs' rel='noreferer noopener' target='_blank'>{Twitter}</ButtonLink>
      </Social>
    </Foot>
  )
}
