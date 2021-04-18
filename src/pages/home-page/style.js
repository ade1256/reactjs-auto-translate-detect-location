import styled from 'styled-components'

export const WrapHome = styled.div`
  position: relative;
  .image {
    position: relative;
    width: 300px;
    margin: 0 auto;
    margin-top: 30px;
    img {
      width: 100%;
      border-radius: 100%;
    }
  }
  .center {
    position: relative;
    text-align: center;
    font-family: 'Helvetica', sans-serif;
    width: 50%;
    margin: 0 auto;
  }

  h2 {
    color: #212529;
  }

  button {
    width: 100%;
    border: none;
    outline: none;
    padding: 8px 16px;
    font-family: 'Helvetica', sans-serif;
    font-size: 16px;
    color: #FFF;
    background: #e15870;
    border-radius: 8px;
    cursor: pointer;
  }

  @media screen and (max-width: 500px) {
    .center {
      width: 100%;
      margin: 0;
      padding: 16px;
    }
  }
`