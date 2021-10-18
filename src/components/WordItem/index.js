import {ListItem, Paragraph} from './styledComponents'

const WordItem = props => {
  const {wordDetails} = props
  const {word} = wordDetails

  return (
    <ListItem>
      <Paragraph>
        {word} : {word.length}
      </Paragraph>
    </ListItem>
  )
}

export default WordItem
