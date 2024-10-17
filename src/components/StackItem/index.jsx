import * as C from "./styles"
import { StarRating } from "../StarRating"

export function StackItem({icon: Icon, color, title, value}) {
  
  return (
    <C.Container>
      <C.Item>
        <Icon size={45} color="#F28B9D"/>
        <h3>{title}</h3>
      </C.Item>
      <C.Footer>
        <StarRating value={value}/>
      </C.Footer>
    </C.Container>
  )
}