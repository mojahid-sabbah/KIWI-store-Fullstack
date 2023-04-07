import { css } from "styled-components"

const breakpoints = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tabletS: '600px',
  tabletM: '768px',
  tabletL: '900px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const mobileS = (props) => {
  return css`
    @media only screen and (max-width: ${breakpoints.mobileS}) {
      ${props}
    }
  `;
};

export const mobileM = (props) => {
  return css`
    @media only screen and (max-width: ${breakpoints.mobileM}) {
      ${props}
    }
  `;
};

export const mobileL = (props) => {
  return css`
    @media only screen and (max-width: ${breakpoints.mobileL}) {
      ${props}
    }
  `;
};

export const tabletS = (props) => {
  return css`
    @media only screen and (min-width: ${breakpoints.mobileL}) and (max-width: ${breakpoints.tabletS}) {
      ${props}
    }
  `;
};

export const tabletM = (props) => {
  return css`
    @media only screen and (min-width: ${breakpoints.tabletS}) and (max-width: ${breakpoints.tabletM}) {
      ${props}
    }
  `;
};

export const tabletL = (props) => {
  return css`
    @media only screen and (min-width: ${breakpoints.tabletM}) and (max-width: ${breakpoints.tabletL}) {
      ${props}
    }
  `;
};

export const laptop = (props) => {
  return css`
    @media only screen and (min-width: ${breakpoints.tabletL}) and (max-width: ${breakpoints.laptop}) {
      ${props}
    }
  `;
};

export const laptopL = (props) => {
  return css`
    @media only screen and (min-width: ${breakpoints.laptop}) and (max-width: ${breakpoints.laptopL}) {
      ${props}
    }
  `;
};

export const desktop = (props) => {
  return css`
    @media only screen and (min-width: ${breakpoints.laptopL}) and (max-width: ${breakpoints.desktop}) {
      ${props}
    }
  `;
};

export const desktopL = (props) => {
  return css`
    @media only screen and (min-width: ${breakpoints.desktop}) {
      ${props}
    }
  `;
};
