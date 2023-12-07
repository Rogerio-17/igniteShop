import { styled } from "../../styles";
import * as Dialog from '@radix-ui/react-dialog'

export const CartContent = styled(Dialog.Content, {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    width: '30rem',
    background: '$gray800',
    padding: '3rem',
    paddingTop: '4.5rem',
    boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8)',
    display: 'flex',
    flexDirection: 'column',

    h2: {
        marginBottom: "2rem"
    },

    main: {
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        

        section: {
            height: '65vh',
            overflowY: 'auto',
        }
    },
    
    footer: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 'auto',
        gap: '0.5rem',

        div: {
            display: 'flex',
            justifyContent: 'space-between'
        },

        '.quantity': {
            fontSize: '0.9rem'
        },

        '.value': {
            fontSize: '$lg'
        },
       

        button: {
            padding: '0.8rem',
            borderRadius: 8,
            border: 'none',
            background: '$green500',
            color: '$white',
            cursor: 'pointer',

            '&:hover': {
                transition: '0.3s',
                background: '$green300',
            }

        }
    }

});

export const CartClose = styled(Dialog.Close, {
    background: 'none',
    border: 'none',
    color: '$gray500',
    position: 'absolute',
    top: '1.75rem',
    right: '1.75rem',
    cursor: 'pointer',

    '&:hover': {
        color: '$gray100',
        transition: '0.3s'
    }
})