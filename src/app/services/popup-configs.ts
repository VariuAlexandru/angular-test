import {htmlMock} from "./html-mock";
import {PassedComponent} from "../components/passed/passed.component";

export const textConfigData = {
  type: 'text',
  title: 'This is an text popup !',
  message: "Some random text",
  variant: 'warn'
}
export const htmlConfigData = {
  type: 'html',
  content: htmlMock,
  title: 'This is an html popup !',
  variant: 'primary'
}

export const componentConfigData = {
  type: 'component',
  component: PassedComponent,
}
