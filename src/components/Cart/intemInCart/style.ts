import { styled } from "../../../styles";

export const ItemsContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: '1.2rem',
    marginBottom: '1.5rem',
    
    img: {
        width: '6.375rem',
        height: '6.375rem',
        background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
        borderRadius: 8,
    },

    div: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        gap: '1rem',
        color: '$gray300',

        span: {
            color: '$gray100',
            fontWeight: 'bold'
        },

        button: {
            background: 'none',
            width: '3.5rem',
            border: 'none',
            padding: 0,
            color: '$green500',
            fontWeight: 'bold',
            textAlign: 'left',
            cursor: 'pointer'
        }
    }
})