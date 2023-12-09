import { styled } from "../../styles";

export const HeaderContainer = styled('header', {
    display: 'flex',
    justifyContent: 'center',
    padding: "2rem 0",
    width: "100%",
    maxWidth: 1180,
    margin: '0 auto',

    button: {
        marginLeft: 'auto',
        cursor: 'pointer',
        

        '&:hover': {
            background: '$gray700',
            transition: '0.3s',
        }
    },

    span: {
        background: '$green500',
        height: '1.2rem',
        padding: '0.3rem',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        marginLeft: '-0.6rem',
        marginTop: '-0.5rem'
    }
})