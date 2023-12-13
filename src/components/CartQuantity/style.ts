import { styled } from "../../styles";

export const CountCoffeContainer = styled('div', {
    display: 'flex',
    flexDirection: 'row',

    'input': {
        width: '1.5rem',
        height: '2rem',
        textAlign: 'center',
        background: 'transparent',
        border: 'none',
        color: '$gray100',
        
    
        '&:focus': {
            boxShadow: '0 0 0 0',
            outline: 0,
        }
    },

    'button': {
        border: 'none',
        margin: 0,
        cursor: 'pointer',
        fontWeight: 700,
        fontSize: '$md',
    
        '&:first-child': {
            borderRadius: '8px 0px 0px 8px'
        },
    
        '&:last-child': {
            borderRadius: '0px 8px 8px 0px'
        },
    }

})
