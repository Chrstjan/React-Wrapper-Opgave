import style from "./Card.module.scss"

export const Card = (props) => {
    return (
        <>
            <div className={style.flexBox}>
                {props.children}
            </div>
        </>
    )
}