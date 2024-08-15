export const Wrapper = (props) => {
    return (
        <>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
            {props.children}
        </>
    )
}