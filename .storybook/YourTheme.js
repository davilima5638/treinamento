import { create } from '@storybook/theming';

export default create({
  base: 'light',
 
  colorPrimary: '#0e3e69', 
  colorSecondary: '#0e3e69', //cor da seleção da barra lateral

  
  appBg: 'white', // cor da barra Lateral
  appContentBg: 'white', // cor do fundo
  appBorderColor: 'white', // cor das bordas
  appBorderRadius: 4, // borda do fundo

  // fontes
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black', 
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'black', // cor do texto da barra lateral
  barSelectedColor: '#0e3e69', // cor do texto da barra header e footer
  barBg: '#429eb9', // cor da barra header e footer

  // Form colors
  inputBorder: '#429eb9', // cor da borda dos inputs
  inputBorderRadius: 4,

  brandTitle: 'OSF Digital', // alt
  brandUrl: 'https://osf.digital/pt-br', // link
  brandImage: 'https://osf.digital/library/media/osf/digital/common/header/osf_digital_logo.svg?h=60&la=pt-BR&w=366&hash=9815CD3A7AF47118E41C4CF6D71E7C8671322057', // logo osf
});