import "./Ball.css"
export const Ball = ({position, boxDimensions}) =>{
    const maxHorizotal = boxDimensions.width - 10;
    const maxVertical = boxDimensions.height - 10;

    const confineHorizontal = Math.max(0, Math.min(maxHorizotal, position.x))
    const confineVertical = Math.max(0, Math.min(maxVertical, position.y))

    const style = {
        top: confineVertical + "px",
        left: confineHorizontal + "px"
    }
    console.log(position)
    return(
        <div className="ball" style={style}></div>
    )
}