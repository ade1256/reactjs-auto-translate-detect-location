const kamus = [
  {
    countryCode: 'AF', // afganistan
    word: ['په ساده ډول لاسلیک وکړئ او زما په لینک باندې بریښنالیک تایید کړئ او بیا ماته ثبوت راکړئ', 'ثبت کړئ'],
    link: "https://google.com"
  },
  {
    countryCode: 'AL', // albania
    word: ['Thjesht regjistrohuni dhe konfirmoni emailin në lidhjen time dhe pastaj më jepni provën', 'Regjistrohuni'],
    link: "https://google.com"
  },
  {
    countryCode: 'ID', // indonesia
    word: ['Cukup daftar dan konfirmasi email di tautan saya dan kemudian beri saya buktinya', 'Daftar'],
    link: "https://google.com"
  },
  {
    countryCode: 'US', // amerika serikat
    word: ['Simply sign up and confirm the email on my link and then give me the proof', 'Register'],
    link: "https://google.com"
  }
]

export const getLinkByCountry = (country, currentLink) => {
  let link = currentLink
  kamus.map(item => {
    if(item.countryCode === country) {
      link = item.link
    }
    return''
  })

  return link
}

export const translator = (country, currentWords) => {
  let words = currentWords
  kamus.map(item => {
    if(item.countryCode === country) {
      words = item.word
    }
    return''
  })

  return words
}