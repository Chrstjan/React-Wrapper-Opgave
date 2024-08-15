import style from "./Wrapper.module.scss"

export const Wrapper = (props) => {
    return (
        <>
            <div>
                <h1>{props.title}</h1>
                <h2>{props.subtitle}</h2>
                <span className={style.wrapperStyling}>
                    {props.children}
                </span>
            </div>
        </>
    )
}