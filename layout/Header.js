import styled from 'styled-components'
import theme from './theme'

export const HeaderPageOne = styled.div`
  background-color: white;
`

export const Header = styled.header`
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;

  @media (max-width: 991px) {
    background-color: ${theme.navbarInverse};
    padding-top: 0;
    padding-bottom: 0;
    transition: background-color 0.4s ease;
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

export const Brand = styled.div`
  flex-grow: 2;
  a {
    display: inline-flex;
    &:hover {
      opacity: 0.7
    }
  }
  img {
    max-width: 100%;
    max-height: 24px
  }
`

export const ColSearch = styled.div`
  @media (max-width: 991px) {
    display: none;
  }
`


export const OnlyMobile = `
  display: none !important;

  @media (max-width: 991px) {
    display: flex !important;
  }
`

export const OnlyDesktop = `
  display: none !important;

  @media (min-width: 991px) {
    display: flex !important;
  }
`

export const MenuItem = styled.div`
  display: flex;
  align-items: stretch;
  margin-top: 4px;
  margin-bottom: 4px;


  ${props => props.onlyMobile ? OnlyMobile : ''}
  ${props => props.onlyDesktop ? OnlyDesktop : ''}
`


export const MenuRight = `
  justify-content: flex-end;

  ${MenuItem}+${MenuItem} {
    margin-left: 4px;
  }
`

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  display: flex;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;

  ${props => props.right ? MenuRight : ''}
`

export const MenuLink = styled.a`
  display: flex;
  align-items: center;
  color: ${theme.colorPrimary} !important;
  background-color: white;
  border-radius: 3px;
  border-width: 0;
  padding: 0 10px;
  cursor: pointer;

  &:focus,
  &:hover {
    background-color: ${theme.buttonDefault} !important;
    color: green;
  }
  &:active {
    background-color: ${theme.buttonDefaultHover} !important;
  }
  i {
    font-size: 32px;
    vertical-align: middle;
  }
  /* max-md */
  @media (max-width: 991px) {
    background-color: transparent;
    color: white;
    transition: background-color 0.4s ease;


    &:focus,
    &:hover {
      background-color: $button-default-inverse-hover;
    }

    &:active {
      background-color: $button-default-inverse-active;
    }
  }
`

export const MenuButton = MenuLink.withComponent('button')

export const BrandImage = styled.img`
  ${props => props.onlyMobile ? OnlyMobile : ''}
  ${props => props.onlyDesktop ? OnlyDesktop : ''}
`
