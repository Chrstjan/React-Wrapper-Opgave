import style from "./cardBody.module.scss"

export const CardBody = ({content = "Ingen Content", image = "https://marketplace.canva.com/EAFGlvWuzm8/1/0/800w/canva-yellow-white-3d-simple-funny-meme-XqmCcFPD0tY.jpg"}) => {
    return (
        <>
            <div className={style.cardBody}>
                <p>{content}</p>
                <img src={image} className={style.cardImage} />
            </div>
        </>
    )
}