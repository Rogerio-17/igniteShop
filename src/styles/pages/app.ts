import { styled } from "..";

export const Container = styled('div', {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    minHeight: "100vh"
})


export const Header = styled('header', {
    display: 'flex',
    justifyContent: 'space-between',
    padding: "2rem 0",
    width: "100%",
    maxWidth: 1180,
    margin: '0 auto',

    '.handbag': {
        padding: '1rem',
        background: '$gray800',
        borderRadius: 8,
        color: '$gray300',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        span: {
            position: 'absolute',
            marginTop: '-3.5rem',
            marginLeft: '3rem',
            background: '$green500',
            padding: '0.2rem 0.5rem',
            borderRadius: '50%',
        }
    }
})