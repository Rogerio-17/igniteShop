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
})



export const ContentButton = styled('div', {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        alignItems: 'left',
        gap: '1rem',
        color: '$gray300',
        width: '100%',

        span: {
            color: '$gray100',
            fontWeight: 'bold'
        },

        button: {
            background: 'none',
            border: 'none',
            padding: 0,
            color: '$green500',
            fontWeight: 'bold',
            textAlign: 'left',
            cursor: 'pointer',

            
        },

        div: {
            display: 'flex',
            justifyContent: 'space-between',

            button: {
                width: '1.5rem',
                textAlign: 'center'
            }
        }
})