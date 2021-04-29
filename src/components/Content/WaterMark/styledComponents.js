import styled from 'styled-components'

export const Container = styled.div `
  position: absolute;
  right: 0;
  display: flex;
  height: fit-content;
  flex-direction: row;
  align-items: center;
  @media (max-width: 1024px) {
    display: none;
  }
`

export const Circle = styled.div `
  background-color: red;
  width: 30px;
  height: 30px;
  border-radius: 25px;
  margin-right: 10px;
`

export const Mark = styled.div `
  padding: 30px 40px 90px 15px;
  background-color: #e8e8e8;
`

export const WaterMarkWrapper = styled.div `
  display: flex;
  flex-direction: row;
`
export const LabelWrapper = styled.div `
  display: flex;
  flex-direction: column;
`
export const Label = styled.div `
  font-size: 80px;
`
export const Banner = styled.div `
  width: 15px;
  margin-left: 20px;
  border-radius: 15px;
  background-color: red;
`