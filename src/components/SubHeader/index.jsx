import { LanguageSwitch } from "../LanguageSwitch"
import { ThemeSwitch } from "../ThemeSwitch"
import * as C from "./styles"

export function SubHeader() {
  return (
    <C.Container>
      <C.Wrapper>
        <C.Card>
          <LanguageSwitch/>
          <ThemeSwitch/>
        </C.Card>
      </C.Wrapper>
    </C.Container>
  )
}