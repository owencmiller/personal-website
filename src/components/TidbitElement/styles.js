import styled from 'styled-components'


export const TidbitElementContainer = styled.div`
    border-bottom: 1px solid #dadada;
    padding: 30px 0px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const TidbitElementTitle = styled.a`
    font-size: 30px;
    font-weight: 400;
    color: #000;

    &:hover{
        text-decoration: underline;
    }
`

export const TidbitElementSummary = styled.p`
    padding-top: 8px;
`

export const TidbitElementReadMore = styled.a`
    padding-top: 10px;    

    &:hover{
        text-decoration: underline;
    }
`

export default {}