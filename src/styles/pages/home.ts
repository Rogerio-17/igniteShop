import {styled} from ".."

export const HomeContainer = styled("main", {
    display: "flex",
    width: '100%',
    maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
    marginLeft: "auto",
    maxHeight: 565,
    marginBottom: '25px'
})


export const Product = styled("div", {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    cursor: 'pointer',
    position: 'relative',
    overflow: "hidden",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 456,
    

    img: {
        objectFit: "cover"
    },

    footer: {
        position: 'absolute',
        bottom: '0.25rem',
        left: "0.25rem",
        right: '0.25rem',
        padding: "2rem",
        

        borderRadius: 6,

        display: 'flex',
        alignItems: "center",
        justifyContent: 'space-between',

        backgroundColor: "rgba(0, 0, 0, 0.6)",

        transform: 'translateY(110%)',
        opacity: 0,
        transition: 'all 0.2s ease-in-out',

        div: {
            display: 'flex',
            flexDirection: 'column',
        },

        strong: {
            fontSize: '$md',
            color: '$gray100',
        },

        span: {
            fontSize: '$lg',
            fontWeight: 'bold',
            color: '$green300',
            marginTop: '0.3rem'
        },

        button: {
            background: '$green300',
            color: '$gray100',
            display: 'flex',
            justifyContent: 'center',
            padding: '0.8rem',
            borderRadius: 8,
            border: 'none',
            cursor: 'pointer',

            '&:not(:disabled):hover': {
                opacity: 0.8,
                transition: '0.3s'
            },

           '&:disabled': {
                opacity: 0.7,
                cursor: 'not-allowed',
            }
        }

    },

    '&:hover': {
        footer: {
            transform: 'translateY(0%)',
            opacity: 1
        }
    }
})