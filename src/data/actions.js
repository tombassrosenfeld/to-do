

export const updateCard = ({ card_id, fieldName, content }) => {
	return {
		type: 'updateCard',
		card_id,
		fieldName,
		content
	}
}