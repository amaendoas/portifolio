import * as C from "./styles"
import { StackItem } from "../../components/StackItem"
import { Theme } from "../../components/Theme"
import { Title } from "../../components/Title"
import { stack } from "../../utils/stack"
import { useTranslation } from "react-i18next"

export function Stack() {
  const { t } = useTranslation()

  return (
    <Theme>
    <C.Container className="page-container">
      <Title title={t("stackTitle")}/>

      <C.Content>
          {stack.map((item) => (
            <StackItem key={item.id} title={item.title} icon={item.icon} value={item.value}/>
            ))}
      </C.Content>
    </C.Container>
    </Theme>
  )
}