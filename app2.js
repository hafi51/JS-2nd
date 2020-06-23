

function hypo(base, perp){
    function sqr(a){
        document.write(a*a)
    }
    document.write(sqr(base)+sqr(perp))
}
hypo(parseInt(prompt("Enter base number")), parseInt(prompt("Enter perpandicular number")))