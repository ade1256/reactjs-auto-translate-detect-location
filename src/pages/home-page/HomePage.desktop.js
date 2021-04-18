import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { translator, getLinkByCountry } from '../../utils/translate'
import { WrapHome } from './style'

const HomePageDesktop = props => {
  const [visitorInfo, setVisitorInfo] = useState({
    country: 'US'
  })
  const [state, setState] = useState({
    words: ['Simply sign up and confirm the email on my link and then give me the proof', 'Register'],
    link: "https://google.com"
  })
  useEffect(() => {
    const fetch = async () => {
      await axios.get('https://ipapi.co/json/').then(res => {
        setVisitorInfo(res.data)
      })
    }
    fetch()
  }, [])

  useEffect(() => {
    const fetch = async () => {
     setState({
       ...state,
       words: translator(visitorInfo.country, state.words)
     })
    }
    fetch()
  }, [visitorInfo])

  const goToUrl = async url => {
    window.location = url
  }

  return (
    <WrapHome>
      <div className="center">
        <div className="image">
          <img src={`https://img.freepik.com/free-photo/beautiful-girl-stands-near-walll-with-leaves_8353-5378.jpg?size=626&ext=jpg`} alt="your-babe" />
        </div>
        <h2>{state.words[0]}💗💦</h2>
        <button onClick={() => goToUrl(getLinkByCountry(visitorInfo.country, state.link))}>{state.words[1]}</button>
      </div>
    </WrapHome>
  )
}

export default HomePageDesktop