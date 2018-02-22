import styled from 'styled-components'

export const CategoriesPage = styled.div`
  padding-top: 15px;
  padding-bottom: 30px;
`

export const PageContent = styled.div`
  padding-top: 30px;
  padding-bottom: 60px;
`

export const PageContentInner = styled.div`
  padding-top: 20px;
  padding-bottom: 30px;
`

export const Card = styled.div`
  &+& {
    margin-top: 30px;
  }
`

export const FormContent = styled.div`
  padding: 70px 0 160px;

  h1 {
    text-align: center;
    margin-bottom: 30px;
  }
`

export const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 1350px) {
    width: 1290px;
    max-width: 100%;
  }
`
