import { keyframes, styled } from ".."

export const ProductContainer = styled('main', {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'stretch',
    gap: '4rem',
    overflow: 'hidden',
    maxWidth: 1180,
    margin: '0 auto',

})

export const ImageContainer = styled('div', {
    width: '100%',
    maxWidth: 696,
    maxHeight: 456,
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    padding: '0.25rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    img: {
        objectFit: 'cover'
    },

    
    h2: {
        position: 'absolute',
        marginLeft: '30rem',
        color: '$gray900'
    },

})

export const ProductDetails = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    h1: {
        fontSize: '$2xl',
        color: '$gray300',
    },

    span: {
        marginTop: '1rem',
        display: 'flex',
        fontSize: '$2xl',
        color: '$green300'
    },

    p: {
        marginTop: '2.5rem',
        fontSize: '$md',
        lineHeight: 1.6,
        color: '$gray300',
    },

    button: {
        marginTop: 'auto',
        backgroundColor: '$green500',
        border: 0,
        color: '$white',
        borderRadius: 8,
        padding: '1.25rem',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '$md',

        '&:disabled': {
            opacity: 0.6,
            cursor: 'not-allowed',
        },

        '&:not(:disabled):hover': {
            backgroundColor: '$green300'
        }
    }


})

const skeletonAnimation = keyframes({
    '0%': {
        backgroundPosition: '-200px 0',
    },

    '100%': {
        backgroundPosition: 'calc(200px + 100%) 0'
    }
})


export const LoadPage = styled('div', {
    maxWidth: 1180,
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',

    '.main': {
        width: '528px',
        height: '34.875rem',
        animation: `${skeletonAnimation} 1300ms ease-in-out infinite`,
        backgroundColor: '$gray800',
        backgroundImage: 'linear-gradient(90deg, $gray800, $gray700, $gray800)',
        backgroundSize: '200px 100%',
        backgroundRepeat: 'no-repeat',
        borderRadius: 8,
    },

    '.secondary': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },

    '.information': {
        width: '528px',
        height: '14.875rem',
        animation: `${skeletonAnimation} 1300ms ease-in-out infinite`,
        backgroundColor: '$gray800',
        backgroundImage: 'linear-gradient(90deg, $gray800, $gray700, $gray800)',
        backgroundSize: '200px 100%',
        backgroundRepeat: 'no-repeat',
        borderRadius: 8,
    },

    '.bnt': {
        width: '528px',
        height: '3.875rem',
        animation: `${skeletonAnimation} 1300ms ease-in-out infinite`,
        backgroundColor: '$gray800',
        backgroundImage: 'linear-gradient(90deg, $gray800, $gray700, $gray800)',
        backgroundSize: '200px 100%',
        backgroundRepeat: 'no-repeat',
        borderRadius: 8,
    },

})