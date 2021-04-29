import styled from 'styled-components'

export const Container = styled.div `
  display: flex;
  flex-direction: column;
  margin: 0 180px 0 40px;
  padding: 30px 0px;
  border-top: 1px solid lightgray;
`

export const ContactHeader = styled.div `
  font-weight: medium;
  font-size: 34px;
`

export const DetailWrapper = styled.div `
  display: flex;
  flex-direction: row;

  @media (max-width: 850px) {
    display: block;
  }
`